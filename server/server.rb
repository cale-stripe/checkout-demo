require 'stripe'
require 'sinatra'
require 'dotenv'

set :static, true
set :public_folder, File.join(File.dirname(__FILE__), '../client/public/html')
set :port, 4242

allowed_usernames = [
  "cale",
  "michael"
]

get '/' do
  content_type 'text/html'
  send_file File.join(settings.public_folder, 'index.html')
end

get '/players/:username' do |n|
  if allowed_usernames.include?(n)
    [
      {"name" => "Patrick Mahomes", "rating" => "Great"},
      {"name" => "David Johnson", "rating" => "Bad"},
      {"name" => "Booger McFarland", "rating" => "Literally the worst"},
    ].to_json
  else
    [].to_json
  end
end

post '/checkout_session' do
  session = create_checkout_session

  {"sessionId" => session["id"]}.to_json
end

def create_checkout_session
  Stripe.api_key = 'sk_test_123'

  Stripe::Checkout::Session.create(
    payment_method_types: ['card'],
    line_items: [
      {
        price: 'price_HE3ixi6tfxmGzu',
        quantity: 1
      }
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000',
    cancel_url: 'http://localhost:3000',
  )
end

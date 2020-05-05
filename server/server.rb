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

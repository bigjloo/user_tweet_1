require 'byebug'

post '/tweet/new' do 
	# byebug
  @user = User.find(1)
  @tweet = Tweet.new(params[:tweet])
  @user.tweets << @tweet
  @tweets = @user.tweets.reverse
  # byebug
  erb :tweets, layout:false
end
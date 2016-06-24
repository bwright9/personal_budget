class Api::UsersController < ApplicationController
	def login
		user = User.find_by(email: params[:email])
		if user && user.password == params[:password]
			render json: user
		else
			render json: false
		end
	end
end

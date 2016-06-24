class Api::UsersController < ApplicationController
	def login
		user = User.find_by(email: params[:email])
		if user && user.password == params[:password]
			render json: user
		else
			render json: false
		end
	end

	def show
		render json: @user
	end

	private

	def user
		@user = User.find_by(id: params[:id])
	end
end

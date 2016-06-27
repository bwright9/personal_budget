class Api::UsersController < ApplicationController
	before_action :user_instance, except: :login

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

	def create
		user = User.create(user_params)
		if user.save
			render json: user
		else
			render json: { errors: user.errors.full_message}
		end
	end

	def update
		if @user.update(user_params)
			render json: @user
		else
			render json: { errors: @user.errors.full_message}
		end
	end

	private

	def user_params
		params.require(:user).permit(:name, :email, :password, :income)
	end

	def user_instance
		@user = User.find_by(id: params[:id])
	end
end

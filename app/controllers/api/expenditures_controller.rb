class Api::ExpendituresController < ApplicationController
	before_action :user_instance
	before_action :expenditure_instance, except: :create

	def index
		render json: @user.expenditures
	end

	def show
		render json: @expenditure
	end

	def create
		expenditure = @user.expenditures.create(expenditure_params)
		if expenditure.save
			render json: expenditure
		else
			render json: { errors: expenditure.errors.full_messages}
		end
	end

	def destroy
		@expenditure.destroy
		render json: true
	end

	private

	def expenditure_params
		params.require(:expenditure).permit(:name, :amount, :category)
	end

	def user_instance
		@user = User.find_by(id: params[:user_id])
	end

	def expenditure_instance
		@expenditure = @user.expenditures.find_by(id: params[:id])
	end

end

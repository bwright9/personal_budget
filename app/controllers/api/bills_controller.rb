class Api::BillsController < ApplicationController
	before_action :user_instance
	before_action :bill_instance, except: :index 

	def index 
		render json: @user.bills
	end


	def destroy
		@bill.destroy
		render json: true
	end 

	def update

	end

	def create 
		bill = @user.bills.new(bill_params)
		if bill.save
			render json: bill  
		else
			render json: { errors: bill.errors.full_messages }
		end 
	end 

	private 
	
	def bill_params
		params.require(:bill).permit(:name, :amount, :due_date)
	end 

	def user_instance
		@user = User.find_by(id: params[:user_id])
	end

	def bill_instance
		@bill = @user.bills.find_by(id: params[:id])
	end 
end

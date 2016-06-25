class Api::BillsController < ApplicationController
		before_action :bill, except: :index 
	
		def index 
			render json: @user.bills
		end
	
	
		def destroy
			 
		end 
	
		def update
	
		end
	
		def create 
			bill = @user.bills.new(budget_params)
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
	
	
		def bill 
			@bill = @user.bills.find_by(id: params[:id])
		end 
	end
end

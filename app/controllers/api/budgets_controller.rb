class Api::BudgetsController < ApplicationController
	before_action :user_instance
	before_action :budget_instance, except: [:index, :create]

	def index
		render json: @user.budgets
	end

	def create
		budget = @user.budgets.new(budget_params)
		if budget.save
			render json: budget
		else
			render json: { errors: budget.errors.full_messages	}
		end
	end

	def update
		if @budget.update(budget_params)
			render json: @budget
		else
			render json: { errors: @budget.errors.full_messages}
		end
	end

	def destroy
		@budget.destroy
		render json: true
	end

	private

	def budget_params
		params.require(:budget).permit(:name, :amount)
	end

	def user_instance
		@user = User.find_by(id: params[:user_id])
	end

	def budget_instance
		@budget = @user.budgets.find_by(id: params[:id])
	end
end

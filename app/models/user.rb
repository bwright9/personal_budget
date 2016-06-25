class User < ActiveRecord::Base
	validates_presence_of :name, :email, :password
	has_many :budgets
	has_many :bills
	has_many :misc_incomes
	has_many :expenditures
end

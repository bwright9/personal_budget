Rails.application.routes.draw do
	root 'home#index'

	namespace :api do
		post 'login', to: 'users#login'
		resources :users do
			resources :bills, except: [:new, :edit]
			resources :budgets, except: [:new, :edit]
			resources :misc_incomes, except: [:new, :edit]
		end
	end

  get '*unmatched_route', to: 'home#index'
end

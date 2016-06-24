Rails.application.routes.draw do



  get '*unmatched_route', to: 'home#index'
end

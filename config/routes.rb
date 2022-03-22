Rails.application.routes.draw do

	resources :users, only: :create
	resources :movies, only: [:index, :show]
	get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end

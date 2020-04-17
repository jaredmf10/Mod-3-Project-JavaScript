Rails.application.routes.draw do
  resources :settings
  resources :users
  resources :user_settings
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

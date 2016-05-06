Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :destroy]
    resources :sessions, only: [:create, :destroy]
  end
end

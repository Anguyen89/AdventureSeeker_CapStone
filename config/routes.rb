Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :index, :create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :adventures, only: [:create, :index, :destroy]
  end
end

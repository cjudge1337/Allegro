Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'api/users/:id', to: 'api/users#show_page'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :songs, except: [:new, :edit] do
      resources :comments, only: [:index]
    end
    resources :comments, except: [:new, :edit, :index, :update]
  end


  root "static_pages#root"
end

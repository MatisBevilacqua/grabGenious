Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users do
        collection do
          post 'login', to: 'users#login'
          get 'last_coin_update', to: 'users#last_coin_update'
          post 'add_coins', to: 'users#add_coins'
        end
      end
    end
  end
end

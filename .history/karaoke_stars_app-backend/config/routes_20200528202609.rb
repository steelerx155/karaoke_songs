Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do 
    namespace :v1 do
      resources :songs
    end
end
end


#   get '/test', to: 'application#test'
# end


# Rails.application.routes.draw do
#   get '/test', to: 'application#test'
# end

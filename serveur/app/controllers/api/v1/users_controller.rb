class Api::V1::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
  
    def create
      user = User.new(user_params)
      user.token = generate_token
      user.coin = 3
  
      if user.save
        render json: { user: user }, status: :created
      else
        render json: { error: user.errors }, status: :unprocessable_entity
      end
    end

    def last_coin_update
      user = User.find_by(token: request.headers['Authorization'])
      puts user
      if user
        render json: { last_coin_update: user.last_coin_update }
      else
        render json: { error: 'Invalide' }, status: :unprocessable_entity
      end
    end
    

    def show
        user = User.find_by(token: params[:id])
        if user
          render json: { user: user }, status: :ok
        else
          render json: { error: 'Utilisateur non trouvé' }, status: :not_found
        end
    end

    def login
        user = User.find_by(email: params[:email])
    
        if user && user.authenticate(params[:password])
          render json: { user: user }, status: :ok
        else
          render json: { error: 'Identifiants invalides' }, status: :unauthorized
        end
    end


  
    private
  
    def user_params
      params.require(:user).permit(:lastname, :surname, :email, :password)
    end
  
    def generate_token
      SecureRandom.hex((50))
    end
  end
  
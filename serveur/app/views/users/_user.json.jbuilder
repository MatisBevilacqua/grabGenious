json.extract! user, :id, :name, :surname, :email, :password, :token, :coin, :created_at, :updated_at
json.url user_url(user, format: :json)

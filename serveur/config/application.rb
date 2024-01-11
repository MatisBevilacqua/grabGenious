require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module Serveur
  class Application < Rails::Application

    
    # Middleware Rack CORS pour autoriser les requêtes externes
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*' # Vous pouvez spécifier des domaines spécifiques au lieu de '*'
        resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options]
      end
    end

    config.load_defaults 7.1

    # Please, add to the `ignore` list any other `lib` subdirectories that do
    # not contain `.rb` files, or that should not be reloaded or eager loaded.
    # Common ones are `templates`, `generators`, or `middleware`, for example.
    config.autoload_lib(ignore: %w(assets tasks))

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end

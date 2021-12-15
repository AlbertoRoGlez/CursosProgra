class WelcomeController < ApplicationController
    def hello
        name = Pet.first.name
        breed = Pet.first.breed
        @variable = "Hola soy #{name}, y soy un #{breed}"
        @credentials = Rails.application.credentials.hello
    end
end

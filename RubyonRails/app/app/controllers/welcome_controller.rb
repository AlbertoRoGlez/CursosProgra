class WelcomeController < ApplicationController
    def hello
        name = Pet.first.name
        breed = Pet.first.breed
        @variable = "Hola soy #{name}, y soy un #{breed}"
    end
end

#-------------------------------------------------------------------#
# class Persona 
#     def self.suggested_names #Método que nos retornará nombres
#         ["Juan", "Pedro", "Alberto"]
#     end
#     def initialize(name, age) #Constructor
#       @name = name #Variable de instancia se inicializa con el parametro en el constructor
#       @age = age
#     end
#     def name #Getter
#       @name
#     end
#     def age #Getter
#         @age
#       end
#     def name=(name) #Setter
#        @name = name
#        self
#     end
#     def age=(age) #Setter
#         @age = age
#         self
#      end
#   end
#-------------------------------------------------------------------#
# class Persona 
#     attr_accessor(:name, :age) #Genera getters y setters
#     def self.suggested_names #Método que nos retornará nombres
#         ["Juan", "Pedro", "Alberto"]
#     end
#     def initialize(name, age) #Constructor
#       @name = name #Variable de instancia se inicializa con el parametro en el constructor
#       @age = age
#     end
#   end
#-------------------------------------------------------------------#
class Persona < Struct.new(:name, :age) #Struct declara el constructor, getters y setters
    def suggested_names #Método que nos retornará nombres
        ["Juan", "Pedro", "Alberto"]
    end
end
#-------------------------------------------------------------------#
  persona = Persona.new("pepe", 14)
  puts persona.name
  puts persona.age
#-------------------------------------------------------------------#

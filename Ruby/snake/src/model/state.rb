#Vamos a crear las clases necesarias para representar el estado de nuestra aplicación.
module Model
    module Direction #Direcciónes en las que se moverá nuestra serpiente
        UP = :up
        RIGHT = :right
        DOWN = :down
        LEFT = :left
    end
    class Coord < Struct.new(:row, :col) #Nuestr clase para las coordenadas
    end
    class Food < Coord #Utilizamos herencia para decir que la comida es una especializacion de una coordenada
    end
    class Snake < Struct.new(:positions) #Tiene una propiedad la cual serán las posiciones
    end
    class Grid < Struct.new(:rows, :cols) #Nuestra grilla tiene filas y columnas
    end
    class State < Struct.new(:snake, :food, :grid, :next_direction) #State va a englobar toda la información en una sola clase
    end

    def self.initial_state #Metodo  de clase para que no tengamos que instanciar una clase adicional
        Model::State.new(
            Model::Snake.new([
                Model::Coord.new(1, 1), 
                Model::Coord.new(0, 1)
                ]),
            Model::Food.new(4, 4), #Food hereda las propiedades de Coord
            Model::Grid.new(8, 12), #La grilla de nuestro juego tendra 8 filas y 12 columnas
            Model::Direction::DOWN
        )
    end
end
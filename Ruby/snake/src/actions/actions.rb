module Actions #Toda la lógica destinada a modificar el estado va a estar dentro de este modulo

    #Todos estos métodos siempre van a recibir el estado y van a retornar el nuevo estado
    def self.move_snake(state)
        next_direction = state.next_direction #Hace referencia al :next_direction que tenemos en el state
        next_position = calc_next_position(state)
        # verificar que la siguiente casilla sea valida
        if position_is_valid?(state, next_position)
            move_snake_to(state, next_position) # si la posicion es valida debemos mover la serpiente
        else
            end_game(state) # si la posicion no es valida debemos terminar el juego
        end
    end

    private
    def calc_next_position(state)
        curr_position = state.snake.positions.first
        case state.next_direction
        when UP
            # decrementar fila
            # [(1,1), (0,1)] es como si las posiciones de este arreglo se movieran de derecha a izquierda
            return Model::Coord.new (
                curr_position.row - 1,
                curr_position.col)
        when RIGHT
            # incrementar columna
            return Model::Coord.new (
                curr_position.row,
                curr_position.col + 1)
        when DOWN
            # incrementar fila
            return Model::Coord.new (
                curr_position.row + 1,
                curr_position.col)
        when LEFT
            # decrementar columna
            return Model::Coord.new (
                curr_position.row,
                curr_position.col - 1)
        end
    end
   def position_is_valid?(state, next_position)
   end
end
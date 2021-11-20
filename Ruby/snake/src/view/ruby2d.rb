require "ruby2d" #para poder tener acceso a los modulos de ruby2d


module View
    class Ruby2dView
        def initialize #definimos constructor
            @pixel_size = 50 #pixel_size define el tamaño de nuestros cuadritos
        end
        def render(state)   #en render pondremos la lógica principal, render debe recibir el estado ("state") de la aplicación donde va a estar 
                            #alojado todos los datos necesarios para pintar el juego
            extend Ruby2D::DSL #aqui usamos Ruby2D, el cual usa un DSL especializado en aplicaciones graficas
            set(title:"Snake",
                width: @pixel_size * state.grid.cols,
                height: @pixel_size * state.grid.rows) #con set podemos configurar la ventana de nuestra aplicación
                render_food(state)
                render_snake(state)
            show
        end

        private

        def render_food(state) #para hacer el render de food necesitamos pintar un cuadrado
            extend Ruby2D::DSL
            food = state.food #Obtenemos food de state para poder acceder a sus col y row
            Square.new(  
                x: food.col * @pixel_size, #definimos el tamaño de nuestra comida con la columna donde se encuentra multiplicada por nuestro pixel_size
                y: food.row * @pixel_size, #definimos el tamaño de nuestra comida con la fila donde se encuentra multiplicada por nuestro pixel_size
                size: @pixel_size,
                color: 'yellow',
            )
        end

        def render_snake(state)
            extend Ruby2D::DSL
            snake = state.snake
            snake.positions.each do |pos|
                Square.new(
                x: pos.col * @pixel_size,
                y: pos.row * @pixel_size,
                size: @pixel_size,
                color: 'green'
                )
            end
        end
    end
end
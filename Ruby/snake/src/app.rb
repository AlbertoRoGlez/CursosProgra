#Aqui estará el punto de entrada de nuestra aplicación
require_relative "view/ruby2d" #Este es un método que nos permite incluir otros archivos de Ruby utilizando un path relativo
require_relative "model/state"



#Vamos a crear nuestra clase App
class App 
    def start
        view = View::Ruby2dView.new #Creamos una nueva instancia de clase llamada view, utilizando la clase Ruby2dView dentro del modulo View
        init_state = Model::initial_state #nos va a devolver el estado inicial de la aplicación
        view.render(init_state) #Usamos el método render de nuestra instancia de clase Ruby2dView
    end

    def init_timer #Creamos nuestro método para el timer, el cual será un loop infinito que va a estar desencadenando la acción de mover la serpiente
        loop do
            sleep 0.5 #Sleep lo que hace es pararlo, en este caso por 0.5 segundos
            #trigger movement
        end
    end
end
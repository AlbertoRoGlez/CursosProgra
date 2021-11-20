#Aqui estará el punto de entrada de nuestra aplicación
require_relative "view/ruby2d" #Este es un método que nos permite incluir otros archivos de Ruby utilizando un path relativo
require_relative "model/state"

view = View::Ruby2dView.new #Creamos una nueva instancia de clase llamada view, utilizando la clase Ruby2dView dentro del modulo View

init_state = Model::initial_state #nos va a devolver el estado inicial de la aplicación
view.render(init_state) #Usamos el método render de nuestra instancia de clase Ruby2dView
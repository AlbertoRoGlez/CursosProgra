require "minitest/autorun" #minitest es parte de la libreria standar del core de ruby, no hace falta instalarlo en el gemfile.
#autorun va a detectar automaticamente que dentro de nuestro archivo hay un test de minitest y lo va a ejecutar automaticamente.
#----------------------------------------------------------------------------------------------------------------------------------#
class Calculator
    def sum(a,b)
        a + b
    end
    def substract(a,b)
        a - b
    end
end
#----------------------------------------------------------------------------------------------------------------------------------#
class TestCalculator < Minitest::Test #clase de pruebas hereda de minitest
    def setup
        #instanciamos nuestra calculadora para no tener que instanciarla en cada uno de los metodos de prueba.
        @calc = Calculator.new 
    end
    #tenemos que definir los métodos con el prefijo test_ para que minitest se encarge de ejecutar estos métodos automaticamente.
    def test_sum_positives
        #usamos nuestra calculadora que es una variable de instancia y guardamos el resultado en una variable auxiliar "result"
        result = @calc.sum(1,3)
        #usamos el metodo assert_equals, incluido en minitest.
        assert_equal 4, result
    end
    def test_sum_negatives
        result = @calc.sum(-1,-3)
        assert_equal -4, result
    end
    def test_sum_mixed
        result = @calc.sum(1,-3)
        assert_equal -2, result

    end
end
#----------------------------------------------------------------------------------------------------------------------------------#
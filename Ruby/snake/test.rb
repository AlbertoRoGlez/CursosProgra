require "byebug"

class Calculator
    def sum(a,b)
        a + b
    end
    def substract(a,b)
        a - b
    end
end

calc = Calculator.new
tests_sum = {
    [1,2] => 3, 
    [5,6] => 11, 
    [100,1] => 101
}

tests_sum.each do |digito, resultado|
    #byebug
    if !(calc.sum(digito[0], digito[1]) == resultado)
    puts "Test fallido por digito #{digito}, resultado esperado #{resultado}"
    else 
    puts "Test exitoso"
    end
end
#Declaramos un módulo
#-------------------------------------------------
# Modulos de modelos
module Model
    class Company
    end
    class Employee
    end
end
#-------------------------------------------------
  # Modulos de reportes
module Reports
    class ExcelReporter
      def build
        puts "Generating excel report"
      end
    end
  
    class EmailReporter
    end
end
#-------------------------------------------------
#los dos puntos indican que queremos acceder
#a algo que esta dentro del módulo reports
#luego hacemos referencia a la clase
excel_report = Reports::ExcelReporter.new
excel_report.build

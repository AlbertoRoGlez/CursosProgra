class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.text :about_me
      t.integer :phone

      t.timestamps
    end
  end
end

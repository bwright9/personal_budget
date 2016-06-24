class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.float :income

      t.timestamps null: false
    end
  end
end

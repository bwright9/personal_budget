class CreateExpenditures < ActiveRecord::Migration
  def change
    create_table :expenditures do |t|
      t.string :name
      t.string :amount
      t.string :category
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

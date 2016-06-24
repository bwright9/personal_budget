class CreateBudgets < ActiveRecord::Migration
  def change
    create_table :budgets do |t|
      t.string :name
      t.float :amount
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

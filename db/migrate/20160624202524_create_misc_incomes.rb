class CreateMiscIncomes < ActiveRecord::Migration
  def change
    create_table :misc_incomes do |t|
      t.string :description
      t.float :amount
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

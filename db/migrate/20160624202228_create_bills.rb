class CreateBills < ActiveRecord::Migration
  def change
    create_table :bills do |t|
      t.string :name
      t.float :amount
      t.date :due_date
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

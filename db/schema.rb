# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160624202524) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bills", force: :cascade do |t|
    t.string   "name"
    t.float    "amount"
    t.date     "due_date"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "bills", ["user_id"], name: "index_bills_on_user_id", using: :btree

  create_table "budgets", force: :cascade do |t|
    t.string   "name"
    t.float    "amount"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "budgets", ["user_id"], name: "index_budgets_on_user_id", using: :btree

  create_table "misc_incomes", force: :cascade do |t|
    t.string   "description"
    t.float    "amount"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "misc_incomes", ["user_id"], name: "index_misc_incomes_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.float    "income"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "bills", "users"
  add_foreign_key "budgets", "users"
  add_foreign_key "misc_incomes", "users"
end

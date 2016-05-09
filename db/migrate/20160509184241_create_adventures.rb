class CreateAdventures < ActiveRecord::Migration
  def change
    create_table :adventures do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :location, null: false
      t.text :description, null: false
      t.float :lng
      t.float :lat


      t.timestamps null: false
    end
    add_index :adventures, :index
  end
end

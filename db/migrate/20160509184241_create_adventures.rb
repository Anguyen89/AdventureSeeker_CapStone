class CreateAdventures < ActiveRecord::Migration
  def change
    create_table :adventures do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :location, null: false
      t.text :description, null: false
      t.float :lng, null: false
      t.float :lat, null: false


      t.timestamps null: false
    end
    add_index :adventures, :user_id
  end
end

class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :name
      t.string :street
      t.string :city
      t.string :state
      t.text :description
      t.text :phone
      t.text :hours
      t.boolean :outside
      t.boolean :inside
      t.boolean :water
      t.boolean :children
      t.boolean :pets
      t.boolean :food
      t.boolean :alcohol
      t.text :image

      t.timestamps
    end
  end
end

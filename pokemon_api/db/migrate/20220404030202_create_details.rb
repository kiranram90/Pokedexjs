class CreateDetails < ActiveRecord::Migration[6.1]
  def change
    create_table :details do |t|
      t.string :elements
      t.string :location
      t.string :size
      t.string :name
      t.timestamps
    end
  end
end

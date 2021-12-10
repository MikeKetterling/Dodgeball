class CreateAthletes < ActiveRecord::Migration[6.1]
  def change
    create_table :athletes do |t|
      t.references :team
      t.string :name
      t.string :image
      t.float :height
      t.float :weight
      t.float :strength
      t.float :speed
    end
  end
end

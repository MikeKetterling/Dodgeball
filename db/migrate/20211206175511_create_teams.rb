class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :location
      t.string :image
      t.string :primary_color
      t.string :secondary_color
    end
  end
end

class CreateMagics < ActiveRecord::Migration[6.0]
  def change
    create_table :magics do |t|
      t.integer :sound_id
      t.integer :effect_id

      t.timestamps
    end
  end
end

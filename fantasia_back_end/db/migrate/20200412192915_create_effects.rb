class CreateEffects < ActiveRecord::Migration[6.0]
  def change
    create_table :effects do |t|
      t.string :name

      t.timestamps
    end
  end
end

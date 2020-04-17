class CreateSettings < ActiveRecord::Migration[6.0]
    def change
      create_table :settings do |t|
        t.string :name
        t.float :attack
        t.float :decay
        t.float :sustain
        t.integer :release
        t.string :_attackCurve
        t.string :_releaseCurve
        t.timestamps
      end
    end
  end
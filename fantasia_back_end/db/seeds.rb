# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(name: 'Jared')
setting1 = Setting.create(name: "low", attack: 0.01, decay: 0.1, sustain: 0.1, release: 1, _attackCurve: "linear", _releaseCurve: "exponential")
setting1 = Setting.create(name: "high", attack: 2.0, decay: 2.0, sustain: 1.0, release: 4, _attackCurve: "exponential", _releaseCurve: "exponential")
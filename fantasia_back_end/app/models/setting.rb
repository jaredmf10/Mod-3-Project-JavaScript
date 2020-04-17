class Setting < ApplicationRecord
    has_many :user_settings
    has_many :users, through: :user_settings
end
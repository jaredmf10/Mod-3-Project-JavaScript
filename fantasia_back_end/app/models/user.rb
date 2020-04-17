class User < ApplicationRecord
has_many :user_settings
has_many :settings, through: :user_settings
end
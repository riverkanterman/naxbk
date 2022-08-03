class Review < ApplicationRecord
    belongs_to :location
    belongs_to :user

    validates :user_id, presence: true
    validates :location_id, presence: true
end

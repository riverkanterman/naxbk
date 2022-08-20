class Location < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true
    validates :address, presence: true
    validates :phone, presence: true
    validates :latitude, presence: true
    validates :longitude, presence: true
    
end

class Location < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    attr_accessible :name, :address, :latitude, :longitude
    geocoded_by :address
    after_validation :geocode, :if => :address_changed?

    validates :location_name, presence: true
    validates :location_address, presence: true
    validates :location_phone, presence: true
    
end

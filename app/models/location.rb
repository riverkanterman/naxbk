class Location < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    #attr_accessible :name, :address, :latitude, :longitude
    geocoded_by :address
    after_validation :geocode, :if => :address_changed?

    validates :name, presence: true
    validates :address, presence: true
    validates :phone, presence: true
    validates :latitude, presence: true
    validates :longitude, presence: true
    
end

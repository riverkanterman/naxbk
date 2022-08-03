class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone, :latitude, :longitude
end

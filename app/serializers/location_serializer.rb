class LocationSerializer < ActiveModel::Serializer
  attributes :type, :properties, :geometry

  def type
    return "Feature"
  end

  def properties
    return {
      id: object.id,
      name: object.name,
      address: object.address,
      phone: object.phone,
    }
  end

  def geometry
    return {
      type: "Point",
      coordinates: [
        object.latitude,
        object.longitude
      ]
    }
  end

end

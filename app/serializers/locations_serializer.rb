class LocationsSerializer < ActiveModel::Serializer
  attributes :type, :features

  def type
    return "FeatureCollection"
  end

  def features
    object.map do |location|
      LocationSerializer.new(location)
    end
  end

end

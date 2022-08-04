class GeojsonBuilder < ApplicationRecord
    def build_location(location, geojson)
        geojson << {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [location.longitude, location.latitude] # this part is tricky
          },
          properties: {
            name: location.name,
            address: location.address,
            phone: location.phone,
            :"marker-color" => "#FFFFFF",
            :"marker-symbol" => "circle",
            :"marker-size" => "medium",
          }
        }
      end
    end
end

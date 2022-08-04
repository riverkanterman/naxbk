class LocationsController < ApplicationController
# skip_before_action :authorize
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index
        locations = Location.all
        geojson = Array.new
        build_geojson(location, geojson)
    end

    respond_to do |format|
        format.html
        format.json { render json: geojson}
    end

    def build_geojson(locations, geojson)
        locations.each do |event|
            geojson <<GeojsonBuilder.build_location(location)
        end
    end

    private

    def location_params
        params.permit(:name, :address, :latitude, :longitude, :phone, :review)
    end

    def render_not_found
        render json: { error: "Location not found"}, status: :not_found
    end

    def render_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }
    end

end

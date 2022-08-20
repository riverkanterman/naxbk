class LocationsController < ApplicationController
# skip_before_action :authorize
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index
        locations = Location.all 
        render json: locations, status: :ok
    end

    def show
        location = Location.find_by!(id: params[:id])
        render json: location, status: :ok
    end

    def update
        location = Location.find_by!(id: params[:id])
        render json: location, status: :accepted
    end

    private

    def location_params
        params.permit(:name, :address, :latitude, :longitude, :phone)
    end

    def render_not_found
        render json: { error: "Location not found"}, status: :not_found
    end

    def render_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }
    end

end

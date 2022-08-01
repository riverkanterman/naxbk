class LocationsController < ApplicationController

    def index
        locations = Location.all
        render json: location, status: :ok
    end

    def show
        location = Location.find_by!(id: params[:id])
        render json: location, status: :ok
    end
end

class UsersController < ApplicationController
skip_before_action :authorize, only: :create
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index
        users = User.all
        render json: users, status: ok
    end

    def show
        render json: @current_user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.index
        render json: user, status: :accepted
    end

    private
    def user_params
        params.permit(:username, :password, :password_confirmation, :id)
    end

    def render_not_found
        render json: { error: "User not found" }, status: :render_not_found
    end

    def render_invalid (invalid)
        render json: { errors: invalid.record.errors.full_messages }
    end
end

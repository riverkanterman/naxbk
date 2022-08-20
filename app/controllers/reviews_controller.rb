class ReviewsController < ApplicationController
    # skip_before_action :authorize
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

        def index
            reviews = Review.all
            render json: review, status: :ok
        end

        def show
            review = Review.find_by!(id: params[:id])
            render json: review, status: :ok
        end

        def create
            review = Review.create!(review_params)
            render json: review, status: :created
        end

        def update
            review = Review.find_by!(id: params[:id])
            review.update!(review_params)
            render json: post, status: :accepted
        end

        def destroy
            review = Review.find_by!(id: params[:id])
            review.destroy
            head :no_content

        private

        def review_params
            params.permit( :comment, :user_id)
        end
    
        def render_not_found
            render json: { error: "Review not found"}, status: :not_found
        end
    
        def render_invalid(invalid)
            render json: { errors: invalid.record.errors.full_messages }
        end
end

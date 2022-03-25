class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :not_valid
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    before_action :authorize

    def current_user
        true
        #User.find_by( id: session[:user_id] )
    end

    private

    def not_found(invalid)
        render json: { error: "#{invalid.model} not found" }, status: 404
    end

    def not_valid(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: 422
    end

    def logged_in?
        !!current_user
    end

    def authorize
        render( json: {error: 'plz log in'}, status: 401) unless logged_in?
    end
end

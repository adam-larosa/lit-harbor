class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorize

    def current_user
        false
    end

    private

    def logged_in?
        !!current_user
    end

    def authorize
        render( json: {error: 'plz log in'}, status: 401) unless logged_in?
    end
end

class MoviesController < ApplicationController

	def index
		render json: Movie.all
	end

	def show
		render json: Movie.find( params[:id] )
	rescue ActiveRecord::RecordNotFound
  		render json: "Bird not found", status: :not_found
	end
end

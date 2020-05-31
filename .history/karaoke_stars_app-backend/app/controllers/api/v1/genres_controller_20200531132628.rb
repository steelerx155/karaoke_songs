class Api::V1::GenresController < ApplicationController

    def index 
        @genres = Genre.all
        render json: GenreSerializer.new(@genres)
    end

    # def show
    #     @genre = Genre.find(params[:id])
    #     render json: @genre
    # end


    # def create 
    #     @genre = genre.create(genre_params)
    #     render json: @genre
    # end

    # def update
    #     @genre = genre.find(params[:id])
    #     @genre.update(genre_params)

    #     render json: @genre 
    # end

    def destory
        @genre = genre.find(params[:id])
        @genre.delete

        render json: @genre.id

    end

    private
    def genre_params
        params.require(:genre).permit(:name)
    end

end

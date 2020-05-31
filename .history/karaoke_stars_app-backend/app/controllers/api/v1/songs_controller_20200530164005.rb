class Api::V1::SongsController < ApplicationController   


    def index 
        @songs = Song.all
        render json: SongSerializer.new(@songs)
    end

    def show
        @song = Song.find(params[:id])
        render json: @song
    end


    def create 
        song = Song.new(song_params)
        if song.save
            render json: song
        else
        render json: {errors: song.errrors.full_messages}
        end
    end


    def update
        @song = Song.find(params[:id])
        @song.update(song_params)

        render json: @song 
    end

    def destory
        @song = Song.find(params[:id])
        @song.delete
        render json: @song.id

    end

    private
    def song_params
        params.require(:song).permit(:title, :lyrics, :genre_id)
    end
end


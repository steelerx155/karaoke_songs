class Api::V1::SongsController < ApplicationController

    def index 
        @songs = Song.all

        render json: @songs
    end

    def show
        @song = Song.all

        render json: @song
    end

    def update
        
    end

    def destory
    end

end

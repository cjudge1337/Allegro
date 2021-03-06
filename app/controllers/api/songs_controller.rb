class Api::SongsController < ApplicationController

  def index
    @songs = Song.all
  end

  def create
    @song = Song.new(song_params)
    @song.user_id = current_user.id
    @song.artist = current_user.username

    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def show
    @song = Song.find(params[:id])
  end

  def update
    @song = Song.find(params[:id])
    if @song.update(song_params)
      render :show
    else
      render json: { errors: ["Invalid input"] }, status: 422
    end
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy
    render :show
  end

  private

  def song_params
    params.require(:song).permit(:title, :song_url, :song_img_url, :song_panel_img_url, :artist)
  end

end

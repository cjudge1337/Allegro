class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where(song_id: params[:song_id])
    render 'api/comments/index'
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def destroy
    comment_id = params[:id].to_i
    @comment = Comment.find(comment_id)
    @comment.destroy
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :song_id)
  end
end

class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render :show
    else
      render json: @user.errors, response: 422
    end
  end

  def show
    @user = User.new(user_params)
    if @user
      render :show
    else
      render json: @user.errors, response: 404
    end
  end

  def show_page
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: @user.errors, response: 404
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: { errors: ["Invalid input"] }, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:password, :username, :bio, :panel_url,
                                 :profile_pic_url)
  end

end

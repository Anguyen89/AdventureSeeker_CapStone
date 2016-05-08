class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end


  def show
    @user = User.find_by(id: params[:id])
    #current_user put this back in
    if @user
      login(@user)
      render :show
    else
      @errors = @user.errors.full_messages
      render {}
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      login(@user)
      render :show
    else
      @errors = @user.errors.full_messages
      render 'api/errors/errors'
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end


end

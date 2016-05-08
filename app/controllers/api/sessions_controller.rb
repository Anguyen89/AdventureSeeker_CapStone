class Api::SessionsController < ApplicationController

  def create
    username = params[:user][:username]
    password = params[:user][:password]
    @user = User.find_by_credentials(username, password)

    if @user
      login(@user)
      render 'api/users/show'
    else
      @errors = ["NO SUCH USER"]
      render 'api/errors/errors'
    end
  end

  def destroy
    if current_user
      logout!
      render :json
    else
      @errors = ['No Such User']
      render 'api/errors/errors'
    end
  end
end

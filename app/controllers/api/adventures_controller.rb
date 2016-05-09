class Api::AdventuresController < ApplicationController

  def index
    @adventures = Adventure.all
    # in_bounds(params[:bounds])
  end

  def create
    @adventure = Adventure.create!(adventure_params)
    render :show
  end

  def show
    @adventure = Adventure.find(params[:id])
  end

  def destroy
    adventure = Adventure.find(params[:id])
    adventure.destroy!
    render :show
  end


end

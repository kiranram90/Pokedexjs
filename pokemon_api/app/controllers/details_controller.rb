class DetailsController < ApplicationController
  before_action :set_detail, only: [:show, :update, :destroy]

  # GET /details
  def index
    @details = Detail.all

    render json: @details
  end

  # GET /details/1
  def show
    render json: @detail
  end

  # POST /details
  def create
    @detail = Detail.new(detail_params)

    if @detail.save
      render json: @detail, status: :created, location: @detail
    else
      render json: @detail.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /details/1
  def update
    if @detail.update(detail_params)
      render json: @detail
    else
      render json: @detail.errors, status: :unprocessable_entity
    end
  end

  # DELETE /details/1
  def destroy
    @detail.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_detail
      @detail = Detail.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def detail_params
      params.require(:detail).permit(:elements, :location, :size, :name)
    end
end

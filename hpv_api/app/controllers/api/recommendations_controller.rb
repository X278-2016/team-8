class Api::RecommendationsController < ApplicationController
  def index
    recommendations = Recommendation.all
    render json: {status: 'Success', message: 'Loaded all recommendations', data: recommendations}, status: :ok
  end
  def show

  end
  def new
  end
  def edit

  end
  def create
    created = Recommendation.make_new(params[:_json])
    render json: {}, status: :ok if created
    render json: {}, status: :internal_server_error if !created
  end
  def update

  end
  def destroy

  end
  def options
    head :ok
  end
end

class Api::QuestionsController < ApplicationController
  def index
    questions = Question.all
    render json: {status: 'Success', message: 'Loaded all questions', data: questions}, status: :ok
  end
  def show

  end
  def new

  end
  def edit

  end
  def create

  end
  def update

  end
  def destroy

  end
end

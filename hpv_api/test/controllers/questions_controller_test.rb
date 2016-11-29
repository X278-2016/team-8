require 'test_helper'

class QuestionsControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  def setup
    Rails.application.load_seed
  end

  test "can get questions via index" do
    get api_questions_url
    #assert_response :success
    body = JSON.parse(@response.body)
    assert_equal('Loaded all questions', body['message'])
  end


end

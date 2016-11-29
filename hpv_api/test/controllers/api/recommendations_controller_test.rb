require 'test_helper'

class Api::RecommendationsControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "test_create_recommendation" do
    post :create, {answers: [1,2,3]}
    assert_response :success
    get :index
    body = JSON.parse(@response.body)
    assert_equal('Test123', body['data'])
  end

  #test "can get recommendations via index" do
   # get :index
   # assert_response :success
   # body = JSON.parse(@response.body)
  #  assert_equal('Test123', body['data'][0]["content"])
 # end

end

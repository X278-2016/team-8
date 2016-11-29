require 'test_helper'

class RecommendationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "make_new" do
    ans = ["Please make 1", "Please make 2"]
    #Recommendation.make_new(ans)
    assert_equal("Test",Recommendation.all)
  end
end

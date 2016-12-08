require 'test_helper'

class QuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "get_seed" do
    assert_equal("test@test.com",Question.find(0))
  end
end

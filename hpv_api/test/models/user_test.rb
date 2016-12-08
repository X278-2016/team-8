require 'test_helper'

class UserTest < ActiveSupport::TestCase

  def setup
    Rails.application.load_seed
  end

  test "get_seed" do
    assert_equal("test@test.com",User.first.email)
  end
end
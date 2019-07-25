require("minitest/autorun")
require("minitest/rg")
require_relative("../card.rb")

class CardTest < MiniTest::Test

  def setup()

    @card = Card.new("Hearts", 9)

  end

  def test_card_suit()
    assert_equal("Hearts", @card.suit)
  end

  def test_card_value()
    assert_equal(9, @card.value)
  end

end

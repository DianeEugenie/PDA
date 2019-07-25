require("minitest/autorun")
require("minitest/rg")
require_relative("../card_game.rb")
require_relative("../card.rb")

class CardGameTest < MiniTest::Test

  def setup()

    @card1 = Card.new("Hearts", 1)
    @card2 = Card.new("Hearts", 8)

    @cards = [@card1, @card2]

    @cardgame = CardGame.new("Higher/Lower", @cards)

  end

  def test_game_has_name()
    assert_equal("Higher/Lower", @cardgame.name)
  end

  def test_game_has_cards()
    assert_equal(@cards, @cardgame.cards)
    assert_equal(2, @cardgame.cards.count)
  end

  def test_check_for_ace__if_true()
    result = @cardgame.check_for_ace(@card1)
    assert_equal(true, result)
  end

  def test_check_for_ace__if_false()
    result = @cardgame.check_for_ace(@card2)
    assert_equal(false, result)
  end

  def test_highest_card()
    result = @cardgame.highest_card(@card1, @card2)
    assert_equal(@card2, result)
  end

  def test_self_cards_total()
    result = @cardgame.self_cards_total(@cards)
    assert_equal("You have a total of 9", result)
  end


end

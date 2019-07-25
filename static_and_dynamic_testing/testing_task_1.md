### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame
  #no attr_reader with properties
  #class has not been initialized by def initialize()

  def checkforAce(card) # check_for_ace not an error but best practice
    if card.value = 1 # if card == 1 and refactor as return card.value == 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #dif should be def and (card1 card2) should be (card1, card2)
  if card1.value > card2.value #tab the if .. end which would be best practice
    return card #should be card1 because card is not a parameter in this function
  else
    return card2
  end
end
end #remove extra end that should not be here.

def self.cards_total(cards) #function should be self_cards_total(cards) only use _ in function names
  total #total needs to be assigned an initial value of total = 0
  for card in cards
    total += card.value
    return "You have a total of" + total #return should be outside of the for loop otherwise it will return a sentence for the first card in cards. Total in this case would be an integer and not a string so total.to_s would work or #{total} to print it inside the phrase.
  end
  #return function should be here so that it returns the total value of the cards in just the 1 sentence, after it has added all the values of the card in cards.
end
```

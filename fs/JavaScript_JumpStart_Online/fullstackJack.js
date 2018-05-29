// Steve and Josh are bored and want to play something. They don't want to
// think too much, so they come up with a really simple game. Write a
// function called `fullstackJack` and figure out who is going to win.

// FullstackJack Rules:

// - Each player is dealt the same number of cards
// - They flip the card at the top of the deck
// - The card with the highest value wins the round and the winning player
// receives a point. The two cards used are discarded.
// - The players continue playing until there are no remaining cards
// - The player with the most points at the end wins

// #### Example

// Representing Cards: A players hand is stored in an array. Each index is a
// card value.  The card rank is as follows (from lowest to highest):
// `'2','3','4','5','6','7','8','9','T','J','Q','K','A'`.  Hands are
// passed to the fullstackJack functions as arguments, see the examples below.



// // player1Hand = ['A', '7', '8'];
// // player2Hand = ['K', '5', '9'];
// fullstackJack(['A', '7', '8'], ['K', '5', '9']);
// // --> returns "Player 1 wins 2 to 1!"


// fullstackJack(['K', 'Q', 'J'], ['Q', 'K', 'J'])
// // --> returns  "Tie!"

function fullstackJack(arr1, arr2) {
  var wins1 = 0;
  var wins2 = 0;
  var value = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];

  for (var i = 0; i < arr1.length; i++) {
    var card1 = arr1[i];
    var card2 = arr2[i];
    if (value.indexOf(card1) > value.indexOf(card2)) {
      wins1 += 1;
    } else if (value.indexOf(card1) < value.indexOf(card2)) {
      wins2 += 1;
    }
  }

  if (wins1 > wins2) {
    return `Player 1 wins ${wins1} to ${wins2}!`;
  } else if (wins2 > wins1) {
    return `Player 2 wins ${wins2} to ${wins1}!`;
  } else {
    return 'Tie!';
  }
}

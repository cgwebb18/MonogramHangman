//can_play tracks whether a player has won or lost
var can_play = true;
var answers = {"petru" :"\u0050\u0045\u0054\u0052\u0055", "eusebiou" : "\ue137\ue169"};

$(function(){
  console.log(answers[0]);
});


// function selectLetter(l) {
//   if (can_play == false) {
//     return;
//   }
//
//   if (used_letters.indexOf(l) != -1) {
//     return;
//   }
//
//   used_letters += l;
//   document.game.usedLetters.value = used_letters;
//
//   if (answer.indexOf(l) != -1) {
//     // correct letter guess
//     pos = 0;
//     temp_mask = display_word;
//
//
//     while (answer.indexOf(l, pos) != -1) {
//       pos = answer.indexOf(l, pos);
//       end = pos + 1;
//
//       start_text = temp_mask.substring(0, pos);
//       end_text = temp_mask.substring(end, temp_mask.length);
//
//       temp_mask = start_text + l + end_text;
//       pos = end;
//     }
//
//     display_word = temp_mask;
//     document.game.displayWord.value = display_word;
//
//     if (display_word.indexOf("#") == -1) {
//       // won
//       alert("Well done, you have won!");
//       can_play = false;
//     }
//   } else {
//     // incortect letter guess
//     wrong_guesses += 1;
//     eval("document.hm.src=\"hm" + wrong_guesses + ".gif\"");
//
//     if (wrong_guesses == 10) {
//       // lost
//       alert("Sorry, you have lost!");
//       can_play = false;
//     }
//   }
// }
//
// function reset() {
//   selectWord();
//   document.game.usedLetters.value = "";
//   used_letters = "";
//   wrong_guesses = 0;
//   document.hm.src = "hmstart.gif";
// }
//
// function selectWord() {
//   can_play = true;
//   random_number = Math.round(Math.random() * (words.length - 1));
//   answer = words[random_number];
//   //document.game.theWord.value = answer;
//
//   // display masked word
//   masked_word = createMask(answer);
//   document.game.displayWord.value = masked_word;
//   display_word = masked_word;
// }
//
// function createMask(m) {
//   mask = "";
//   word_length = m.length;
//
//
//   for (i = 0; i < word_lenght; i++) {
//     mask += "#";
//   }
//   return mask;
// }

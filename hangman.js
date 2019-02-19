//can_play tracks whether a player has won or lost
var can_play = true;
var lives = 5;

// 'Peter': {
//   english : 'Peter',
//   ancient_name : "Petru",
//   athena_ruby : "\u0050\u0045\u0054\u0052\u0055",
//   layout : "Peter_Layout",
//   img_url : '#TODO'
// },

function init_game(ans){
  lives = 5;
  var keys = Object.keys(ans);
  var label = keys[(keys.length * Math.random() << 0)];
  //Remember to change 'Peter' to label once all layouts done
  var seal = answers['Peter'];
  usedLetters = [];
  $('#seal').attr('src', seal.img_url);
  return seal;
};

function show_progress(ans, usedLs) {
  var prog = '';
  for (i = 0; i < ans.length; i++) {
    if (usedLs.includes(ans[i])){
      prog = prog + ans[i];
    }
    else{
      prog = prog + '?';
    }
  }
  return prog;
};

function lives_left(ans, usedLs){
  var wrong = 0;
  for (i=0; i < usedLs.length; i++){
    if (!ans.includes(usedLs[i])) {
      wrong = wrong + 1;
    }
  }
  lives = 5 - wrong;
  return lives
};

// var toggleKeysIfEmpty = function(kb) {
//   var toggle = kb.$preview.val() === '';
//   kb.$keyboard
//     .find('.ui-keyboard-bksp, .ui-keyboard-accept')
//     .toggleClass('disabled', toggle)
//     .prop('disabled', toggle);
// };

$(function(){
  var usedLetters = [];
  var s = init_game(answers);
  var kb = $('#guess').keyboard({
    layout : 'Peter_Layout',
    alwaysOpen : true,
    restrictInput : false,
    change : function(e, kb, el){
      kb.$keyboard.find(e.currentTarget)
                  .css('opacity', 0.5);
      $('#l-num').text(lives_left(s.athena_ruby, usedLetters));
      if (lives_left(s.athena_ruby, usedLetters) < 1) {
        alert('Game over!');
      }
    },
    beforeInsert : function(e, kb, el, txt){
      usedLetters.push(txt);
      $.keyboard.keyaction.clear(kb);
      return show_progress(s.athena_ruby, usedLetters);
    }
  });
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

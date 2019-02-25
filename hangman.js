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
  var seal = answers[ans];
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

$(function(){
  var url_prefix = 'https://www.doaks.org/resources/seals/byzantine-seals/';
  var usedLetters = [];
  var s = init_game('Peter');
  var kb = $('#guess').keyboard({
    layout : 'Peter_Layout',
    alwaysOpen : true,
    restrictInput : false,
    change : function(e, kb, el){
      kb.$keyboard.find(e.currentTarget)
                  .css('opacity', 0.5)
                  .prop('disabled', true);
      $('#l-num').text(lives_left(s.athena_ruby, usedLetters));
      if (lives_left(s.athena_ruby, usedLetters) < 1) {
        alert('Game over!');
      }
      if(kb.getValue().indexOf('?') == -1) {
        popupWindow = window.open((url_prefix + s.accession), 'answer', 'width=1500,height=1000');
        popupWindow.focus();
      }
      console.log(kb.getValue());
    },
    beforeInsert : function(e, kb, el, txt){
      usedLetters.push(txt);
      $.keyboard.keyaction.clear(kb);
      return show_progress(s.athena_ruby, usedLetters);
    }
  });
  $('#guess_keyboard').css('top', '60%');
});

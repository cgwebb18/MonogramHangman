var lives = 5;
var ans_ks = Object.keys(answers);

function init_game(a){
  lives = 5;
  var seal = answers[ans_ks[a]];
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
  var level = 0;
  var s = init_game(level);
  $.extend($.keyboard.keyaction, {
    meta : function(base) {
      base.$preview.val('');
      console.log(s);
      init_game(level);
      usedLetters = [];
      base.redraw(s.layout).caret('end');
      $('#guess_keyboard').css('top', '60%');
    },
    next : function(base) {
      base.$preview.val('');
      level += 1;
      s = init_game(level);
      usedLetters = [];
      base.redraw(s.layout).caret('end');
      $('#guess_keyboard').css('top', '60%');
    }
  });
  var kb = $('#guess').keyboard({
    layout : s.layout,
    alwaysOpen : true,
    restrictInput : false,
    display: {
      'meta' : 'retry',
      'next' : 'next'
    },
    change : function(e, kb, el){
      kb.$keyboard.find(e.currentTarget)
                  .css('opacity', 0.5)
                  .prop('disabled', true);
      $('#l-num').text(lives_left(s.athena_ruby, usedLetters));
      if (lives_left(s.athena_ruby, usedLetters) < 1) {
        alert('Game over!');
      }
      if(show_progress(s.athena_ruby, usedLetters).indexOf('?') == -1) {
        popupWindow = window.open((url_prefix + s.accession), 'answer', 'width=1500,height=1000');
        popupWindow.focus();
        kb.$keyboard.find($("button[data-value='next']"))
                    .css('opacity', 1)
                    .prop('disabled', false);
      }
      if(show_progress(s.athena_ruby, usedLetters).indexOf('?') != -1) {
        kb.$keyboard.find($("button[data-value='next']"))
                    .css('opacity', 0.5)
                    .prop('disabled', true);
      }
    },
    beforeInsert : function(e, kb, el, txt){
      usedLetters.push(txt);
      $.keyboard.keyaction.clear(kb);
      return show_progress(s.athena_ruby, usedLetters);
    }
  });
  $('#guess_keyboard').css('top', '60%');
});

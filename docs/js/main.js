$(function() {
  setPlay();
  $('#code').css('opacity', '0.2');
  var singleton = true;
  $('#play').on('click', function() {
    if (singleton) {
      singleton = false;
      $('#play').fadeOut('fast', function() {
        $('#code').animate({
          opacity: '1'
        }, 'slow', function() {
          nyan({
            bpm: 132
          });
          putSound({
            bpm: 132
          })
        });
      });
    }
  });
  $('#play2').on('click', function() {
    httpObj = new XMLHttpRequest();
    httpObj.open("get", "json/aaa.json", true);
    httpObj.onload = function() {
      var data = JSON.parse(httpObj.responseText);
      var song = beeplay({
        bpm: data.bpm, // 曲のテンポ。デフォルト120。
        key: data.key, // 曲のキー。無くてもいいです。
        time: data.time, // 曲の拍子。デフォルト4/4。無くてもいいです。
      });
      data.notes.forEach(function(e, i, a) {
        song.play(a.notes, a.length);
      });
    };
    httpObj.send();
  });
  window.prettyPrint();
});
$(window).resize(setPlay);

function setPlay() {
  var code = $('#code');
  var play = $('#play');
  var ctop = code.offset().top;
  var cleft = code.offset().left;
  var cwidth = parseInt(code.css('width'));
  var cheight = parseInt(code.css('height'));
  var pwidth = parseInt(play.css('width'));
  var pheight = parseInt(play.css('height'));

  play.css('top', ctop + (cheight / 2) - (pheight / 2));
  play.css('left', cleft + (cwidth / 2) - (pwidth / 2));
}

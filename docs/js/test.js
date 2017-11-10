$(function() {
  var object = {
    "notes": [],
    "abcnote": []
  };
  var a = {}
  var var1 = 1;
  $('.note').on('click', function() {
    var octave = $("input[name='octave']:checked").val();
    var length = $("input[name='length']:checked").val();
    var note = $(this).val();
    object.notes.push({
      "note": note + octave,
      "length": var1
    });
    object.abcnote.push(note + length);
    ABCJS.renderAbc("a", "M:4/4\nL:1/32\nK:C\n" + object.abcnote.join(
        '') +
      "||");
  });
  $('#play').on('click', function() {
    song = beeplay({});
    object.notes.forEach(function(e, i, a) {
      song.play(a[i].note, a[i].length);
    });
  });
  $('#play2').on('click', function() {
    song = beeplay({});
    object.notes.forEach(function(e, i, a) {
      song.play(a[i].note, a[i].length);
    });
  });
  $('#reset').on('click', function() {
    object = {
      "notes": [],
      "abcnote": []
    };
    ABCJS.renderAbc("a", "M:4/4\nL:1/4\nK:C\n" + object.abcnote.join(''));
  });
});

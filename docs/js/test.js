$(function() {
  var object = {
    "notes": [],
    "abcnote": []
  };
  var lenghtConverter = {
    2: 1 / 4,
    3: 3 / 8,
    4: 1 / 2,
    6: 3 / 4,
    8: 1,
    12: 3 / 2,
    16: 2,
    24: 3,
    32: 4,
  }
  var a = {}
  var var1 = 1;
  $('.note').on('click', function() {
    var octave = $(this).val() === 'c' ? 4 : 3;
    var length = $("input[name='length']:checked").val();
    var note = $(this).val();
    object.notes.push({
      "note": note === "" ? null : note + octave,
      "length": lenghtConverter[length]
    });
    if (note === "") {
      object.abcnote.push('z' + length);
    } else {
      object.abcnote.push(note + length);
    }
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
  $('#reset').on('click', function() {
    object = {
      "notes": [],
      "abcnote": []
    };
    ABCJS.renderAbc("a", "M:4/4\nL:1/32\nK:C\n" + object.abcnote.join(
      ''));
  });
  $('#return').on('click', function() {
    object.notes.pop();
    object.abcnote.pop();
    ABCJS.renderAbc("a", "M:4/4\nL:1/32\nK:C\n" + object.abcnote.join(
        '') +
      "||");
  });
  $('#json_download').on('click', function() {
    song = beeplay({});
    object.notes.forEach(function(e, i, a) {
      song.put(a[i].note, a[i].length);
    });
    var blob = new Blob([JSON.stringify(JSON.parse(song.toJSON()))], {
      type: 'application\/json'
    });
    window.URL = window.URL || window.webkitURL;
    $("#json_download").attr("href", window.URL.createObjectURL(blob));
    $("#json_download").attr("download", "part.json");
  });
  $('#export').on('change', function() {
    var input = $('#export [name=file]');
    $.getJSON(input.val(), function(json) {
      console.log(data);
    })
  });

});

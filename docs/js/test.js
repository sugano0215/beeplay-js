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
  var lenghtConverter2 = {
    0.25: 2,
    0.375: 3,
    0.5: 4,
    0.75: 6,
    1: 8,
    1.5: 12,
    2: 16,
    3: 24,
    4: 32,
  }
  var a = {}
  reader = new FileReader();
  reader.onload = onLoad;
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
    $("#json_download").attr("download", "aaaa.json");
  });
  $('#export [name=file]').on('change', function() {
    reader.readAsText(event.target.files[0]);
  });

  function onLoad(event) {
    object = {
      "notes": [],
      "abcnote": []
    };
    var data = JSON.parse(event.target.result);
    var song = beeplay({
      bpm: data.bpm, // 曲のテンポ。デフォルト120。
      key: data.key, // 曲のキー。無くてもいいです。
      time: data.time, // 曲の拍子。デフォルト4/4。無くてもいいです。
    });
    data.notes.forEach(function(e, i, a) {
      object.notes.push({
        "note": a[i].notes === "" ? null : a[i].notes,
        "length": a[i].length
      });
      var str = a[i].notes.split("");
      if (str[0] === "") {
        object.abcnote.push('z' + a[i].length);
      } else {
        if (str[1] === "4") {
          object.abcnote.push('c' + lenghtConverter2[a[i].length]);
        } else {
          object.abcnote.push(str[0] + lenghtConverter2[a[i].length]);
        }
      }
    });
    ABCJS.renderAbc("a", "M:4/4\nL:1/32\nK:C\n" + object.abcnote.join(
        '') +
      "||");
  }
});

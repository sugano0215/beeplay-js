function putSound(option) {
  var bpm = option.bpm || 140;

  var intro = beeplay({
      bpm: bpm
    })
    .put(["A4", "A5"], 1).put("A5", 1).put("E5", 1 / 2).put("G5", 3 / 2)
    .put(null, 1 / 2).put("E5", 1 / 2).put("B4", 1 / 2).put("E5", 1 / 2).put(
      "D5", 1 / 2).put("E5", 1 / 2).put("C5", 1 / 2).put("B4", 1 / 2)
    .put("A4", 1).put("A5", 1).put("E5", 1 / 2).put("G5", 3 / 2)
    .put(null, 1 / 2).put("E5", 1 / 2).put("B4", 1 / 2).put("E5", 1 / 2).put(
      "D5", 1 / 2).put("E5", 1 / 2).put("C5", 1 / 2).put("B4", 1 / 2)
    .put("A4", 1).put("A5", 1).put("E5", 1 / 2).put("G5", 3 / 2)
    .put(null, 1 / 2).put("E5", 1 / 2).put("B4", 1 / 2).put("E5", 1 / 2).put(
      "D5", 1 / 2).put("E5", 1 / 2).put("C5", 1 / 2).put("B4", 1 / 2)
    .put("A4", 1).put("A5", 1).put("E5", 1 / 2).put("G5", 3 / 2)
    .put(null, 1 / 2).put("E5", 1 / 2).put("B4", 1 / 2).put("E5", 1 / 2).put(
      "D5", 1 / 2).put("E5", 1 / 2).put("C5", 1 / 2).put("B4", 1 / 2)
    .put("C5", 1).put("D5", 1 / 2).put("E5", 1 / 2).put("D5", 1).put("A4",
      1).put("C5", 1).put("D5", 1 / 2).put("E5", 1 / 2).put("G5", 2)
    .put("C5", 1).put("D5", 1 / 2).put("E5", 1 / 2).put("D5", 1).put("A4",
      1).put("C5", 1).put("D5", 1 / 2).put("E5", 1 / 2).put("A5", 2);
  var test = intro.toJSON();
  console.log(JSON.stringify(intro.toJSON()));
  var a1 = beeplay({
      bpm: bpm
    })
    .put(null, 32)
    .put("C6", 2).put("D6", 2).put("C6", 2).put("E6", 2)
    .put("C6", 2).put("D6", 2).put("C6", 2).put("E6", 2);
  console.log(JSON.stringify(a1.toJSON()));
  var a2 = beeplay({
      bpm: bpm
    })
    .put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4)
    .put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4)
    .put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4)
    .put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4)
    .put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4)
    .put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4)
    .put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4)
    .put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put(
      "A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4).put("A3", 1 / 4)
    .put("C4", 1 / 4).put("C4", 1 / 4).put("C4", 1 / 4).put("C4", 1 / 4).put(
      "C4", 1 / 4).put("C4", 1 / 4).put("C4", 1 / 4).put("C4", 1 / 4)
    .put("D4", 1 / 4).put("D4", 1 / 4).put("D4", 1 / 4).put("D4", 1 / 4).put(
      "D4", 1 / 4).put("D4", 1 / 4).put("D4", 1 / 4).put("D4", 1 / 4)
    .put("C4", 1 / 4).put("C4", 1 / 4).put("C4", 1 / 4).put("C4", 1 / 4).put(
      "C4", 1 / 4).put("C4", 1 / 4).put("C4", 1 / 4).put("C4", 1 / 4)
    .put("E4", 1 / 4).put("E4", 1 / 4).put("E4", 1 / 4).put("E4", 1 / 4).put(
      "E4", 1 / 4).put("E4", 1 / 4).put("E4", 1 / 4).put("E4", 1 / 4)
    .put("C4", 1 / 4).put("C4", 1 / 4).put("C4", 1 / 4).put("C4", 1 / 4).put(
      "C4", 1 / 4).put("C4", 1 / 4).put("C4", 1 / 4).put("C4", 1 / 4)
    .put("D4", 1 / 4).put("D4", 1 / 4).put("D4", 1 / 4).put("D4", 1 / 4).put(
      "D4", 1 / 4).put("D4", 1 / 4).put("D4", 1 / 4).put("D4", 1 / 4)
    .put("C4", 1 / 4).put("C4", 1 / 4).put("C4", 1 / 4).put("C4", 1 / 4).put(
      "C4", 1 / 4).put("C4", 1 / 4).put("C4", 1 / 4).put("C4", 1 / 4)
    .put("E4", 1 / 4).put("E4", 1 / 4).put("E4", 1 / 4).put("E4", 1 / 4).put(
      "E4", 1 / 4).put("E4", 1 / 4).put("E4", 1 / 4).put("E4", 1 / 4);
  console.log(JSON.stringify(a2.toJSON()));
  var blob = new Blob([JSON.stringify(JSON.parse(intro.toJSON()))], {
    "type": "text/plain"
  });
  window.URL = window.URL || window.webkitURL;
  $("#json_download").attr("href", window.URL.createObjectURL(blob));
  $("#json_download").attr("download", "part.json");
}

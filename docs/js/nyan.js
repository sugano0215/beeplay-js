function nyan(option) {
  var bpm = option.bpm || 140;

  var intro = beeplay({
      bpm: bpm
    })
    .play(["A4", "A5"], 1).play("A5", 1).play("E5", 1 / 2).play("G5", 3 / 2)
    .play(null, 1 / 2).play("E5", 1 / 2).play("B4", 1 / 2).play("E5", 1 / 2).play(
      "D5", 1 / 2).play("E5", 1 / 2).play("C5", 1 / 2).play("B4", 1 / 2)
    .play("A4", 1).play("A5", 1).play("E5", 1 / 2).play("G5", 3 / 2)
    .play(null, 1 / 2).play("E5", 1 / 2).play("B4", 1 / 2).play("E5", 1 / 2).play(
      "D5", 1 / 2).play("E5", 1 / 2).play("C5", 1 / 2).play("B4", 1 / 2)
    .play("A4", 1).play("A5", 1).play("E5", 1 / 2).play("G5", 3 / 2)
    .play(null, 1 / 2).play("E5", 1 / 2).play("B4", 1 / 2).play("E5", 1 / 2).play(
      "D5", 1 / 2).play("E5", 1 / 2).play("C5", 1 / 2).play("B4", 1 / 2)
    .play("A4", 1).play("A5", 1).play("E5", 1 / 2).play("G5", 3 / 2)
    .play(null, 1 / 2).play("E5", 1 / 2).play("B4", 1 / 2).play("E5", 1 / 2).play(
      "D5", 1 / 2).play("E5", 1 / 2).play("C5", 1 / 2).play("B4", 1 / 2)
    .play("C5", 1).play("D5", 1 / 2).play("E5", 1 / 2).play("D5", 1).play("A4",
      1).play("C5", 1).play("D5", 1 / 2).play("E5", 1 / 2).play("G5", 2)
    .play("C5", 1).play("D5", 1 / 2).play("E5", 1 / 2).play("D5", 1).play("A4",
      1).play("C5", 1).play("D5", 1 / 2).play("E5", 1 / 2).play("A5", 2);
  var test = intro.toJSON();
  console.log(JSON.stringify(test));
  var a1 = beeplay({
      bpm: bpm
    })
    .play(null, 32)
    .play("C6", 2).play("D6", 2).play("C6", 2).play("E6", 2)
    .play("C6", 2).play("D6", 2).play("C6", 2).play("E6", 2);

  var a2 = beeplay({
      bpm: bpm
    })
    .play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4)
    .play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4)
    .play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4)
    .play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4)
    .play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4)
    .play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4)
    .play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4)
    .play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play(
      "A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4).play("A3", 1 / 4)
    .play("C4", 1 / 4).play("C4", 1 / 4).play("C4", 1 / 4).play("C4", 1 / 4).play(
      "C4", 1 / 4).play("C4", 1 / 4).play("C4", 1 / 4).play("C4", 1 / 4)
    .play("D4", 1 / 4).play("D4", 1 / 4).play("D4", 1 / 4).play("D4", 1 / 4).play(
      "D4", 1 / 4).play("D4", 1 / 4).play("D4", 1 / 4).play("D4", 1 / 4)
    .play("C4", 1 / 4).play("C4", 1 / 4).play("C4", 1 / 4).play("C4", 1 / 4).play(
      "C4", 1 / 4).play("C4", 1 / 4).play("C4", 1 / 4).play("C4", 1 / 4)
    .play("E4", 1 / 4).play("E4", 1 / 4).play("E4", 1 / 4).play("E4", 1 / 4).play(
      "E4", 1 / 4).play("E4", 1 / 4).play("E4", 1 / 4).play("E4", 1 / 4)
    .play("C4", 1 / 4).play("C4", 1 / 4).play("C4", 1 / 4).play("C4", 1 / 4).play(
      "C4", 1 / 4).play("C4", 1 / 4).play("C4", 1 / 4).play("C4", 1 / 4)
    .play("D4", 1 / 4).play("D4", 1 / 4).play("D4", 1 / 4).play("D4", 1 / 4).play(
      "D4", 1 / 4).play("D4", 1 / 4).play("D4", 1 / 4).play("D4", 1 / 4)
    .play("C4", 1 / 4).play("C4", 1 / 4).play("C4", 1 / 4).play("C4", 1 / 4).play(
      "C4", 1 / 4).play("C4", 1 / 4).play("C4", 1 / 4).play("C4", 1 / 4)
    .play("E4", 1 / 4).play("E4", 1 / 4).play("E4", 1 / 4).play("E4", 1 / 4).play(
      "E4", 1 / 4).play("E4", 1 / 4).play("E4", 1 / 4).play("E4", 1 / 4);
}

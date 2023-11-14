var words = [
  "Explore o Futuro das Criptomoedas",
  "Descubra as Oportunidades na Blockchain",
  "A Revolução Financeira das Criptomoedas",
  "Investimento Inteligente em Ativos Digitais",
];

var part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;

function wordflick() {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    document.querySelector(".text").textContent = part;
  }, speed);
}

document.addEventListener("DOMContentLoaded", function () {
  wordflick();
});

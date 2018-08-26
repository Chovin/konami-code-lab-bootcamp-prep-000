const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  var mext_key = 0
  document.body.addEventListener('keydown', function(e) {
    if (e.key === code[next_key]) {
      next_key += 1
    } else {
      next_key = 0
    }
    if (next_key === codes.length) {
      alert('+30 Karma')
      var karma = document.querySelector('#js--karma-points-count')
      karma.innerHTML = parseInt(karma.innerHTML) + 30
      next_key = 0
    }
  })
}

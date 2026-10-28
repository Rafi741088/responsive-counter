(function () {
  "use strict";

  var counterValue = document.getElementById("counter-value");
  var increaseBtn = document.getElementById("increase-btn");
  var decreaseBtn = document.getElementById("decrease-btn");
  var resetBtn = document.getElementById("reset-btn");

  var count = 0;

  function updateCounter() {
    counterValue.textContent = count;
    decreaseBtn.disabled = count === 0;
  }

  function increase() {
    count += 1;
    updateCounter();
  }

  function decrease() {
    if (count > 0) {
      count -= 1;
    }
    updateCounter();
  }

  function reset() {
    count = 0;
    updateCounter();
  }

  increaseBtn.addEventListener("click", increase);
  decreaseBtn.addEventListener("click", decrease);
  resetBtn.addEventListener("click", reset);

  updateCounter();
})();

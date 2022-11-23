if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-01-HTML/sw.js", {
    scope: "/ICS2O-Unit5-01-HTML/",
  })
}

;("use strict")

const randomNumber = Math.floor(Math.random() * 6) + 1

function myButtonClicked() {
  document.getElementById("answer").innerHTML =
    "<p>Value is: " + slider.value + "</p>"
}

function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider

  if (valueFromSlider == randomNumber) {
    document.getElementById("answer").innerHTML =
      "the answer was, " + randomNumber + "!" + " You got it! Excellent."
  }

  if (valueFromSlider != randomNumber) {
    document.getElementById("answer").innerHTML =
      "Sorry the answer was, " + randomNumber + "!" + " please try again."
  }
}

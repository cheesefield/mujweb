let bod_x = document.querySelector("#bod_x");
let bod_y = document.querySelector("#bod_y");
let kruh_x = document.querySelector("#kruh_x");
let kruh_y = document.querySelector("#kruh_y");
let radius = document.querySelector("#radius");
bod_x.addEventListener("input", check_a_point);
bod_y.addEventListener("input", check_a_point);
kruh_x.addEventListener("input", check_a_point);
kruh_y.addEventListener("input", check_a_point);
radius.addEventListener("input", check_a_point);
radius.addEventListener("input", obsah);

function obsah() {
  let obsah = document.querySelector("#obsah");
  var r = radius.value;
  if (r != false) {
    let obsahkruhu = Math.floor(r * r * Math.PI * 100) / 100;
    obsah.innerHTML = "Obsah kruhu je " + obsahkruhu;
  } else {
    obsah.innerHTML = "Obsah kruhu je ";
  }
}

function check_a_point() {
  let result = document.querySelector("#result");
  var a = bod_x.value;
  var b = bod_y.value;
  var x = kruh_x.value;
  var y = kruh_y.value;
  var r = radius.value;
  if (a != false && b != false && x != false && y != false && r != false) {
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;
    if (dist_points < r) {
      result.innerHTML = "Je bod v kruhu? Ano";
    } else {
      result.innerHTML = "Je bod v kruhu? Ne";
    }
  } else {
    result.innerHTML = "Je bod v kruhu?";
  }
}

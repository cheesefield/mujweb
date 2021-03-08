function hra() {
  do {
    document.getElementById("hr1").innerHTML = "Hráč 1";
    document.getElementById("hr2").innerHTML = "Hráč 2";
    var hrac1 = Math.floor(Math.random() * 5);
    var hrac2 = Math.floor(Math.random() * 5);
    console.log(hrac1);
    console.log(hrac2);
    img1.src = hrac1 + ".png";
    img2.src = hrac2 + ".png";

    if (hrac1 === hrac2) {
      console.log("remíza");
      hrej = true;
    } else if (hrac1 === 4 && hrac2 === 2) {
      console.log(hrac1);
      console.log(hrac2);
      hrej = false;
      document.getElementById("hr1").innerHTML = "Hráč 1 vyhrál";
    } else if (hrac1 === 2 && hrac2 === 4) {
      console.log(hrac1);
      console.log(hrac2);
      hrej = false;
      document.getElementById("hr2").innerHTML = "Hráč 2 vyhrál";
    } else if (hrac1 === 2 && hrac2 === 0) {
      console.log(hrac1);
      console.log(hrac2);
      hrej = false;
      document.getElementById("hr1").innerHTML = "Hráč 1 vyhrál";
    } else if (hrac1 === 0 && hrac2 === 2) {
      console.log(hrac1);
      console.log(hrac2);
      hrej = false;
      document.getElementById("hr2").innerHTML = "Hráč 2 vyhrál";
    } else if (hrac1 === 3 && hrac2 === 0) {
      console.log(hrac1);
      console.log(hrac2);
      hrej = false;
      document.getElementById("hr1").innerHTML = "Hráč 1 vyhrál";
    } else if (hrac1 === 0 && hrac2 === 3) {
      console.log(hrac1);
      console.log(hrac2);
      hrej = false;
      document.getElementById("hr2").innerHTML = "Hráč 2 vyhrál";
    } else if (hrac1 === 4 && hrac2 === 1) {
      console.log(hrac1);
      console.log(hrac2);
      hrej = false;
      document.getElementById("h1").innerHTML = "Hráč 1 vyhrál";
    } else if (hrac1 === 1 && hrac2 === 4) {
      console.log(hrac1);
      console.log(hrac2);
      hrej = false;
      document.getElementById("hr2").innerHTML = "Hráč 2 vyhrál";
    } else if (hrac1 < hrac2) {
      console.log(hrac1);
      console.log(hrac2);
      hrej = false;
      document.getElementById("hr1").innerHTML = "Hráč 1 vyhrál";
    } else if (hrac1 > hrac2) {
      console.log(hrac1);
      console.log(hrac2);
      hrej = false;
      document.getElementById("hr2").innerHTML = "Hráč 2 vyhrál";
    }
  } while (hrej);
  console.log("cyklus ukončen");
}

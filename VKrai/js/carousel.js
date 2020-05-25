function shiftLeft() {
  const boxes = document.querySelectorAll(".item-screenshoot");
  const tmpNode = boxes[0];
  boxes[0].className = "item-screenshoot move-out-from-left";

  setTimeout(function () {
    if (boxes.length > 7) {
      tmpNode.classList.add("box--hide");
      boxes[7].className = "item-screenshoot move-to-position7-from-left";
    }
    boxes[1].className = "item-screenshoot move-to-position1-from-left";
    boxes[2].className = "item-screenshoot move-to-position2-from-left";
    boxes[3].className = "item-screenshoot move-to-position3-from-left";
    boxes[4].className = "item-screenshoot move-to-position4-from-left";
    boxes[5].className = "item-screenshoot move-to-position5-from-left";
    boxes[6].className = "item-screenshoot move-to-position6-from-left";
    boxes[0].remove();

    document.querySelector(".cards__container").appendChild(tmpNode);
  }, 500);
}

function shiftRight() {
  const boxes = document.querySelectorAll(".item-screenshoot");
  boxes[6].className = "item-screenshoot move-out-from-right";
  setTimeout(function () {
    const noOfCards = boxes.length;
    if (noOfCards > 6) {
      boxes[6].className = "item-screenshoot box--hide";
    }

    const tmpNode = boxes[noOfCards - 1];
    tmpNode.classList.remove("box--hide");
    boxes[noOfCards - 1].remove();
    let parentObj = document.querySelector(".cards__container");
    parentObj.insertBefore(tmpNode, parentObj.firstChild);
    tmpNode.className = "item-screenshoot move-to-position1-from-right";
    boxes[0].className = "item-screenshoot move-to-position2-from-right";
    boxes[1].className = "item-screenshoot move-to-position3-from-right";
    boxes[2].className = "item-screenshoot move-to-position4-from-right";
    boxes[3].className = "item-screenshoot move-to-position5-from-right";
    boxes[4].className = "item-screenshoot move-to-position6-from-right";
    boxes[5].className = "item-screenshoot move-to-position7-from-right";
  }, 500);
}

/* COMMENTS CAROUSEL  */

$(".owl-carousel").owlCarousel({
  center: true,
  items: 3,
  loop: true,
  nav: true,
  navText: ["", ""],
  rewindNav: true,
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 3,
      nav: true,
      loop: true,
    },
  },
});

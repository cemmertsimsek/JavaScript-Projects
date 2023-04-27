// Select all elements with the class 'item' inside elements with the class 'slider'
let items = document.querySelectorAll('.slider .item');
// Get the 'next' and 'prev' buttons by their IDs
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// Set the initial active item index
let active = 3;

// Function to apply visual transformations and effects to the items
function loadShow() {
  let stt = 0;

  // Reset properties of the active item to bring it to the foreground
  items[active].style.transform = 'none';
  items[active].style.zIndex = 1;
  items[active].style.filter = 'none';
  items[active].style.opacity = 1;

  // Loop through the items after the active item
  for (let i = active + 1; i < items.length; i++) {
    stt++;

    // Apply transform to the item using translation, scaling, and rotation
    items[i].style.transform = `translateX(${120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    // Adjust zIndex, filter, and opacity of the item
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;

  // Loop through the items before the active item
  for (let i = active - 1; i >= 0; i--) {
    stt++;
    // Apply transform to the item using translation, scaling, and rotation in the opposite direction
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}

loadShow();
next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
};
prev.onclick = function () {
  active = active - 1 < items.length ? active - 1 : active;
  loadShow();
};

function removePopover() {
  // Get the tag suggestions popover and remove it from the DOM
  const popover = document.querySelector("[data-popper-placement]");
  if (popover) {
    popover.remove();
  }
}

// Call the removePopover function whenever the popover is shown or updated
document.addEventListener("DOMNodeInserted", removePopover);

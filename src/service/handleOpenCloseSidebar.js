export const handleOpenCloseNav = () => {
  const side = document.querySelector(".sidebar");
  if (side.id == "open") {
    side.id = "close";
  } else {
    side.id = "open";
  }
};

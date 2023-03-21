export const openSection = (sections, title) => {
  const newSec = sections.filter((section) => {
    return section.title === title;
  });
  return newSec;
};

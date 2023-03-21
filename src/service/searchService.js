export const searchService = (sections, value) => {
  const newSections = sections
    .map((section) => {
      const title = section.title;
      const sContent = section.content;
      const fsContent = sContent.filter((card) => {
        return (
          JSON.stringify(card).toLowerCase().includes(value) || title.toLowerCase().includes(value)
        );
      });
      return {
        title: title,
        content: fsContent,
      };
    })
    .filter((section) => {
      return section.content.length !== 0;
    });

  return newSections;
};

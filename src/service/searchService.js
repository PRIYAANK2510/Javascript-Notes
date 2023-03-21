export const searchService = (sections, value) => {
  const newSections = sections
    .map((section) => {
      const stitle = section.title;
      const sContent = section.content;
      const fsContent = sContent.filter((card) => {
        return (
          JSON.stringify(card).toLowerCase().includes(value.toLowerCase()) ||
          stitle.toLowerCase().includes(value.toLowerCase())
        );
      });
      return {
        title: stitle,
        content: fsContent,
      };
    })
    .filter((section) => {
      return section.content.length !== 0;
    });

  return newSections;
};

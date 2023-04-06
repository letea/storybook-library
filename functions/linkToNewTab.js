const preProcessing = (value = "") => {
  return value.toLowerCase().replace(/\/|\s/g, "-").replace(/:/g, "");
};

const linkToNewTab = (kind = "", story = "") => {
  return () => {
    window.open(
      `iframe.html?id=${preProcessing(kind)}--${preProcessing(
        story
      )}&viewMode=story`,
      "_blank"
    );
  };
};

export default linkToNewTab;

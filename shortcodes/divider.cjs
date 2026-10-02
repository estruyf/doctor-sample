// A web part shortcode: <divider /> on a line of its own becomes SharePoint's
// Divider web part, between the markdown before and after it.
module.exports = {
  name: "divider",
  kind: "webpart",
  render: () => ({
    standardWebPart: "Divider",
  }),
};

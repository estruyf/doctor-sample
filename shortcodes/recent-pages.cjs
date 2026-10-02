// A web part shortcode with attributes and the page context:
// <recent-pages title="..." /> becomes a Highlighted content web part, titled
// after the attribute, or after the page it sits on when there is none.
module.exports = {
  name: "recent-pages",
  kind: "webpart",
  render: (attributes, context) => ({
    standardWebPart: "ContentRollup",
    title: attributes.title || `More next to ${context.frontMatter.title}`,
  }),
};

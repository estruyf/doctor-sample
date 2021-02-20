
module.exports = {
  name: "sample",
  render: (attributes, html) => {
    return `<div>External Shortcode - Name: ${attributes.name} - HTML: ${html}</div>`
  }
};
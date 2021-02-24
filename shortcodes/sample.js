
module.exports = {
  name: "sample",
  render: (attributes, html) => {
    return `<div class="custom-shortcode">External Shortcode - Name: ${attributes.name} - HTML: ${html}</div>`
  }
};

/**
 * Module dependencies. 
 */
var MultiMarkdown = require("multimarkdown");

/**
 * Markdown parser with showdown.
 *
 * @param {String} input
 * @api public
 */
exports.parse = function(input) {
  return MultiMarkdown.convert(input);
};
  

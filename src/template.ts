import Handlebars from 'handlebars'
import TemplateEngine = require('./types/TemplateEngine');

/**
 * 
 * @param str - string to render
 * @param context - context to render
 */
const template: TemplateEngine = function (str: string, context: object): string {
  return Handlebars.compile(str)(context);
}

export = template;
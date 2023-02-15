interface Templator {
  _template: string;
}

class Templator implements Templator {
  constructor(template: string) {
    this._template = template;
  }

  compile(ctx: object) {
    const templateVariableRe = /\{\{(.*?)\}\}/g;
    let match = null;
    let result = this._template;

    while ((match = templateVariableRe.exec(this._template))) {
      const variableName: string = match[1].trim();
      if (!variableName) {
        continue;
      }

      const data = ctx[variableName as keyof object];

      if (typeof data === 'function') {
        window[variableName as keyof object] = data;
        result = result.replace(new RegExp(match[0], 'gi'), `window.${variableName}()`);
        continue;
      }

      result = result.replace(new RegExp(match[0], 'gi'), data);
    }

    return result;
  }
}

export default Templator;

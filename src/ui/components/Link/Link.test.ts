import sinon from 'sinon';
import { expect } from 'chai';
import { Link } from './Link';
import Router from './../../../utils/Router';

describe('Link', () => {
  const to = '/';
  const label = 'Click me';
  const callback = sinon.stub();
  const router = { go: callback } as unknown as typeof Router;

  beforeEach(() => {
    callback.reset();
  });

  it('should render', () => {
    // eslint-disable-next-line no-new
    new Link({ to, label, router });
  });

  it('should return <a> element', () => {
    const link = new Link({ to, label, router });
    const element = link.getContent();

    expect(element).to.be.instanceof(window.HTMLAnchorElement);
    expect(element!.tagName).to.equal('A');
  });

  it('should not have classes for <a/> element', () => {
    const link = new Link({
      to,
      label,
      router,
    });
    const element = link.getContent();

    expect(element!.className).to.equal('undefined');
  });
});

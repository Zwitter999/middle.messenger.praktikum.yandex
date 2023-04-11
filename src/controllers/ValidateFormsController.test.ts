import { expect } from 'chai';
import ValidateFormsController from './ValidateFormsController';
import ErrorText from '../ui/components/Errortext/ErrorText';

describe('ValidateFormsController.test', () => {
  it('validate name', () => {
    const page = new ErrorText({ text: 'test' });
    const value = 'Jhon';
    const type = 'first_name';
    const error = ValidateFormsController.onBlurFocus(page, value, type);
    expect(error).to.equal(false);
  });
  it('validate unsuitable password', () => {
    const page = new ErrorText({ text: 'test' });
    const value = 'Jhon';
    const type = 'password';
    const error = ValidateFormsController.onBlurFocus(page, value, type);
    expect(error).to.equal(true);
  });
});

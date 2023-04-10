import { expect } from 'chai';
import ValidateFormsController from './ValidateFormsController';
import SignupPage from '../ui/pages/SignupPage/SignupPage';

describe('ValidateFormsController.test', () => {
  it('validate name', () => {
    const page = SignupPage;
    const value = 'Jhon';
    const type = 'name';
    const error = ValidateFormsController.onBlurFocus(page, value, type);

    expect(error).to.equal(false);
  });

  it('validate unsuitable password', () => {
    const page = SignupPage;
    const value = 'Jhon';
    const type = 'password';
    const error = ValidateFormsController.onBlurFocus(page, value, type);

    expect(error).to.equal(true);
  });
});

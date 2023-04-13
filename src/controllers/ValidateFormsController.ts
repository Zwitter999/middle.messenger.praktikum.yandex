class ValidateFormsController {
  onBlurFocus(page: any, value: string, type: string): boolean {
    let error = '';
    if (value.length === 0) {
      error = 'This field is requed';
    } else if (
      type !== 'password' &&
      type !== 'phone' &&
      type !== 'oldPassword' &&
      type !== 'newPassword' &&
      type !== 'avatar' &&
      !(/^[A-z0-9-_+. ,@]{1,}$/gi.test(value) && /[A-z]/.test(value))
    ) {
      error = 'Invalid character';
    } else if (
      type === 'email' &&
      // eslint-disable-next-line max-len
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value,
      )
    ) {
      error = 'Invalid email';
    } else if (
      type === 'phone' &&
      !value.match(/^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/)
    ) {
      error = 'Invalid phone';
    } else if (type === 'newPassword' && value == page.children.oldPassword?.element.parentElement[0].value) {
      error = 'Passwords simple';
    }
    page.setProps({
      text: error,
    });
    if (error.length === 0) {
      return true;
    }
    return false;
  }

  onSubmit(page: any) {
    let error = false;
    page.children.inputs.map((input: any) => {
      if (
        this.onBlurFocus(
          input.children.errorText,
          input.children.inputChild.element.value,
          input.children.inputChild.props.name,
        )
      ) {
        error = true;
      }
    });
    return error;
  }
}

export default new ValidateFormsController();

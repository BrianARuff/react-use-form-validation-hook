# react-use-form-validation-hook

> Validate react form data using a javascript proxy.

[![NPM](https://img.shields.io/npm/v/react-use-form-validation-hook.svg)](https://www.npmjs.com/package/react-use-form-validation-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-form-validation-hook
```

## Example Usage (done in Create React App (CRA) Style)

```jsx
// in FormComponent file, or whatever your form component is
import { useFormValidation } from 'react-use-form-validation-hook'

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const initialState = { name: '', email: '' };

const validationRules = {
  name: value => value.length > 4 || 'Name must be at least 4 characters',
  email: value => emailRegex.test(value) || 'Invalid email address'
};

const FormComponent = () => {
  const [formData, formErrors] = useFormValidation(initialState, validationRules);

  return (
    <div>
      <input value={formData.name} onChange={e => formData.name = e.target.value} />
      {formErrors.name && <p style={{color: 'red'}}>{formErrors.name}</p>}
      <input value={formData.email} onChange={e => formData.email = e.target.value} />
      {formErrors.email && <p style={{color: 'red', fontWeight: 'bolder'}}>{formErrors.email}</p>}
    </div>
  );
}

// in App file, or where-ever you want to use it
import { FormComponet } from './FormComponent';

export default function App() {
  return (
      <FormComponent />
  );
}
```

## License

MIT © [BrianARuff](https://github.com/BrianARuff)
# react-use-form-validation-hook

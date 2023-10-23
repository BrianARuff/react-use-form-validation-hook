# react-use-form-validation-hook

> Validate react form data using a javascript proxy.

[![NPM](https://img.shields.io/npm/v/react-use-form-validation-hook.svg)](https://www.npmjs.com/package/react-use-form-validation-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-form-validation-hook
```

## Example Usage

```jsx
import { useFormValidation } from "react-use-form-validation-hook";

const validationRules = {
  email: (value: string) => {
    if (!value) {
      return "Email is required";
    }
    if (!/\S+@\S+\.\S+/.test(value)) {
      return "Email is invalid";
    }
    return true;
  },
  password: (value: string) => {
    if (!value) {
      return "Password is required";
    }
    if (value.length < 8) {
      return "Password must be at least 8 characters long";
    }
    return true;
  },
};

const MyForm = () => {
  const [formData, errors] = useFormValidation(
    { email: "", password: "" },
    validationRules
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log("Form data:", formData);
    } else {
      console.log("Validation errors:", errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={(event) => {
            formData.email = event.target.value;
          }}
        />
        {errors.email && <span>{errors.email}</span>}
      </label>
      <label>
        Password:
        <input
          type="password"
          value={formData.password}
          onChange={(event) => {
            formData.password = event.target.value;
          }}
        />
        {errors.password && <span>{errors.password}</span>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default function App() {
  return <MyForm />;
}

```

## License

MIT © [BrianARuff](https://github.com/BrianARuff)
# react-use-form-validation-hook

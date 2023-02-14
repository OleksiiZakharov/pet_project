import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { RegistrationApi } from '../../api/AuthApi';
import './registrationForm.scss';

export const RegistrationForm = () => {
  const { mutateAsync } = RegistrationApi();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
      email: '',
      terms: false,
    },
    validationSchema: Yup.object({
      login: Yup.string()
        .required('Login requeired')
        .min(5, 'Minimum 5 characters')
        .max(20, 'Maximum 20 characters'),
      password: Yup.string()
        .required('Password required')
        .min(6, 'Minimum 6 characters')
        .max(20, 'Maximum 20 characters'),
      email: Yup.string()
        .required('Email requeired')
        .email('Wrong type of email'),
      terms: Yup.boolean().oneOf([true], 'Agreement needed'),
    }),
    onSubmit: (values) => {
      mutateAsync(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className="title mb-1 text-center">Registration</div>
      <Form.Group className="mb-3" controlId="formBasicLogin">
        <Form.Label>Login</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter login"
          {...formik.getFieldProps('login')}
        />
        {formik.errors.login && formik.touched.login ? (
          <Form.Text className="error-msg">{formik.errors.login}</Form.Text>
        ) : null}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          autoComplete="false"
          {...formik.getFieldProps('password')}
        />
        {formik.errors.password && formik.touched.password ? (
          <Form.Text className="error-msg">{formik.errors.password}</Form.Text>
        ) : null}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Email"
          {...formik.getFieldProps('email')}
        />
        {formik.errors.email && formik.touched.email ? (
          <Form.Text className="error-msg">{formik.errors.email}</Form.Text>
        ) : null}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Terms and conditions"
          {...formik.getFieldProps('terms')}
        />
        {formik.errors.terms && formik.touched.terms ? (
          <Form.Text className="error-msg">{formik.errors.terms}</Form.Text>
        ) : null}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

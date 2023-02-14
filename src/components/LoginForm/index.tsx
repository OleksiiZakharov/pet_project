import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoginApi } from '../../api';
import './loginForm.scss';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const { mutateAsync } = LoginApi();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
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
    }),
    onSubmit: (values) => {
      mutateAsync(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className="title mb-1 text-center">Login</div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
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
      <Form.Group className="mb-3 text-end">
        <Link to="/registration">
          <Form.Text className="link-primary">Create new account</Form.Text>
        </Link>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

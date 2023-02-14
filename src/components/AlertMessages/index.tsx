import { Toast, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { alertMessageSet } from '../../store/slices/alertMessageSlice';
import './alertMessage.scss';

export const AlertMessages = () => {
  const dispatch = useDispatch();

  const { message, status } = useSelector(
    (state: RootState) => state.alertMessage
  );

  const show: boolean = message && status ? true : false;

  return (
    <ToastContainer position="top-end">
      <Toast
        onClose={() => dispatch(alertMessageSet({}))}
        show={show}
        delay={30000}
        autohide
        bg="light"
        className={status}
      >
        <Toast.Header>
          <strong className="me-auto">Bootstrap</strong>
        </Toast.Header>
        <Toast.Body className="Light">{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

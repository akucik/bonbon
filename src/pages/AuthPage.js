import AuthForm from "../components/AuthForm";
import Modal from "../components/UI/Modal";

const AuthPage = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <AuthForm onRemoveAuth={props.onClose} />
    </Modal>
  );
};
export default AuthPage;

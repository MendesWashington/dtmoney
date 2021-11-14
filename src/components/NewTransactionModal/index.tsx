import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import inComeImg from "../../assets/income.svg";
import outComeImg from "../../assets/outcome.svg";
import { Container, TransactionTypeContainer } from "./styled";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastro de Transação</h2>

        <input type="text" name="name" placeholder="Título" />
        <input type="number" name="value" placeholder="Valor" />
        <TransactionTypeContainer>
          <button type="button">
            <img src={inComeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outComeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <input type="text" name="category" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

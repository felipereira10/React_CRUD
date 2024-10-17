import GlobalStyle from "./styles/global";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;


function App() {
  return (
    <>
      <Container>
      </Container>
      <ToastContainer autoClose={3500} position={toast.POSITION.TOP.RIGHT} />
      <GlobalStyle />
    </>
  );
}

export default App;

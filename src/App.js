import InvoiceForm from "./components/InvoiceForm";
// import Payment from './components/Payment';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        <InvoiceForm />
        {/* <Payment /> */}
      </Container>
    </div>
  );
}

export default App;

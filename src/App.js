
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';
import { Form, Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';

function App() {

  const [principal, setPrincipal] = useState();
  const [years, setYears] = useState();
  const [interest, setInterest] = useState();
  const [finalAmt, getfinalAmt] = useState();
  const formRef = useRef(null);

  const calculateCI = () => {
    const finalResult = principal * Math.pow(1 + interest, years);
    return getfinalAmt(finalResult.toFixed(2));
  }
  const reset = () => {
    formRef.current.reset();
    getfinalAmt("");
  }

  return (
    <div className="App">
      <h2 className="assetHeader">Compound interest</h2>
      <Form ref={formRef} className="assetForm">
        <Form.Group>
          <Form.Label className="assetLabel">Principal / Initial investment</Form.Label>
          <Form.Control type="number" placeholder="Enter principal amount" onChange={(evt) => setPrincipal(evt.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label className="assetLabel">Number of years</Form.Label>
          <Form.Control type="number" placeholder="Enter number of years" onChange={(evt) => setYears(evt.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label className="assetLabel">Interest</Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Prepend>
              <InputGroup.Text>%</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="inlineFormInputGroup" type="number" placeholder="Enter rate of interest" onChange={(evt) => setInterest(evt.target.value / 100)} />
          </InputGroup>
        </Form.Group>
        <br />
        <Button variant="primary" onClick={() => { calculateCI() }}>
          Submit
        </Button>
        &nbsp;&nbsp;
        <Button variant="secondary" onClick={() => reset()}>Reset</Button>
      </Form>
      {finalAmt ? 
      <Row className="assetBox">
        <Col>
            <p className="assetCaption">Total Amount:</p>
            <p className="assetResult">&#x20B9; {finalAmt}</p>
        </Col>
        <Col>
            <p className="assetCaption">Profit:</p>
            <p className="assetResult">&#x20B9; {(finalAmt-principal).toFixed(2)}</p>
        </Col>
      </Row> : ""}

    </div>
  );
}

export default App;

//App.js 
import React, { useState } from 'react'; 
import Alert from "react-bootstrap/Alert";

export default function BMICalculator() {
  const [input, setInput] = useState({
    berat: "0",
    tinggi: "0",
  });
  const [result, setResult] = useState(null);

  function changeInputHandler(event) {
    setInput(() => {
      setInput({ ...input, [event.target.name]: event.target.value });
      return { ...input, [event.target.name]: event.target.value };
    });
  }

  function hitung() {
    const rumus = input.berat / ((input.tinggi/100) * (input.tinggi/100));
    const text =
      rumus < 18.5
        ? "Berat badan anda kurang"
        : rumus < 24.9
        ? "Berat badan anda normal"
        : rumus < 29.9
        ? "Berat badan anda berlebih"
        : "";
    setResult(text);
  }
  return (
    <div className="App container col-sm-6">
      <div className="card text-center">
        <div className="card-header fs-2">Body Mass Index</div>
        <div className="card-body">
		  <div className="row g-3 align-items-center">
  			<div className="col-auto">
    			<span for="inputberat" class="col-form-span">Berat (kg) :</span>
            </div>
			<input
              type="number"
              name="berat"
              className="form-control"
              value={input.berat}
              onChange={changeInputHandler}
            />
			
          </div>
          <div className="row g-3 align-items-center">
  			<div className="col-auto">
    			<span for="inputberat" class="col-form-span">Tinggi (cm) :</span>
            </div>
            <input
              type="number"
              name="tinggi"
              className="form-control"
              value={input.tinggi}
              onChange={changeInputHandler}
            />
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          <div className="d-grid gap-2 mb-4">
            <button className="btn btn-primary" type="button" onClick={hitung}>
              Hitung
            </button>
          </div>
          <h2>Hasil</h2>
          {result && (
            <Alert
              variant="success"
              onClose={() => setResult(null)}
              dismissible
            >
              <p>{result || ""}</p>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

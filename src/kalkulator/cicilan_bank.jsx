//App.js 
import React, { useState } from 'react'; 
import Alert from "react-bootstrap/Alert";

export default function CicilanCalculator() {
  const [input, setInput] = useState({
    nominal_peminjaman: "0",
    bunga: "0",
    jangka_waktu: "0",
  });
  const [result, setResult] = useState(null);

  function changeInputHandler(event) {
    setInput(() => {
      setInput({ ...input, [event.target.name]: event.target.value });
      return { ...input, [event.target.name]: event.target.value };
    });
  }

  function hitung() {
    let pinjaman = input.nominal_peminjaman / input.jangka_waktu;
    let bunga = (input.nominal_peminjaman * input.bunga) / 100 / input.jangka_waktu;
    let total = pinjaman + bunga;

    setResult(
      new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(total)
    );
  }
  return (
    <div className="App container col-sm-6">
      <div className="card text-center">
        <div className="card-header fs-2 bg-primary text-white">Cicilan Bank</div>
        <div className="card-body">
		  <div className="row g-3 align-items-center">
  			<div className="col-auto">
    			<span for="inputberat" class="col-form-span">Nominal Peminjaman :</span>
            </div>
			<input
              type="number"
              name="nominal_peminjaman"
              className="form-control"
              value={input.nominal_peminjaman}
              onChange={changeInputHandler}
            />
			
          </div>
          <div className="row g-3 align-items-center">
  			<div className="col-auto">
    			<span for="inputberat" class="col-form-span">Bunga :</span>
            </div>
            <input
              type="number"
              name="bunga"
              className="form-control"
              value={input.bunga}
              onChange={changeInputHandler}
            />
          </div>

          <div className="row g-3 align-items-center">
  			<div className="col-auto">
    			<span for="inputberat" class="col-form-span">Jangka Waktu :</span>
            </div>
            <select
              className="form-select"
              name="jangka_waktu"
              onChange={changeInputHandler}
              defaultValue={0}
            >
              <option value="0" disabled hidden>
                Opsi
              </option>
              <option value="3">3 Bulan</option>
              <option value="6">6 Bulan</option>
              <option value="12">12 Bulan</option>
            </select>
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

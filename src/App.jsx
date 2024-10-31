import { useState } from "react";
import "./style.scss";

const App = () => {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  const botaoApagaTudo = () => {
    setInput1("");
    setInput2("");
  };

  return (
    <main>
      <h1>Calculadora</h1>

      <div className="card">
        <div className="inputs">
          <input
            type="number"
            placeholder="numero 1"
            value={input1}
            onChange={
              (capturandoPrimeiroValor, (e) => setInput1(e.target.value))
            }
          />
          <input
            type="number"
            placeholder="numero 2"
            value={input2}
            onChange={
              (capturandoSegundoValor, (e) => setInput2(e.target.value))
            }
          />
        </div>

        <h3>{resultado}</h3>

        <div className="buttons">
          <button onClick={soma}>+</button>
          <button onClick={subtracao}>-</button>
          <button onClick={multiplicacao}>*</button>
          <button onClick={divisao}>/</button>
          <button onClick={botaoApagaTudo}>C</button>
        </div>
      </div>
    </main>
  );
};

export default App;

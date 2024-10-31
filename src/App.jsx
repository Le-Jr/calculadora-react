import { useState } from "react";

const App = () => {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

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

  return (
    <main>
      <h1>Calculadora</h1>
      <input type="number" onChange={capturandoPrimeiroValor} />
      <input type="number" onChange={capturandoSegundoValor} />
      <button onClick={soma}>+</button>
      <button onClick={subtracao}>-</button>
      <button onClick={multiplicacao}>*</button>
      <button onClick={divisao}>/</button>

      <h3>{resultado}</h3>
    </main>
  );
};

export default App;

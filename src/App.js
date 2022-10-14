// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import Listado from "./components/Listado";
import Cabecera from "./components/Cabecera";
import { useState } from "react";
import { AppStyle } from "./styles/Styles";

function App() {


  const [count, setCount] = useState(0);

  const total = () => {
    setCount(count + 1);

  }

  return (
    //asigno el valor del metodo a la props total que luego uso en items, lo mismo para la props count
    <AppStyle>
      <Cabecera count={count} />
      <Listado total={total} />
    </AppStyle>
  );
}

export default App;

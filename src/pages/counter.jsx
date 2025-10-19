import { useState } from "react";
import { Button } from "@/components/base/buttons/button.tsx";
// Importar componente de Button desde untitled ui
import { BadgeWithDot } from "@/components/base/badges/badges";

export default function Counter() {
  let [count, setCount] = useState(0);
  // let [primerValor = nombre de tu variable, setSegundovalor = funcion para actualizar tu variable] = useState(valor inicial)

  let add = function () {
    setCount(count++);
  };

  let less = function () {
    setCount(count--);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">JavaScript Basics</h1>
      <div className="flex flex-col items-center gap-4">
        <h4 className="text-2xl">Contador con JavaScript Vue</h4>
        <Button
          id="decrement"
          onClick={() => less()}
          color="secondary"
          size="xl"
        >
          -
        </Button>
        <BadgeWithDot type="color" color="brand">
          {count}
        </BadgeWithDot>
        <Button
          id="increment"
          onClick={() => add()}
          color="secondary"
          size="xl"
        >
          +
        </Button>
      </div>
    </div>
  );
}

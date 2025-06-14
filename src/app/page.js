"use client";
import { useState } from "react";

export default function Home() {
  let [contador, setContador] = useState(0);

  if (contador < 0) {
    const idContador = document.getElementById("contadorid");
    idContador.className =
      "text-red-600 bg-white border-gray-300 border-5 text-6xl rounded-xl w-160 h-30 p-6 text-center";
  } else if (contador > 0) {
    const idContador = document.getElementById("contadorid");
    idContador.className =
      "text-green-600 bg-white border-gray-300 border-5 text-6xl rounded-xl w-160 h-30 p-6 text-center";
  } else {
    const idContador = document.getElementById("contadorid");
    idContador.className =
      "text-black bg-white border-gray-300 border-5 text-6xl rounded-xl w-160 h-30 p-6 text-center";
  }

  const sumar = () => {
    setContador((num) => num + 1);
  };

  const restar = () => {
    setContador((num) => num - 1);
  };

  const reseteo = () => {
    setContador(0);
  };
  return (
    <div class="bg-[url('../images/fondoMates.jpg')] bg-cover bg-center h-screen">
      <div className="flex justify-center">
        <div className="shadow-xl w-200 h-100 rounded-xl">
          <div className="flex justify-center text-4xl mt-50 mb-20">
            <p
              id="contadorid"
              className="bg-white border-gray-300 border-5 text-6xl rounded-xl w-160 h-30 p-6 text-center"
            >
              {contador}
            </p>
          </div>

          <div className="flex rounded-2% items-center justify-center gap-5">
            <button
              onClick={sumar}
              className="bg-green-500 text-white w-50 h-25 text-4xl rounded-xl"
            >
              ++
            </button>
            <button
              onClick={restar}
              className="bg-red-500 text-white w-50 h-25 text-4xl rounded-xl"
            >
              --
            </button>
            <button
              onClick={reseteo}
              className="bg-blue-500 text-white w-50 h-25 text-4xl rounded-xl"
            >
              restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

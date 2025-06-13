export default function Home() {
  const click = () => {
    alert('¡Has hecho clic en el botón!');
  };
  return (
    <div>

      <div>
        <h1 class ="text-center text-3xl mt-10 mb-10">Botón contador</h1>
      </div>


      <div class="flex justify-center">
        <div class="border border-black-100 border-5 shadow-xl w-300 h-150 rounded-xl">
          
          <div class="flex justify-center text-center text-4xl m-40 ">
            <p class="border border-black-100 border-5 rounded-xl w-100 h-20 p-3">0</p>
          </div>
          
          <div class="flex rounded-2% items-center justify-center gap-4">
            <button onClick={click} class="border border-green-100 border-5 w-30 h-15 text-2xl rounded-xl">++</button>
            <button class="border border-red-100 border-5 w-30 h-15 text-2xl rounded-xl">--</button>
            <button class="border border-blue-100 border-5 w-30 h-15 text-2xl rounded-xl">restart</button>
          </div>
        </div>
      </div>

    </div>
  );
}

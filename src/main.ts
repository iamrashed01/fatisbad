import "./style.css";
import gameInit from "./game";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="flex gap-10 flex-col py-10 h-screen bg-black items-center">
<div class="flex justify-between w-[400px] h-10">
  <h2 id="title" class="text-white text-2xl font-bold"></h2>
  <p id="score" class="text-white text-2xl font-bold">Score: 0</p>
</div>
<div class="flex"></div>
<div
  id="board"
  class="text-2xl overflow-hidden cursor-none font-bold text-red-600 justify-center flex items-center"
>
  <div id="box" class="shadow-md shadow-slate-300"></div>
</div>
</div>
`;

gameInit(
  document.querySelector<HTMLDivElement>("#board")!,
  document.querySelector<HTMLDivElement>("#box")!,
  document.querySelector<HTMLDivElement>("#title")!,
  document.querySelector<HTMLDivElement>("#score")!
);

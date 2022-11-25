import { useEffect, useState } from "react";
import Canvas, { MemoizedCanvas } from "./Canvas";

const data = [
  "Frontend Developer",
  "WordPress Developer",
  "Graphics Designer",
];
export default function Home() {


  

  const [state, setState] = useState({
    word: "",
    index: 0,
    isEditing: false,
    textSpeed: 200,
  });
  const intialize = () => {
    const current = state.index % data.length;
    let eachText = data[current];

    state.isEditing
      ? setState({
          ...state,
          word: eachText.substring(0, state.word.length - 1),
        })
      : setState({
          ...state,
          word: eachText.substring(0, state.word.length + 1),
        });

    if (state.isDeleting) state.textSpeed /= 2;

    if (!state.isEditing && state.word === eachText) {
      setState({
        ...state,
        textSpeed: 1000,
        isEditing: true,
      });
    } else if (state.isEditing && state.word === "") {
      setState({
        ...state,
        index: state.index + 1,
        textSpeed: 400,
        isEditing: false,
      });
    }
  };
 

  useEffect(() => {
    const effect = () => {
      setTimeout(() => intialize(), state.textSpeed);
    };

    effect();
  });

  return (
    <div>
      <div className="">
        {/* <div className="w-full h-full">
          {
            document.addEventListener("mousemove", function (e) {
              let x = e.pageX
              let y = e.pageX
            })
          }
        </div> */}
        <section className="flex bg-[#101c30] justify-between text-white">
        <div className="m-auto">
        <h1>
          Hello! I am Romauld, a
          <span className="text-container">{state.word}</span>
          <span className="blink"></span>
        </h1>
        <h2>
         I build interactive websites that run across
         platforms & devices
        </h2>
        </div>
        <div>
      <MemoizedCanvas/>
      </div>
        </section>
      </div>
      
    </div>
  );
}

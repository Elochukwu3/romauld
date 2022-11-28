import { useEffect, useState } from "react";
import{ MemoizedCanvas } from "./Canvas";

const data = ["Frontend Developer", "WordPress Developer", "Graphics Designer"];
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
    <div id="home">
      <section className="realtive justify-between text-white h-auto">
        <div className=" absolute z-10 my-auto top-1/4 left-24 max-sm:left-5">
          <p className="pl-2 text-[#e9b171] font-semibold">Hello!!,</p>
          <h1 className="romauld font-semibold m-0 first-letter:text-[#e9b171]">
         I am Romauld.
          </h1>
            <span className="text-container text-3xl">A, {state.word}</span>
            <span className="blink"></span>
          <h2 className="text-2xl font-semibold text-[#8892b0] italic">
            I build interactive websites 
          </h2>
          <h2 className="text-2xl font-semibold text-[#8892b0] italic">
          that run across platforms & devices.
          </h2>
        </div>
        <div className=" ">
          <MemoizedCanvas />
        </div>
      </section>
    </div>
  );
}

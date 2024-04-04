import { useState } from "react";

export default function LudoBoard() {
  let [moves, setmoves] = useState({ blue: 0, yellow: 0, red: 0, green: 0 });
  let [arr, SetArr] = useState(["no moves"]);

  let updateBlue = () => {
    //setmoves({...moves, blue: moves.blue + 1}) //...moves --> spread of object which is the copy of moves xD
    /*setmoves((prevMoves) => {
            return {...prevMoves, blue: moves.blue + 1}
        }) */

    SetArr((prevArr) => {
        return [...prevArr, "blue moves"] // ...prevArr --> spread of array for copy
    });
    console.log(arr);
  };

  let updateYellow = () => {
    setmoves((prevMoves) => {
      return { ...prevMoves, yellow: moves.yellow + 1 };
    });
  };

  let updateRed = () => {
    setmoves((prevMoves) => {
      return { ...prevMoves, red: moves.red + 1 };
    });
  };

  let updateGreen = () => {
    setmoves((prevMoves) => {
      return { ...prevMoves, green: moves.green + 1 };
    });
  };

  return (
    <div>
      <p>Game Begins</p>
      <p>{arr}</p>
      <div>
        <p>BlueMoves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>YellowMoves = {moves.yellow} </p>
        <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
          +1
        </button>
        <p>RedMoves = {moves.red} </p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
        <p>GreenMoves = {moves.green} </p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
      </div>
    </div>
  );
}


import { useState,useEffect, use } from "react";


export default function Home() {

  const [cells,setCells] = useState(["", "", "", "", "", "", "", "", ""]);
   const [player, setPlayer] = useState("X");
   
const clickchange = (i) => {
    if (cells[i] === "") {
      const newCells = [...cells];
      newCells[i] = player ;
      setPlayer(player === "X" ? "O" : "X");
      setCells(newCells);
    }
  }
const checkWinner = (cells) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    
    for (let i= 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  };
  useEffect(() => {
    const winner = checkWinner(cells);
    if (winner) {
      alert(`Player ${winner} wins!`);
      setCells(["", "", "", "", "", "", "", "", ""]);
      setPlayer("X");
    } else if (!cells.includes("")) {
      alert("It's a draw!");
      setCells(["", "", "", "", "", "", "", "", ""]);
      setPlayer("X");
    }
  }, [cells]);  
  return (<div className="flex flex-col justify-center items-center h-screen gap-5">
    <div className="text-7xl font-extrabold">XO game</div>
    <div className="text-4xl font-semibold">turn : {player}</div>
    <div className="w-100 h-100 grid grid-cols-3 grid-rows-3 gap-2 bg-black"> {cells.map((item,i)=>{
      return (
     <div key={i} onClick={()=> clickchange(i)} className={`w-[100%] h-[100%] bg-white flex justify-center items-center text-8xl ${item == "X" ? "text-red-500":"text-blue-600"}`}>{item}</div>
      );
    })}</div>
    <button onClick={() => {
      setCells(["", "", "", "", "", "", "", "", ""]);
      setPlayer("X");
    }} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
      Reset Game
    </button>
   
    </div>
  );
}

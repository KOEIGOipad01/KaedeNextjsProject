"use client"

import { useState } from "react";

export default function DiceGame() {
  const [diceRoll1, setDiceRoll1] = useState<number | null>(null);
  const [diceRoll2, setDiceRoll2] = useState<number | null>(null);
  const [youWin, setYouWin] = useState<boolean | null>(null);

  const rollDice = () => {
    let roll1 = Math.floor(Math.random() * 6) + 1;
    setDiceRoll1(roll1);
    let  roll2 = Math.floor(Math.random() * 6) + 1
    setDiceRoll2(roll2);
    if (roll1 === roll2) {
      setYouWin(true);
    }
    else{
     setYouWin(false);
    }
};

  return (
    <div className="p-4 border rounded-md bg-white text-center">
      <button 
        onClick={rollDice}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
    >
        Roll Dice
    </button>
    {diceRoll1 !== null && (
         <p className="mt-4 text-xl"> Yay! you rolled a {diceRoll1} ! (act happy)</p>
    )}
      {diceRoll2 !== null && (
         <p className="mt-4 text-xl"> Yay! you rolled a {diceRoll2} ! (exclaims)</p>
    )}
       {youWin !== null && (
         <p className="mt-4 text-2xl font-bold">
            {youWin ? "You have won the battle!!" : "You lost AGAIN"}
         </p>
      )}
   </div>
  );
}
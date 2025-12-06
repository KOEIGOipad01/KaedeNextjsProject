"use client"
import { useState } from "react";

export default function LikeCounter() {
    const [likes, setLikes] =useState (0);

    const handleLike = () => { 
        setLikes(likes + 1); 
    };

    return (
       <div className="p-4 border rounded-md bg-white text-center">
        <button
         onClick={handleLike} 
         className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
         > Likes {likes}
         </button>
       </div>
    );
   }
import LikeCounter from "../ui/dashboard/likeCounter";
import DiceGame from "../ui/dashboard/diceGame";

export default function Page() {
    return (
        <div className="p-4 border rounded-md bg-white text-center">
        <h1 className="text-2xl font-bold mb-1">Dashboard Home Page</h1>
        <LikeCounter />
        <DiceGame />
        </div>
    );
}
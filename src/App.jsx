import "./App.css";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

function App() {
    const coffees = useLoaderData();
    return (
        <>
            <div className="max-w-[1200px] mx-auto">
                <h3 className="mt-10 text-center text-3xl">
                    Coffees:{coffees.length}
                </h3>
                <div className="lg:grid grid-cols-2 gap-8 mt-14">
                    {coffees.map((coffee) => (
                        <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                        ></CoffeeCard>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;

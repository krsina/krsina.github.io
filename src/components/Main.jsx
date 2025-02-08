import { useState } from "react";

const Main = () => {
    const [ingredients, setIngredients] = useState([]);
    
    function submitIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients([...ingredients, newIngredient]);
    }
    return (
        <main className="flex flex-col mt-4">
            <div className="flex flex-row">
            <form action={submitIngredient} className="mr-2 drop-shadow-lg border-2">
                <input
                    className="pr-8"
                    type="text"
                    name="ingredient"
                    placeholder="e.g oregano"
                    aria-label="Add ingredient"
                />
                <button className="pl-6 pr-6 text-sm bg-black text-white border-2 border-black rounded-md hover:bg-slate-400">+ Add ingredient</button> 
            </form>
            </div>

            <ul className="flex flex-col list-disc list-inside">
                {ingredients.map(ingredient => {return <li key={ingredient}>{ingredient}</li>})}
            </ul>
        </main>
    )
}

export default Main;
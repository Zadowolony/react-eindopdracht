
import { useState } from "react";
import CategoriesItems from "./CategoriesItems";
import FormItem from "./FormItem";

export default function HeaderContainer({ items, handleAddItems, category, setCategory }) {

    // Hier toevoegen om de knoppen kleur werkend te krijgen
    //const [category, setCategory] = useState('');



    return (
        <>
            <h1 className="mb-4 text-4xl font-bold">Packing list</h1>
            <div className="my-8">

                <CategoriesItems
                    setCategory={setCategory}
                    category={category} />

                <FormItem
                    items={items}
                    handleAddItems={handleAddItems}
                    category={category} />


            </div>
        </>

    )
}
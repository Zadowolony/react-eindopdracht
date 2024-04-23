import { useState } from "react";
import CategoriesItems from "./CategoriesItems";
import FormItem from "./FormItem";

export default function HeaderContainer({ items, handleAddItems }) {

    const [category, setCategory] = useState('');

    const addItemWithcategory = (item) => {
        handleAddItems(item, category)
    }



    return (
        <>
            <h1 className="mb-4 text-4xl font-bold">Packing list</h1>
            <div className="my-8">

                <CategoriesItems
                    setCategory={setCategory} />
                <FormItem
                    items={items}
                    handleAddItems={addItemWithcategory} />


            </div>
        </>

    )
}
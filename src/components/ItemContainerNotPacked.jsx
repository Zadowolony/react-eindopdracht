

import { useState } from "react";
import ItemListNotPacked from "./ItemListNotPacked";
import ItemsCategoryNotPacked from "./ItemsCategoryNotPacked";
import MainButtonsNotPacked from "./MainButtonsNotPacked";

export default function ItemContainerNotPacked({ items, removeItem, removeAllItemsNotPacked, togglePacked, }) {

    const [activeCategory, setActiveCategory] = useState([]);


    const filteredItems = items.filter(item => !item.packed && (activeCategory.length === 0 || activeCategory.includes(item.category)));



    return (

        <div>
            <header className="grid gap-2 items-center mb-6 border-b pb-6">
                <h2 className="font-bold text-2xl">Items to pack</h2>
                <div className="flex gap-2">

                    <MainButtonsNotPacked
                        removeAllItemsNotPacked={removeAllItemsNotPacked}
                        items={items}
                        setActiveCategory={setActiveCategory}



                    />

                </div>
            </header>

            <ItemsCategoryNotPacked
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />


            <ItemListNotPacked
                items={filteredItems}
                removeItem={removeItem}
                togglePacked={togglePacked}
            />

        </div>
    )
}
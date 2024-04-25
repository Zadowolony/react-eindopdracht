

import { useState } from "react";
import ItemListPacked from "./ItemListPacked";
import ItemCategoryPacked from "./ItemsCategoryPacked";
import MainButtonPacked from "./MainButtonPacked";

export default function ItemContainerPacked({ items, removeItem, togglePacked, removeAllItemsPacked }) {

    const [activeCategory, setActiveCategory] = useState([]);


    const filteredItems = items.filter(item => item.packed && (activeCategory.length === 0 || activeCategory.includes(item.category)));

    return (

        <div>

            <header className="grid gap-2 items-center mb-6 border-b pb-6">
                <h2 className="font-bold text-2xl">Packed Items</h2>
                <div className="flex gap-2">

                    <MainButtonPacked
                        removeAllItemsPacked={removeAllItemsPacked}
                        items={items}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory} />



                </div>
            </header>

            <ItemCategoryPacked
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory} />


            <ItemListPacked
                items={filteredItems}
                removeItem={removeItem}
                togglePacked={togglePacked} />
        </div>

    )
}
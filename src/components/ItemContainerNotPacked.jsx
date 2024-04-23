

import ItemListNotPacked from "./ItemListNotPacked";
import ItemsCategoryNotPacked from "./ItemsCategoryNotPacked";
import MainButtonsNotPacked from "./MainButtonsNotPacked";

export default function ItemContainerNotPacked({ items, removeItem, removeAllItemsNotPacked, togglePacked, }) {

    return (

        <div>
            <header className="grid gap-2 items-center mb-6 border-b pb-6">
                <h2 className="font-bold text-2xl">Items to pack</h2>
                <div className="flex gap-2">

                    <MainButtonsNotPacked
                        removeAllItemsNotPacked={removeAllItemsNotPacked}
                        items={items}


                    />

                </div>
            </header>

            <ItemsCategoryNotPacked
            />


            <ItemListNotPacked
                items={items}
                removeItem={removeItem}
                togglePacked={togglePacked}
            />

        </div>
    )
}
import ItemCategories from "./ItemCategories";

import ItemListPacked from "./ItemListPacked";
import MainButtonPacked from "./MainButtonPacked";

export default function ItemContainerPacked({ items, removeItem, togglePacked, removeAllItemsPacked }) {

    return (

        <div>

            <header className="grid gap-2 items-center mb-6 border-b pb-6">
                <h2 className="font-bold text-2xl">Packed Items</h2>
                <div className="flex gap-2">

                    <MainButtonPacked
                        removeAllItemsPacked={removeAllItemsPacked}
                        items={items} />



                </div>
            </header>
            <ItemCategories />
            <ItemListPacked
                items={items}
                removeItem={removeItem}
                togglePacked={togglePacked} />
        </div>

    )
}
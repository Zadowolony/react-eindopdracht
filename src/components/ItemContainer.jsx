
import ItemContainerNotPacked from "./ItemContainerNotPacked";
import ItemContainerPacked from "./ItemContainerPacked";



export default function ItemContainer({ items, removeItem, removeAllItems, togglePacked, removeAllItemsPacked, removeAllItemsNotPacked }) {



    return (
        <div className="grid grid-cols-2 gap-4 mt-12 transition ">


            <ItemContainerNotPacked
                items={items}
                removeItem={removeItem}
                removeAllItemsNotPacked={removeAllItemsNotPacked}
                togglePacked={togglePacked} />



            <div>




                <ItemContainerPacked
                    items={items}
                    removeItem={removeItem}
                    togglePacked={togglePacked}
                    removeAllItemsPacked={removeAllItemsPacked} />


            </div>
        </div>
    )
}
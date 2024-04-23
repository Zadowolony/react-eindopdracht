export default function ItemListPacked({ items, togglePacked, removeItem }) {

    const packedItems = items.filter(item => item.packed);

    return (
        <>

            {packedItems.length === 0 ? (

                <p>There are no packed items</p>
            ) : (
                <ul className="grid gap-2">


                    {items.filter(item => item.packed).map(item => (



                        <li key={item.id}>

                            <div
                                class="overflow-hidden bg-neutral-200 transition-all rounded-lg flex justify-between gap-2 flex-row-reverse">
                                <div class="p-4 flex-1 flex gap-4 items-center justify-between">
                                    <div class="grid"><span>{item.item}</span><span class="text-neutral-400">Clothes</span></div>

                                    <button
                                        class="text-sm opacity-30 hover:opacity-100 px-4 py-1 flex items-center justify-center bg-gray-400 text-black hover:bg-red-300/70 transition-all hover:text-red-500 rounded-full text-lg"
                                        onClick={() => removeItem(item.id)}>×
                                        remove item</button>
                                </div><button
                                    class="bg-sky-500 hover:bg-sky-600 transition-all text-sky-100 p-4"
                                    onClick={() => togglePacked(item.id)}>Unpack</button>
                            </div>

                        </li>


                    ))}


                </ul>


            )}


        </>
    )
}
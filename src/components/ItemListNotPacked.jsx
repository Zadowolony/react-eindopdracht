export default function ItemListNotPacked({ items, togglePacked, removeItem }) {

    const notPackedItems = items.filter(item => !item.packed);

    return (

        <>
            {notPackedItems.length === 0 ? (

                <p>No items to pack</p>
            ) : (

                <ul className="grid gap-2">


                    {items.filter(item => !item.packed).map(item => (

                        <li key={item.id}>
                            <div className="overflow-hidden bg-neutral-200 transition-all rounded-lg flex justify-between gap-2 ">
                                <div className="p-4 flex-1 flex gap-4 items-center justify-between">
                                    <div className="grid">
                                        <span>{item.item}</span>
                                        <span className="text-neutral-400">Documents</span>
                                    </div>
                                    <button
                                        className="text-sm opacity-30 hover:opacity-100 px-4 py-1 flex items-center justify-center bg-gray-400 text-black hover:bg-red-300/70 transition-all hover:text-red-500 rounded-full text-lg"
                                        onClick={() => removeItem(item.id)}>
                                        × remove item
                                    </button>
                                </div>
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 transition-all text-blue-100 p-4"
                                    onClick={() => togglePacked(item.id)}>
                                    Pack
                                </button>
                            </div>
                        </li>


                    ))}


                </ul>
            )}
        </>

    )
}
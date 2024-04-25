export default function MainButtonPacked({ removeAllItemsPacked, items, setActiveCategory }) {

    const showButton = items.filter(item => item.packed)


    return (
        <>

            <button
                className="bg-blue-500 text-blue-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-lg px-2 py-1"
                onClick={removeAllItemsPacked}
                disabled={showButton.length === 0}>
                Remove all items
            </button>
            <button
                disabled={showButton.length === 0}
                className="bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-indigo-100 rounded-lg px-2 py-1"
                onClick={() => setActiveCategory([])}
            >
                Clear filters
            </button>
        </>
    )
}
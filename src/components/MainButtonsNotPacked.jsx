export default function MainButtonsNotPacked({ removeAllItemsNotPacked, items }) {

    const showIcon = items.filter(item => !item.packed)

    return (
        <>

            <button
                className="bg-blue-500 text-blue-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-lg px-2 py-1"
                onClick={removeAllItemsNotPacked}
                disabled={showIcon.length === 0}>
                Remove all items
            </button>
            <button

                className="bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-indigo-100 rounded-lg px-2 py-1"
                disabled={showIcon.length === 0}
            >
                Clear filters
            </button>
        </>
    )
}
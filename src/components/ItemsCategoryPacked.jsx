export default function ItemCategoryPacked({ setCategory }) {

    const categories = ['Documents', 'Clothes', 'Camping gear', 'Toiletry'];

    return (

        <>
            <div
                style={{ opacity: 1, pointerEvents: "all" }}
                className="transition-all my-4 flex gap-2 flex-wrap items-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-filter"
                >
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>

                {categories.map(category => (
                    <button
                        key={category}
                        type="button"
                        className="
                                    transition-all px-4 py-1 rounded-full text-sm
                                    bg-neutral-300 hover:bg-neutral-400/70
                                    "
                        onClick={() => setCategory(category)}
                    >
                        {category}
                    </button>

                ))}

            </div>
        </>

    )
}
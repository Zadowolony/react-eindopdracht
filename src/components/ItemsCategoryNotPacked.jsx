export default function ItemsCategoryNotPacked({ setActiveCategory, activeCategory, items }) {

    const categories = ['Documents', 'Cloths', 'Camping gear', 'Toiletry'];


    const toggleCategory = (category) => {
        if (activeCategory.includes(category)) {
            setActiveCategory(activeCategory.filter(c => c !== category));
        } else {

            setActiveCategory([...activeCategory, category]);
        }
    };

    let anyUnpacked = items.some(item => item.packed === false);

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
                    onClick={() => setActiveCategory([])}
                >
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>

                {categories.map(category => (
                    <button
                        key={category}
                        type="button"
                        className={`transition-all px-4 py-1 rounded-full text-sm ${activeCategory.includes(category) ? 'bg-blue-300' : 'bg-neutral-300'} ${!anyUnpacked ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-400/70'}`}
                        onClick={() => toggleCategory(category)}
                        disabled={!anyUnpacked}

                    >
                        {category}
                    </button>

                ))}

            </div>
        </>

    )
}
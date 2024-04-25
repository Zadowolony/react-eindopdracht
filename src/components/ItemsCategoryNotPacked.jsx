export default function ItemsCategoryNotPacked({ setActiveCategory, activeCategory }) {

    const categories = ['Documents', 'Cloths', 'Camping gear', 'Toiletry'];

    // Function to toggle category selection
    const toggleCategory = (category) => {
        if (activeCategory.includes(category)) {
            // Remove category from selection if it's already selected
            setActiveCategory(activeCategory.filter(c => c !== category));
        } else {
            // Add category to selection if it's not already selected
            setActiveCategory([...activeCategory, category]);
        }
    };

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
                        className={`transition-all px-4 py-1 rounded-full text-sm ${activeCategory.includes(category) ? 'bg-blue-300' : 'bg-neutral-300 hover:bg-neutral-400/70'}`}
                        onClick={() => toggleCategory(category)}

                    >
                        {category}
                    </button>

                ))}

            </div>
        </>

    )
}
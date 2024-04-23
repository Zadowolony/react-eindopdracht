export default function CategoriesItems({ setCategory }) {

    const categories = ['Documents', 'Cloths', 'Camping gear', 'Toiletry'];
    return (
        <div className="flex gap-2 items-center mb-2">
            Category:{categories.map(category => (

                <button
                    key={category}
                    type="button"
                    className="transition border border-blue-500 bg-blue-500 text-blue-100 px-4 py-1 rounded-full"
                    onClick={() => setCategory(category)}
                >
                    {category}
                </button>

            ))}



        </div>
    )
}
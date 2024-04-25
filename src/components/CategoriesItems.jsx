import { useEffect, useState } from "react";

export default function CategoriesItems({ setCategory, category }) {

    const categories = ['Documents', 'Cloths', 'Camping gear', 'Toiletry'];

    const handleCategoryClick = (cat) => {

        console.log("Attempting to set category to:", cat);  // Debug before setting
        setCategory(cat);
        console.log("Category should now be:", cat);  // Debug after setting

    };

    useEffect(() => {
        console.log("Component re-rendered, current category:", category);
    }, [category]);





    return (
        <div className="flex gap-2 items-center mb-2">
            Category:{categories.map(cat => (

                <button
                    key={cat}
                    type="button"
                    className={`transition border px-4 py-1 rounded-full ${category === cat
                        ? 'active' : 'inactive'
                        }`}
                    onClick={() => handleCategoryClick(cat)}
                >
                    {cat}
                </button>

            ))}



        </div>
    )
}
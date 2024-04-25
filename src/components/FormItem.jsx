import { useEffect, useRef, useState } from "react"

export default function FormItem({ handleAddItems, category }) {

    const inputRef = useRef()

    const [input, setInput] = useState('')

    const handleItem = (e) => {

        e.preventDefault();
        handleAddItems(input, category);
        setInput('');
    }

    useEffect(() => {
        inputRef.current.focus();
    })

    return (

        <form onSubmit={handleItem} className="flex rounded-lg overflow-hidden">

            <input
                placeholder="What would you like to pack?"
                type="text"
                className="flex-1 p-4 bg-neutral-200 focus:bg-neutral-300/90 transition-all outline-none"
                value={input}
                ref={inputRef}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 active:bg-blue-400 text-blue-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                disabled={input === ''}

            >
                Add item
            </button>
        </form>
    )
}
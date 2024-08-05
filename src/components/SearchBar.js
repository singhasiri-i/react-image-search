import { useState } from "react"
import "./SearchBar.css"

function SearchBar(prop) { // หรือ prop จะเขียนเป็น { onSubmit }
    const onSubmit = prop.onSubmit

    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        
        onSubmit(term)
    }

    const handleOnChange = (event) => {
        setTerm(event.target.value)
    }

    return (
        <div className="search-bar">
            <form onSubmit={ handleFormSubmit }>
                <label>Enter search term.</label>
                <input value={ term } onChange={ handleOnChange } />
            </form>
        </div>
    )
}

export default SearchBar

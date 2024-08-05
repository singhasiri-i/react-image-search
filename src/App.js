import React, { useState } from "react"
import SearchBar from "./components/SearchBar"
import searchImages from "./api"
import ImageList from "./components/ImageList"

function App() {
    const [images, setImages] = useState([])

    const handleSubmit = async (term) => { // ใส่ term เพื่อให้ตัวลูกส่ง term กลับมาให้ได้ จาก SearchBar
        const result = await searchImages(term)
        
        setImages(result)
    }

    return (
        <div>
            <SearchBar onSubmit={ handleSubmit } />
            <ImageList images={ images } />
        </div>
    )
}

export default App

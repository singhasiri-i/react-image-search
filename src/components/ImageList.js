import ImageShow from "./ImageShow"
import "./ImageList.css"

function ImageList(prop) { // หรือ prop จะเขียนเป็น { images }
    const images = prop.images

    const renderedImages = images.map((image) => {
        return <ImageShow key={ image.id } image={ image } />
    })

    return <div className="image-list">{ renderedImages }</div>
}

export default ImageList

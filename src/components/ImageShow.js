function ImageShow(prop) { // หรือจะเปลี่ยน prop เป็น { image }
    const image = prop.image

    return (
        <div>
            <img src={image.urls.small} alt={image.alt_description} />
        </div>)
}

export default ImageShow

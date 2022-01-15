import GalleryItem from '../GalleryItem/GalleryItem'
function GalleryList({galleryList}){
return (
    <div>
    {galleryList.map((item) =>(
        <GalleryItem
        key={item.id}
        item={item}
        addLikes={addLikes}
        />
    ))}
    </div>
)
}

export default GalleryList;
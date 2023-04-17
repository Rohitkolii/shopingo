import { useState } from "react";

const ItemImages = ({images= [{url: " "}]}) => {

    const [MainImage, setMainImage] = useState(images[0])

    return(
        <>
            <div className='main-ItemsImageCt'>
                 <img 
                 src={MainImage.url} alt={MainImage.filename}/>
            </div>

            <div className='sub-ItemsImageCt'>
                {images && images.map((elm, index) => {
                    return(
                        <div key={index}>
                            <img 
                            src={elm.url}
                            alt={elm.filename}
                            onClick={() => setMainImage(elm)}
                            />
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}

export default ItemImages;
// import { useState } from "react";

const ItemImages = ({product_img}) => {

    // const [MainImage, setMainImage] = useState(images[0])

    return(
        <>
            <div className='main-ItemsImageCt'>
                 <img 
                 src={`${process.env.REACT_APP_URL}${product_img}`} alt={product_img}/>
            </div>

            {/* <div className='sub-ItemsImageCt'>
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
            </div> */}
        </>
    )
}

export default ItemImages;
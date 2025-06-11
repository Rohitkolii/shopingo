import Button from '../Button/Button';
import CountDownTimer from '../CountDownTimer/CountDownTimer';
import './FeaturedPost.css'

const FeaturedPost = () => {

    const Links = {
        Link: '/shop',
        LinkText: 'Shop Now'
    }

    const Time = 'Dec 23, 2025 10:41:00';
    // const Time = new Date() + 500000;


    return(
        <div className='FeaturedPost'>
            <div className='FeaturedPost-container'>
                <div className="inner-FeaturedPost">
                    <div className='FeaturedPost-text'>
                        <p>Featured Product</p>
                        <h2>ShopinGo Fashionable Jeans</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis laudantium dignissimos commodi at facere deleniti aliquid? Dolorem quaerat ut ullam.</p>
                        <div className="Featuredpost-price">
                            <p className='pricep'>$199 <del> $499</del></p>
                            <Button Links={Links}/>
                        </div>
                        <div className='Offertimer'>
                            <p>Sale Ends in</p>
                            <CountDownTimer Time={Time} />
                        </div>
                    </div>
                    <div className='FeaturedPost-img'>
                        <img src="./images/feturedmodel.png" alt="featured post" />
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default FeaturedPost;
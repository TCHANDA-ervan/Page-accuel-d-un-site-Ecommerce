import { FaShoppingCart, FaRegBookmark} from 'react-icons/fa';

export function Products(props) {
    return(
        <div className='productList'>
            <div key={props.id} className='productCard'>
                <img src={props.image} alt='product-img' className='productImage'></img>
                
                 {/* bibliotheque react-icon */}
                <FaShoppingCart className={"productCard__cart"} />
                <FaRegBookmark className={"productCard__wishlist"} />
                
                <div className='productCard__content'>
                    <h3 className='productName'>{props.name}</h3>
                    <div className='displayStack__1'>
                        <div className='productPrice'>{props.price} €</div>
                    </div>
                    <div className='displayStack__2'>
                    
            
                        <div className='productTime'>{props.timeLeft} jours restants</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
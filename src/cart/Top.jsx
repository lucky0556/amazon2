
import './Top.css';
import { useCart } from "./cartFunctions";

function Top()
{
    const { cart,totalQuantity } = useCart();

    return(
        <div>
            <div className="top">
            <div className="left">
                <a href="amazon.html" className="ama">
                <img className="photo1" src=".\images\amazon-logo.png"/>
            </a>
            </div>
            <div className="middle">
                <p className="mid1">Checkout</p>
                <p className="mid2">({totalQuantity} items)</p>
            </div>
            <div className="right">
                <img className="photo2" src=".\images\icons\checkout-lock-icon.png"/>
            </div>
        </div>
        </div>
    )
}
export default Top;
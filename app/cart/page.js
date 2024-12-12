import list from './data.js'
import Message from "./temp.js";

export default function Cart() {
    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <Message/>
        </div>
    )
}

/**
 * 재사용이 잦은 HTML 묶음 재활용을 위한 컴포넌트 문법
 * @returns {JSX.Element}
 * @constructor
 */
function CartItem() {
    return (
        <div className="cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>1개</p>
            <p>{list["age"]}</p>
            <p>{list["brand"]}</p>
        </div>
    )
}
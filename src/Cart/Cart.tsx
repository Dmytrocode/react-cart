
import CartItem from '../CartItem/CartItem';

import {Wrapper} from './Cart.styles';

import { CartItemType } from '../App';

type Props = {

    cartItems: CartItemType[];
    addToCard: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => 
{
    return (
    <Wrapper>
        <h2> Shopping Cart </h2>
        {cartItems.length == 0 ? <p> No Items in the Cart </p> : null}
        {cartItems.map(item => (
            <CartItem />
        ))}
    </Wrapper>
    );
};

export default Cart;
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useNavigate } from "react-router";
import { CartList } from "../cmps/CartList";
import { update } from "../store/actions/user.actions";
export function CartIndex() {
    const user = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()
    if (!user) {
        navigate('/signup')
        return
    }
    console.log('cart', user);
    let { cart } = user
    console.log('cart', cart);

    async function onDeleteItem(itemId) {
        let userToUpdate = { ...user, cart: user.cart.filter(item => item._id !== itemId) }
        console.log(userToUpdate);
        await update(userToUpdate)
    }
    return (
        // <pre>{JSON.stringify(user.cart, null, 2) || null}</pre>
        <CartList list={user.cart} onDeleteItem={onDeleteItem} />
    )
}
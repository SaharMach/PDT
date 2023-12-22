import { useSelector } from "react-redux/es/hooks/useSelector"
import { useNavigate } from "react-router";
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
    return (
        <div>Here</div>
    )
}
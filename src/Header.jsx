import { Link } from "react-router-dom";

export default function Header({ qty }) {

    return (
        <>
            <div className="header">
                <div className="header-wrapper">
                    <Link to={`/`} className="logo-wrapper">
                        <img src="../assets/logo.png" alt="logo" className="logo" loading="lazy"/>
                    </Link>
                    <div className="info-wrapper">
                        <Link to={'/cart'} className="cart-info">
                            <div className="cart-icon-wrapper">
                                <img src="../assets/shopping-cart.png" alt="Cart" className="cart-icon" />
                                {qty > 0 && (
                                    <div className="cart-qty-circle">{qty}</div>
                                )}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
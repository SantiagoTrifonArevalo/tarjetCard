import React from "react";
// import "./CreditCard.css"
import "./credit.css"
const CreditCard = ({ user }) => {
    console.log(user.expirationMonth);
    return (
        <div
            className="container creditCard-box"
            style={{
                color: `${user.color}`,
                backgroundColor: `${user.bgColor}`
            }}
        >
            <p className="type">{user.type}</p>
            <p className="number">{user.number}</p>
            <p className="expirationMonth">{user.expirationMonth}</p>
            <p className="expirationYear">{user.expirationYear}</p>
            <p className="bank">{user.bank}</p>
            <p className="owner">{user.owner}</p>
            <p className="cssClass">{user.cssClass}</p>
        </div>);
};
export default CreditCard;
<div class="CreditCardStyle"></div>
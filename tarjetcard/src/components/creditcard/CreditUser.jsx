import React from 'react'
import { dataUser } from "./user.js";
import CreditCard from './CreditCard.jsx';

const CreditUser = () => {
    console.log(dataUser);
    return (
        <>
            {
                dataUser.map((user, i) =><CreditCard user={user} key={i}/>)
            }
        </>
    )
}

export default CreditUser
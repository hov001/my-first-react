import React from 'react';
// Clock
import Clock from "../lib/Clock";
// Toggle
import Toggle from "../lib/Toggle";
// Calculator
import Calculator from "../lib/Calculator";

// const user = {
//     name: 'Hovhannes',
//     lname: 'Kocharyan'
// }
//
// const getUserFullName = (user) => {
//     if(typeof user === 'object') {
//         return `${user.name} ${user.lname}`
//     } else {
//         return 'guest'
//     }
// }

function Header() {
    return (
        <div>
            <Clock name="Armenia" />
            <Clock name="Romania" />
            <Clock name="Russia" />
            <Toggle />
            <Calculator />
        </div>
    )
}

export default Header
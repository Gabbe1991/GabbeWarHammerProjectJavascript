import React from 'react';
import './Button.css'
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];


const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, ButtonStyle,
buttonSize}) => {
    const checkButtonStyle = STYLES.includes(ButtonStyle) ? ButtonStyle : STYLES[0];

     const checkbuttonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

     return (
         <Link to='/SignUp' className='btn-mobile'>
             <button className={`btn ${checkButtonStyle} ${checkbuttonSize}`}
             onClick={onClick}
             type={type}>
                 {children}
             </button>
         </Link>
     )
};

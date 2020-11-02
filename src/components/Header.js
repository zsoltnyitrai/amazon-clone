import React from 'react'
import amazonlogo from'../assets/amazon-logo.png'
import '../styles/Header.css'
import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'


function Header() {
    return (
        <nav className='header'>
            <Link to='/' className='header-link'>
            <img 
                src={amazonlogo}
                className='header-logo'
                alt=''
            />
            </Link>
            <div className='header-search'>
                <input type='text' className='header-searchInput'/>
                <AiOutlineSearch className='header-searchIcon'></AiOutlineSearch>
            </div>

            <div className="header-nav">
                <Link to='/login' className='header-link'>
                    <div className='header-option'>
                        <span className='header-option-lineOne'>Hy</span>
                        <span className='header-option-lineTwo'>Sign in</span>
                    </div>
                </Link>
                <Link to='/' className='header-link'>
                    <div className='header-option'>
                        <span className='header-option-lineOne'>Returns</span>
                        <span className='header-option-lineTwo'>And Orders</span>
                    </div>
                </Link>
                <Link to='/' className='header-link'>
                    <div className='header-option'>
                        <span className='header-option-lineOne'>Your</span>
                        <span className='header-option-lineTwo'>Prime</span>
                    </div>
                </Link>
                <Link to='/checkout' className='header-link'>
                    <div className='header-optionBasket'>
                        <FaShoppingCart/>
                        <span className='header-option-lineTwo header-basketCount'>0</span>
                    </div>
                </Link>
            </div>
        </nav>
            
    )
}

export default Header

import React,{useState} from 'react'
import amazonlogo from'../assets/amazon-logo.png'
import '../styles/Header.css'
import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import {RiAccountCircleFill} from 'react-icons/ri'
import {IoMdArrowDropdown} from 'react-icons/io'
import {useStateValue} from '../StateProvider'



function Header() {
    const [{basket}]=useStateValue()
    console.log(basket)
    const [open, setOpen]=useState(false)

    

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
                        <span className='header-option-lineTwo header-basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
            {/* small screen version  */}

            <div className="header-small-nav">
            <button 
                className='header-small-nav-button' 
                onClick={()=>setOpen(!open)}>
                    <span><RiAccountCircleFill/></span>
                    <span><IoMdArrowDropdown/></span>

            </button>
                {open && (
                    <ul className ='small-nav-list'>
                        <li>
                            <Link to='/login' className='header-link'>
                            <span className='header-option-small'>Sign in</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='header-link'>
                            <span className='header-option-small'>Returns</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='header-link'>
                            <span className='header-option-small'>Prime</span>
                            </Link>
                        </li>
                    </ul>
                )}
                <Link to='/checkout' className='header-link'>
                    <div className='header-optionBasket'>
                        <FaShoppingCart/>
                        <span className='header-option-lineTwo header-basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
            
    )
}

export default Header

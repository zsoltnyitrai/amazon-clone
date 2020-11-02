import React from 'react'
import '../styles/Home.css'
import homeimage from '../assets/amazon-image.jpg'
import Product from './Product'

function Home() {
    return (
        <>
        <div className='home-big-screen'>
            <img src={homeimage} className='home-image' alt=''></img>

            <div className="home-row">
                <Product className='product'
                    id={12}
                    title={'Watch'}
                    price={3.3}  
                    rating={5}
                    // image={}  
                />
                <Product className='product'
                    id={12}
                    title={'Watch'}
                    price={3.3}  
                    rating={5}
                    // image={}  
                />
            </div>
            <div className="home-row">
                <Product className='product'
                    id={12}
                    title={'Watch'}
                    price={3.3}  
                    rating={5}
                    // image={}  
                />
                <Product className='product'
                    id={12}
                    title={'Watch'}
                    price={3.3}  
                    rating={5}
                    // image={}  
                />
                <Product className='product'
                    id={12}
                    title={'Watch'}
                    price={3.3}  
                    rating={5}
                    // image={}  
                />
            </div>
            <div className="home-row">
                <Product className='product'
                    id={12}
                    title={'Watch'}
                    price={3.3}  
                    rating={5}
                    // image={}  
                />
            </div>
        </div>

        <div className="home-small-screen">
                <Product className='product'
                    id={12}
                    title={'Watch'}
                    price={3.3}  
                    rating={5}
                    // image={}  
                />
                <Product className='product'
                    id={12}
                    title={'Watch'}
                    price={3.3}  
                    rating={5}
                    // image={}  
                />
                <Product className='product'
                    id={12}
                    title={'Watch'}
                    price={3.3}  
                    rating={5}
                    // image={}  
                />
                <Product className='product'
                    id={12}
                    title={'Watch'}
                    price={3.3}  
                    rating={5}
                    // image={}  
                />
                <Product className='product'
                    id={12}
                    title={'Watch'}
                    price={3.3}  
                    rating={5}
                    // image={}  
                />
        </div>
        </>
    )
}

export default Home

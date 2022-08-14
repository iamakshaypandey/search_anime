import React from 'react'
import {Link} from 'react-router-dom'
import watchlist from '../img/watchlist.webp'


function Navbar() {
    const AnimeSearch = (e)=>{
        const {value} = e.target
    }
    return (
        <>
        <header className='set-position'>
            <div className='nav-col'>
                    <Link to='/'>
                        <div className='Home'>
                            Home
                        </div>
                    </Link>
                <div className='search'>
                    <form className='search-lable' >
                        <label className='lable'>Search Anime</label>
                        <input className='input-1' type="text" onChange={AnimeSearch} placeholder='Search Anime Here ' />
                    </form>
                </div>
                <Link to='/WatchList'>
                    <div className='WatchList'>
                        <img className='img-watchlist' src={watchlist} alt="imgwatchlist" />
                        <span>Watch List</span>
                    </div>
                </Link>
            </div>
        </header>
        </>
    )
}

export default Navbar
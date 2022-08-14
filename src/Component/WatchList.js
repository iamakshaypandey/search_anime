import React, { useEffect,useState } from 'react'

function WatchList() {

    const [WatchlistData,setWatchlistData] = useState([])

    useEffect(()=>{
        const ListData = localStorage.getItem('watchList')
        const changListData = JSON.parse(ListData)
        setWatchlistData(changListData)
    },[])

  return (
    <>
    <div className='container-card'>  
        {
        WatchlistData && WatchlistData.map((post) => {
                    return (
                        <>
                       <div class="container">
                                        <div class="card">
                                            <div class="card__header">
                                                <img src={post.images.jpg.image_url} alt="card__image" class="card__image" width="600" />
                                            </div>
                                            <div class="card__body">
                                                <span class="tag tag-blue">{post.rank}</span>
                                                <h4>Title : <span >{post.title}</span></h4>
                                                <p>Rating : <span >{post.rating}</span></p>
                                            </div>
                                            <div class="card__footer">
                                                <div class="user">
                                                    <button className='remove-btn'>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </>
                    )
        })
        }
    </div>  
    </>
  )
}

export default WatchList
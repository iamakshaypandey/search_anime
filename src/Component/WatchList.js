import React, { useEffect, useState } from 'react'

function WatchList() {

    const [WatchlistData, setWatchlistData] = useState([])

    const getLocalData = ()=>{
        const ListData = localStorage.getItem('watchList')
        if(ListData){
            const changListData = JSON.parse(ListData)
            return changListData
        }
    }

    useEffect(() => { 
        setWatchlistData(getLocalData())
    }, [])

    const RemoveHandler = (i)=>{
       const data = getLocalData()
       data.splice(i,i+1)
       console.log(i,data);
       localStorage.setItem('watchList', JSON.stringify(data))
       window.location.reload()
    }

    

    return (
        <>
            <div className='container-card'>
                {
                    WatchlistData && WatchlistData.map((post,i) => {
                        return (
                            <>
                                <div key={post.mal_id} class="container">
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
                                                <button onClick={()=>RemoveHandler(i)} className='remove-btn'>Remove</button>
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
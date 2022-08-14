import React from 'react'
import { useEffect, useState } from "react"

let page = 1
let allList = []

function Card() {
    const [DataOne, setDataone] = useState([])

    const getMorePost = async () => {
        try {

            const res = await fetch(`https://api.jikan.moe/v4/anime?page=${page}`);
            const newPosts = await res.json();
            const newPosts1 = newPosts.data
            if (!newPosts1) return
            setDataone(post => [...post, ...newPosts1])

        } catch (err) {
            console.error(err);
        }
    };

    const handleScroll = (e) => {
        const TotleHight = e.target.scrollTop + e.target.clientHeight + 30
        if (TotleHight >= e.target.scrollHeight) {
            page += 1;
            getMorePost();
        }
    }

    useEffect(() => {
        getMorePost()
        const elm = document.querySelector('#scrolling')
        elm.addEventListener('scroll', handleScroll)
        // eslint-disable-next-line
    },[])

    const AddHandler = (post) => {
        allList.push(post)
        localStorage.setItem('watchList', JSON.stringify(allList))
    }


    return (
        <>
            <div className='container' id='scrolling' style={{ height: '100vh', overflowY: 'scroll' }}>
                <div className='container-card'>
                    {
                        DataOne && DataOne.map((post) => {
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
                                                    <button className='btn-add' onClick={() => AddHandler(post)}>Add</button>
                                                    <button className='btn-Check' onClick={() => AddHandler(post)}>Check Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Card
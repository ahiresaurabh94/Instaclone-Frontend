import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {FiHeart} from 'react-icons/fi'
import {TbSend} from 'react-icons/tb'
import {ImLocation2} from 'react-icons/im'
import {FaCommentDots} from 'react-icons/fa'
export default function ViewImg() {
    let [state, setState] = useState([])
    state.sort()
    useEffect(() => {
        fetch('https://instaclone-backend-vtos.onrender.com/getPost')
            .then((e) => (e.json()))
            .then((ele) => {
                ele.reverse();
                setState(ele)})
            .catch((err) => console.log(err))
    }, [])
  return (
    
    <div className='main-container'>
            <div className="header">
                <Link to={"/"}>
                    <img className="logo" src="./assetss/cloneImg.png" alt='cloneImg'/>
                    <img className='instaclone-img' src=" https://www.instaclone.app/img/instaclone-logo-dark.png" alt='logo'/>
                </Link>
               
                <Link to={"/posting"}><img className="insta-icon" src="./assetss/cameraImg.png" alt='camera'/></Link>
            </div>
            <div className="main-div">  
                {state.map((e, index) => {
                    return (
                        <div key={index} className="inner-div">
                            <section className="name-tag">{e.name}</section>
                            <section className="location-tag"><ImLocation2/> {e.location}</section>
                            <img className='dot_icon' src='./assetss/dotsImg.png' alt='dots'></img>
                            <img className="main-img" src={e.PostImage} alt='postImg'></img>
                            <aside className="aside-class">
                                <span className="like-img"><FiHeart/></span>
                                <span className="share-img"><TbSend/></span>
                                <span className="commnt-img"><FaCommentDots/></span>
                                <section className="like-class">{e.likes} Likes</section>
                                <span className="date-class">{e.date}</span>
                            </aside>
                            <section className="description">{e.description}</section>
                        </div>

                    )
                })}
            </div>
        </div>
  )
}

import '../styles/videos.css'
import { useState } from "react";
import { useEffect } from 'react';

const Videos = () => {
    let [video,setVideo] = useState([])
    let [shorts,setShorts] = useState([])
    useEffect(()=>{
        let fetchData = async()=>{
            // this method is used to fetch the data individually
            let response = await fetch('http://localhost:2000/videos')
            let response1 = await fetch('http://localhost:2000/shorts')
            let data = await response.json()
            let data1 = await response1.json()
             setVideo(data)
             setShorts(data1)

            //THis method is used to fetch both the videos and shorts (in database.json {"youtube:{video and short}"})
            // let response = await fetch('http://localhost:2000/youtube')
            // let data = await response.json()
            // setVideo(data.videos)
            // setShorts(data.shorts)
        }
        fetchData()
    })
   
    let removeVideo =(id,channel)=>{
        fetch(`http://localhost:2000/videos/${id}`,{
            method:'DELETE'
        })
        alert(`${channel} got deleted`)
        // let res = video.filter((x) => x.id !==id)
        // setVideo(res)
        // alert(`${channel} got deleted`)
    }
    return (  
        <div className="VidSho">
        <div className="videos">
            <h1>Featured videos</h1>
           <div className="videoData">
           {
                video.map((data)=>{
                    return(
                        <div className="video">
                            <img src={data.thumbnail} alt="" />
                           <div className="videoDetails">
                           <h3>{data.title}</h3>
                            <p>{data.channel}</p>
                            <p>{data.views}</p>
                            <a onClick={()=>removeVideo(data.id,data.channel)}>Remove</a>
                           </div>
                        </div>
                    )
                })
  
            }
           </div>
        </div>
        <div className="shorts">
            <h1>Shorts</h1>
            <div className="shortsData">
            {
                shorts.map((data1)=>{
                    return(
                        <div className="short">
                            <img src={data1.thumbnail} alt="" />
                            <div className="shortsDetails">
                            <h3>{data1.title}</h3>
                            <p>{data1.channel}</p>
                            <p>{data1.views}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
        </div>
    );
}
 
export default Videos;
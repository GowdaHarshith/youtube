import '../styles/videos.css'
import { useState } from "react";

const Videos = () => {
    let [video,setVideo] = useState([
        {
            id:"1",
            thumbnail:"	https://i.ytimg.com/vi/MWDuG2yTfJo/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAGPumCJgKzThOEJzayVHF059NmfA",
            title:"Kapilsharma show",
            channel:"Set India",
            views:"1M"
        },
        {
            id:"2",
            thumbnail:"https://i.ytimg.com/vi/PO_rOk8TW8o/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDFHd09LLRghrirJ-iA7yPRT0gaJg",
            title:"Anushka virat puma interview",
            channel:"PUMA",
            views:"2M"
        },
        {
            id:"3",
            thumbnail:"https://i.ytimg.com/vi/hox3Im5AFHk/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAdDvcRCiDojtrms3gDdwYMOdSgIA",
            title:"Ram siya Ram",
            channel:"Mahim Hossian ukit",
            views:"5M"
        },
        {
            id:"4",
            thumbnail:"https://i.ytimg.com/vi/mHKBz81w4yY/hqdefault.jpg",
            title:"inspector vikram ninne ninne song",
            channel:"Rockline films",
            views:"25M"
        },
        {
            id:"5",
            thumbnail:"https://i.ytimg.com/vi/TcauDb-5bkg/hqdefault.jpg",
            title:"Like an echo",
            channel:"Bangtan",
            views:"125M"
        },
        {
            id:"6",
            thumbnail:"https://i.ytimg.com/vi_webp/AvjvZ7q2apE/sddefault.webp",
            title:"Hanuman offical trailer",
            channel:"Prime show Entertainment",
            views:"25M"
        },
        {
            id:"7",
            thumbnail:"https://i.ytimg.com/vi_webp/3I7qf87w9ac/sddefault.webp",
            title:"Celebrity Offical trailer",
            channel:"Netfilx KContent",
            views:"12M"
        },
        {
            id:"8",
            thumbnail:"https://i.ytimg.com/vi/_sfW4HTtDCo/sddefault.jpg",
            title:"Mismatch",
            channel:"Netfix india",
            views:"50M"
        },
        {
            id:"9",
            thumbnail:"https://i.ytimg.com/vi_webp/vjPI6nKjejU/sddefault.webp",
            title:"Kranti | don't mess with him",
            channel:"DbeatsMusicWorld",
            views:"80M"
        },
        {
            id:"10",
            thumbnail:"https://i.ytimg.com/vi/4AsMu0c7RK0/hqdefault.jpg",
            title:"Kotigoba movie",
            channel:"Hombale Movies",
            views:"14M"
        },
        {
            id:"11",
            thumbnail:"https://i.ytimg.com/vi/gH_RYRwVrVM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAtJ3_CW1jOVX1dfCPeix0LKIIVlw",
            title:"Kantara s",
            channel:"Hombale Movies",
            views:"50M"
        },
        {
            id:"12",
            thumbnail:"	https://i.ytimg.com/vi_webp/6ZwwapPikyQ/sddefault.webp",
            title:"Krishna devote",
            channel:"ML Records",
            views:"9M"
        }

    ])
    let [shorts,setShorts] = useState([
        {
            thumbnail :"https://i.ytimg.com/vi/ta3717Xo2Ro/oar2.jpg",
            title :"How to use chopstick",
            channel :"who knows",
            views :"961k"
        },
        {
            thumbnail :"https://i.ytimg.com/vi/KIZl9vmGyRs/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBJcjMZH0TIjw93EQhUxUrv-LdO_g",
            title :"Indians are smart in everywhere",
            channel :"Motivationsfellow",
            views :"8M"
        },
        {
            thumbnail :"https://i.ytimg.com/vi/DwPLDiLZ9tQ/oar2.jpg?sqp=-o…EI9AICiQ3gB&rs=AOn4CLCzh2OZ6Gs4ojvGsSEox8E-BhFBdQ",
            title :"Tera vaaste song new movi trailer",
            channel :"HindiBeats",
            views :"5M"
        },
        {
            thumbnail :"https://i.ytimg.com/vi/JvYOnfLmb1I/hq720.jpg?sqp=-…ICiQ3gB0AEB&rs=AOn4CLBc5KjTl0ZeVGhmUnjix9tAgp5Ddw",
            title :"Indian women who leavs in nowere",
            channel :"DigitalWorld",
            views :"89k"
        },
        {
            thumbnail :"https://i.ytimg.com/vi/iAcqPeecj7c/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLC9iN-o4FkofwG1u3fJBhkN5rVASw",
            title :"Jugun strike step",
            channel :"anupama channel",
            views :"994k"
        },
        {
            thumbnail :"https://i.ytimg.com/vi/d-_iuYuq5n4/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBOYEqyq2Du3WtSOjcGdpPvxFM4UA",
            title :"Home theator projector",
            channel :"Home Decore",
            views :"1.7M"
        }
    ])
    let removeVideo =(id,channel)=>{
        let res = video.filter((x) => x.id !==id)
        setVideo(res)
        alert(`${channel} got deleted`)
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
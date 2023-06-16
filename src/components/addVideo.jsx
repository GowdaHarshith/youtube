import "../styles/addVideo.css"
import { useRef } from "react";
import addvid from "../images/addvid.jpg"
import { useNavigate } from "react-router-dom"; //if you add any video it will give you alert that video uploaded 
//successfully it should automatically go to home page ,we should not click ,so for that you need to import 
//useNavigate ,after doing that were you you need to navigate after alert line navigate('/)(/ is for home page)
const AddVideo = () => {
  let navigate = useNavigate()
  let thumbnail = useRef(null)
  let title = useRef(null)
  let channel = useRef(null)
  let views = useRef(null)

  let upload =(e)=>{
    e.preventDefault() //prevebts from page reloading
    let data = {
      thumbnail:thumbnail.current.value,
      title:title.current.value,
      channel:channel.current.value,
      views:views.current.value
  }
  //fetch has 2 arguments one is url and other is the method data is in json formate  and string
  fetch('http://localhost:2000/videos',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data)
})
alert('video uploaded successfully')
navigate('/')
}
    return ( 
        <div className="AddVideo">
           <div className="forms">
               <div className="image">
                 <img src={addvid} alt="" />
               </div>
               <div className="form">
               <h1>Details of Videos</h1>
                 <form action="" onSubmit={upload}>
                <label htmlFor="">Thumbnail</label><br/>
                <input ref={thumbnail} type="text"/><br/>
                
                <label htmlFor="">Title</label><br/>
                <input ref={title} type="text" /><br/>
                
                <label htmlFor="">Channel</label><br/>
                <input ref={channel} type="text" /><br/>
                
                <label htmlFor="">Views</label> <br/>
                <input ref={views} type="text" /><br/>
                <br />
                <button>submit</button>
              </form>
              </div>
           </div>
        </div>
     );
}
 
export default AddVideo;
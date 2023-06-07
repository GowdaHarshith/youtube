import '../styles/categories.css'
const Categories = () => {
    let categories = [
        {link:"All"},
        {link:"Sports"},
        {link:"Comedy"},
        {link:"News"},
        {link:"Animations"},
        {link:"kids"},
        {link:"Series"},
        {link:"Songs"},
        {link:"Cooking"},
        {link:"Vlog"},
        {link:"Travel"}
    ]
    return ( 
        <div className="categories">
           <ul>
            {
                categories.map((data)=>{
                    return (
                        <li><a href="">{data.link}</a></li>
                    )
                })
            }

           </ul>
        </div>
     );
}
 
export default Categories;
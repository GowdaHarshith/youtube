import Categories from "./categories";
import Banner from "./banner";
import Videos from "./videos";

const home = () => {
    return ( 
        <div className="home">
            <Categories/>
            <Banner/>
            <Videos/>
        </div>
        
     );
}
 
export default home;
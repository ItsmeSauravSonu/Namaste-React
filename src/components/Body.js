import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = ()=>{
    //State Variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                 onClick={()=>{
                        // Filter logic here
                       const  filteredlistOfRestaurants = listOfRestaurants.filter(
                            (res)=>res.data.avgRating>4
                        );
                        setListOfRestaurants(filteredlistOfRestaurants)
                        //console.log(listOfRestaurants)
                    }
                }
                 >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map(
                    restaurant => <RestaurantCard key={restaurant.data.id}  resData={restaurant}/>
                )}
            </div>
        </div>
    )
}

export default Body;
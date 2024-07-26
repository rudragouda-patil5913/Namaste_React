import RestuarantCard from "./RestuarantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restuarantList, setRestuarantList] = useState(resList);
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="search your fav food" />
        <button className="search-btn">Search</button>
        <button
          onClick={() => {
            const filterList = restuarantList.filter((res) => {
              return res.info.avgRating > 4.3;
            });
            setRestuarantList(filterList);
          }}>
          Top Rated Restuarant
        </button>
      </div>
      <div className="res-container">
        {restuarantList.map((res) => {
          return <RestuarantCard resData={res} key={res.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;

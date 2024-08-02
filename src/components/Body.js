import RestuarantCard, { withPromotedRestuarantCard } from "./RestuarantCard";
import { useState, useEffect } from "react";
import ShimmerCard from "./ShimmerCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [restuarantList, setRestuarantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const onlineStatus = useOnlineStatus();

  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestuarantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };



  if (onlineStatus === false) {
    return <h1>Oop's No Internet</h1>;
  }

  if (restuarantList.length === 0) {
    return <ShimmerCard />;
  }
  // console.log(restuarantList);
  const PromotedRestuarant = withPromotedRestuarantCard(RestuarantCard);

  return (
    <div>
      <div className="m-4 my-8">
        <div className="flex justify-between">
          <div>
            <input
              className="hover:border-b-2 border-slate-300 text-xl text-slate-950 m-2 border-0 focus:outline-none"
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <button
              className="w-40 h-10 mx-2 px-6 bg-slate-300 rounded-md hover:bg-slate-500"
              onClick={() => {
                const searchResturant = restuarantList.filter((res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                });
                setFilteredList(searchResturant);
              }}>
              Search
            </button>
          </div>
          <div>
            <button
              className="w-80 h-10 mx-2 px-6 bg-slate-300 rounded-md place-content-end hover:bg-slate-500 "
              onClick={() => {
                const filterList = restuarantList.filter((res) => {
                  return res.info.avgRating > 4.3;
                });
                setFilteredList(filterList);
              }}>
              Top Rated Restuarant
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-row m-4">
        {filteredList.map((res) => {
          return (
            <Link to={"restuarant/" + res.info.id} key={res.info.id}>
              {res.info.aggregatedDiscountInfoV3 ? (
                <PromotedRestuarant resData={res} />
              ) : (
                <RestuarantCard resData={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

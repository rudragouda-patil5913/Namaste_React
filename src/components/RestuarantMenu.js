
import ShimmerCard from "./ShimmerCard";
import { CDN_IMG_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestuarantMenuFetch from "../utils/useRestuarantMenuFetch";

const RestuarantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestuarantMenuFetch(resId);

  const { name, avgRating, cuisines, locality, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info || {};

  return resInfo === null ? (
    <ShimmerCard /> 
  ) : (
    <div className="res-menu">
      <img src={CDN_IMG_URL + cloudinaryImageId} alt="" className="res-img" />
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <ul>
        <li>{locality}</li>
        <li>{avgRating}</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default RestuarantMenu;

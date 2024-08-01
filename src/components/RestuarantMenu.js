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
    <div className="w-2/5 mx-auto p-2 align-center m-16 bg-slate-300 flex">
      <div className="p-2 font-serif text-center text-2xl">
        <img
          src={CDN_IMG_URL + cloudinaryImageId}
          alt=""
          className="w-96 mx-auto pb-4"
        />
      </div>
      <div className="font-serif w-56 text-2xl p-2">
        <h1 className="">{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <ul>
          <li>📍 {locality}</li>
          <li>{avgRating}</li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default RestuarantMenu;

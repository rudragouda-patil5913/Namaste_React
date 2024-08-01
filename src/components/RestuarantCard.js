import { CDN_IMG_URL } from "../utils/constants";

const RestuarantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  return (
    <div className="bg-slate-50 m-4 w-48 h-96 rounded-lg p-2 hover:drop-shadow-2xl">
      <img
        src={CDN_IMG_URL + resData.info.cloudinaryImageId}
        alt="res-img"
        className="w-48 h-36 pb-2"
      />
      <h3>{name}</h3>
      <h4>{cuisines.length < 5 ? cuisines.join(", ") : "Cuisines..."}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>Delivery in {sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestuarantCard;

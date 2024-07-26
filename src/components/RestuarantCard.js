import { CDN_IMG_URL } from "../utils/constants";

const RestuarantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  return (
    <div className="rescard-container">
      <img
        src={CDN_IMG_URL + resData.info.cloudinaryImageId}
        alt="res-img"
        className="res-img"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>Delivery in {sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestuarantCard;

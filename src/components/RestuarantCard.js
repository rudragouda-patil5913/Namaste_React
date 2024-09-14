import { CDN_IMG_URL } from "../utils/constants";

const RestuarantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
  } = resData?.info;

  // const categoryListTypes = resData
  return (
    <div className="bg-slate-50 m-4 w-48 h-96 rounded-lg p-2 hover:drop-shadow-2xl font-bold">
      <img
        src={CDN_IMG_URL + cloudinaryImageId}
        alt="res-img"
        className="w-48 h-36 pb-2"
      />
      <h3 className="font-bold">{name}</h3>
      <h4>{cuisines.length < 5 ? cuisines.join(", ") : "Cuisines..."}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>Delivery in {sla.deliveryTime} mins</h4>
    </div>
  );
};

export const withPromotedRestuarantCard = (RestuarantCard) => {
  return (props) => {
    return (
      <div>
        {props.resData.info.aggregatedDiscountInfoV3.discountTag ? (
          <></>
        ) : (
          <label className="bg-black text-white rounded-lg p-2 mx-4 my-2 absolute">
            {props.resData.info.aggregatedDiscountInfoV3.subHeader}
          </label>
        )}
        <RestuarantCard {...props} />
      </div>
    );
  };
};

export default RestuarantCard;

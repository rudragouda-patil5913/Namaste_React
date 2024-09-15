import { CDN_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

const ItemCard = ({ items }) => {
  const dispatch = useDispatch();

  // const handleClick = () => {
  //   dispatch(addItem("grapes"));
  // };
  const handleClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex flex-col">
      {items.map((item) => {
        return (
          <div
          data-testid="foodItem"
            key={item.card.info.id}
            className="flex flex-row m-2 h-56  border-gray-400 border-b-2">
            <div className="w-3/4 p-4 m-4">
              <div className="font-bold text-lg ">
                <span>{item.card.info.name}</span>
                <span> Rs.{item.card.info.price / 100}</span>
              </div>
              <div className="font-serif text-sm">
                <span>{item.card.info.description}</span>
              </div>
            </div>
            <div className="w-1/4 h-32 pl-4 flex flex-col mx-auto">
              <img
                className="h-32 rounded-md "
                src={CDN_IMG_URL + item.card.info.imageId}
                alt="food-img"
              />
              <button
                className="p-2 border-0 rounded-lg hover:bg-slate-300 shadow-lg"
                onClick={() => handleClick(item)}>
                <span className="font-semibold bg-slate-100 ">Add + </span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCard;

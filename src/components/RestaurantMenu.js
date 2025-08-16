import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      {resInfo.id} <br /> {resInfo.name} : {resInfo.price}{" "}
    </div>
  );
};

export default RestaurantMenu;

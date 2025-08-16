import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  // console.log(JSON.stringify(resData));
  // console.log(JSON.stringify(props));
  const {
    name,
    areaName,
    locality,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
  } = resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="no image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <p>{areaName}</p>
      <span>{locality}</span> <br />
      <span>{cuisines}</span> <br />
      <span>{avgRating}</span> <br />
      <span>{costForTwo}</span>
    </div>
  );
};

export default RestaurentCard;

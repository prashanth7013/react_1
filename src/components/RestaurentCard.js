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
    <div className="font-stretch-50% m-4 p-4 py-4 w-[250px] max-h-min border border-solid hover:transform-3d rounded-2xl bg-gray-50 hover:bg-gray-200">
      <img
        className="rounded-2xl z-0"
        alt="no image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-extrabold">{name}</h3>
      <p>{areaName}</p>
      <span>{locality}</span> <br />
      <span>{cuisines}</span> <br />
      <span>{avgRating}</span> <br />
      <span>{costForTwo}</span>
    </div>
  );
};

// Higher order component

export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div className="relative">
        {/* Promoted badge */}
        <span className="absolute z-10 top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md">
          Promoted
        </span>
        <RestaurentCard {...props} />
      </div>
    );
  };
};
export default RestaurentCard;

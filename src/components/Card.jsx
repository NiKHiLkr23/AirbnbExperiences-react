import star from "/images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="relative flex flex-col p-5">
      {badgeText && (
        <div className="absolute top-6 right-6 px-0.5 bg-white rounded-lg font-bold">
          {badgeText}
        </div>
      )}
      <img
        src={`/images/${props.coverImg}`}
        className="w-full h-full rounded-xl mb-2"
      ></img>
      <div className="flex items-center">
        <img src={star} className="h-3.5"></img>
        <span>{props.stats.rating}</span>
        <span className="text-gray-500">({props.stats.reviewCount}) • </span>
        <span className="text-gray-500">{props.location}</span>
      </div>
      <p className="overflow-hidden text-ellipsis">{props.title}</p>
      <p className="mt-auto">
        <span className="font-bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

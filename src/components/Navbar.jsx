import logo from "/images/airbnb-logo.png";

export default function Navbar() {
  return (
    <div className="p-5 lg:pl-20 shadow-md">
      <img src={logo} className=" max-w-[100px] " />
    </div>
  );
}

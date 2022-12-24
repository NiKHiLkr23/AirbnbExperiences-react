import PhotoGrid from "/images/photo-grid.png";

export default function Hero() {
  return (
    <section className="p-5">
      <div className="container flex flex-col justify-center items-center mx-auto">
        <img src={PhotoGrid} className="lg:max-w-5xl"></img>
        <p className="text-black text-2xl font-bold p-2 lg:text-6xl">
          Online Experiences
        </p>
        <p className="text-black text-md lg:text-2xl leading-5">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

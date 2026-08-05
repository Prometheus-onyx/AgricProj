import { NavLink } from "react-router-dom";
import Nairobi from "../assets/nairobi.png";

const Map = () => {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border shadow-xl">

          <NavLink to="/map">
            <img
              src={Nairobi}
              alt="Nairobi Map"
              className="h-auto w-full object-cover transition hover:scale-105"
            />
          </NavLink>

        </div>
      </div>
    </section>
  );
};

export default Map;
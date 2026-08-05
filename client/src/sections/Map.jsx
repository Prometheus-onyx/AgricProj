import { NavLink } from "react-router-dom";
import Nairobi from "../assets/nairobi.png";

const Map = () => {
  return (
<section className="bg-black py-20">
  <div className="mx-auto max-w-5xl px-6">
    <NavLink to="/map">
      <img
        src={Nairobi}
        alt="Nairobi Map"
        className="mx-auto w-[70%] max-w-lg transition duration-500 hover:scale-105"
      />
    </NavLink>
  </div>
</section>
  );
};

export default Map;
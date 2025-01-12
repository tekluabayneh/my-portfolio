import React from "react";
import AppsIcon from "@mui/icons-material/LocationOn";

const Home = () => {
  return (
    <section>
      <h1 className="xs:text-7xl md:text-8xl font-bold  pt-20 pl-7">
        Full-Stack <span className="text-4xl leading-0">Web</span>
        <br /> Developer
      </h1>
      <p className="text-gray-500 float-right pt-12">
        <span>
          location Ethiopia
          <AppsIcon style={{ fontSize: 48, color: "black" }} />
        </span>
        currently contributing to open source <br /> and building websites that
        are fun to work with.
      </p>
    </section>
  );
};

export default Home;

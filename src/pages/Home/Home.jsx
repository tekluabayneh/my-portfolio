import React from "react";
import AppsIcon from "@mui/icons-material/LocationOn";
import AnimationBall from "../../components/AnimationBall";
import Overview from "../../components/Overview/Overview";
import LetsConnect from "../../components/Let'sConnect/Let'sConnect";
import AnimatedParagraph from "./AnimatedParagraph";
import HeaderTitle from "./headerTitle";
const Home = () => {
  return (
    <main>
      <section className="w-full h-5/6 relative overflow-hidden">
        <HeaderTitle />
        <div className="hidden md:block">
          {/* <AnimationBall /> */}
        </div>
        <div className="text-gray-500 float-right flex  items-center pt-27 px-10 flex-col z-10">
          <span className="pt-12">
            <AppsIcon
              style={{
                fontSize: 48,
                transform: "rotate(-19deg)",
              }}
            />
            Ethiopia
          </span>

          <AnimatedParagraph />
        </div>
      </section>
      <Overview />
      <LetsConnect />
    </main>
  );
};

export default Home;

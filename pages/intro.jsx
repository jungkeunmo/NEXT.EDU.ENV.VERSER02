import React from "react";
import PublicComp3 from "../components/PublicComp3";

const Intro = () => {
  return (
    <div>
      <PublicComp3 />
      <PublicComp3 reverse={true} />
    </div>
  );
};

export default Intro;

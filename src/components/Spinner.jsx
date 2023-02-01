import React from "react";
import { PulseLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex justify-center pt-80">
      <PulseLoader
        color="rgb(255, 186, 0)"
        margin={28}
        size={63}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Spinner;

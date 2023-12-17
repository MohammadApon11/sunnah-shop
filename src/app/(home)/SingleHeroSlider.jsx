import React from "react";
import TextModifier from "react-text-modifier";

const SingleHeroSlider = ({ slider = {} }) => {
  const { bg, title } = slider;
  return (
    <>
      <div
        className="image-layer"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="absolute top-1/2 -tranlate-y-1/2 text-center w-full text-white main-slider__details">
        <TextModifier
          text={title}
          as="h1"
          renderSeparator={() => <div className="mt01 md:mt-4" />}
          className="font-bold text-3xl md:text-4xl lg:text-5xl"
          highlight={["Easy", "Shop"]}
          highlightClassName="text-4xl md:text-5xl lg:text-7xl text-orange-600"
        ></TextModifier>
      </div>
    </>
  );
};

export default SingleHeroSlider;

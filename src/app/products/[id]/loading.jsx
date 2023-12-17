import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SingleProductLoading = () => {
  return (
    <SkeletonTheme baseColor="#2a303c" highlightColor="#5c5c5c">
      <h1>
        <Skeleton height={20} width={200} count={5} />
      </h1>
    </SkeletonTheme>
  );
};

export default SingleProductLoading;

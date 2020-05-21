import React from "react";
import { LoadingInterstitial } from "../styles/Containers.style";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import { JumboHeading } from "../styles/text.style";

const LoadingScreen = () => {
  return (
    <LoadingInterstitial>
      <JumboHeading>LOADING...</JumboHeading>
      <Spinner />
    </LoadingInterstitial>
  );
};

export default LoadingScreen;

import React, { Component } from "react";
import { Location } from "@reach/router";

class OnRouteChangeWorker extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.action();
    }
  }
  render() {
    return null;
  }
}

export const OnRouteChange = ({ action }) => {
  return (
    <Location>
      {({ location }) => (
        <OnRouteChangeWorker location={location} action={action} />
      )}
    </Location>
  );
};

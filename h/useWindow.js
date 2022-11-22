import * as React from "react";

function useWindow() {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  const isDesktop = width >= 768;

  return {
    width,
    height,
    isDesktop,
  };
}

export default useWindow;

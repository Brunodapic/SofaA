import * as React from "react";

export const MyComp = () => {

  React.useEffect(() => {
    // window is accessible here.
    console.log("window.innerWidth", window.innerWidth);
  }, []);

}
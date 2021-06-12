import React from "react";

import { ImageMap } from "@qiuz/react-image-map";

const onMapClick = (area, index) => {
  const tip = `click map${area.href || index + 1}`;
  console.log(tip);
  alert(tip);
};

// in hooks
export default function Example() {
  const mapArea = () => {
    return [
      {
        left: "29%",
        top: "8%",
        height: "8%",
        width: "41%",
        style: {
          background: "rgba(255, 0, 0, 1)",
          border: "0px solid",
          cursor: "pointer",
        },
      },
      {
        left: "1%",
        top: "50%",
        height: "10%",
        width: "10%",
        style: {
          background: "rgba(255, 0, 0, 0)",
          border: "0px solid",
          cursor: "pointer",
        },
      },
    ];
  };

  const img = "https://www.bmosoluciones.com/assets/imgs/elrom/RON1.png";

  const ImageMapComponent = React.useMemo(
    () => (
      <ImageMap
        className="usage-map"
        src={img}
        map={mapArea()}
        onMapClick={onMapClick}
        style={{ width: "1000px", maxWidth: "100%" }}
      />
    ),
    [img]
  );

  return <div>{ImageMapComponent}</div>;
}

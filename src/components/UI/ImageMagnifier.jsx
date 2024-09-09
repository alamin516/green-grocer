import React, { useRef, useState } from "react";

const ImageMagnifier = ({ src, magnifierHeight = 200, magnifierWidth = 200, zoomLevel = 2, classes }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { top, left, width, height } = imgRef.current.getBoundingClientRect();

    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    if (x < 0 || x > width || y < 0 || y > height) {
      setShowMagnifier(false);
      return;
    }

    setShowMagnifier(true);

    setMagnifierPosition({ x: x - magnifierWidth / 2, y: y - magnifierHeight / 2 });
  };

  return (
    <>
      <img
        src={src}
        alt="Product"
        ref={imgRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setShowMagnifier(false)}
        className={`${classes}`}
        style={{ cursor: "crosshair" }} 
      />

      {/* Magnifier Lens */}
      {showMagnifier && (
        <div
          className="absolute pointer-events-none z-10 border border-gray-200 shadow-md bg-white overflow-hidden"
          style={{
            height: `${magnifierHeight}%`,
            width: `${magnifierWidth}%`,
            // top: `${magnifierPosition.y}px`,
            // left: `${magnifierPosition.x}px`,
            top: `${0}px`,
            left: `${0}px`,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${imgRef.current.width * zoomLevel}px ${imgRef.current.height * zoomLevel}px`,
            backgroundPositionX: `${-magnifierPosition.x * zoomLevel}px`,
            backgroundPositionY: `${-magnifierPosition.y * zoomLevel}px`,
          }}
        />
      )}
    </>
  );
};

export default ImageMagnifier;

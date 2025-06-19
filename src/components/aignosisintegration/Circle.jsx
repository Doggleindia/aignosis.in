function Circle({ x, y, radius, imageUrl, onClickHandler }) {
  return (
    <>
      <style>
        {`
          @keyframes blink {
            0%, 100% {
              opacity: 1; /* Fully visible */
            }
            0% {
              opacity: 0.3; /* Partially transparent */
            }
          }
        `}
      </style>
      <img
        src={imageUrl} // Use the URL of the dog image
        onClick={onClickHandler}
        style={{
          position: 'absolute',
          left: x - radius, // Center the image horizontally at x coordinate
          top: y - radius, // Center the image vertically at y coordinate
          width: radius * 2,
          height: radius * 2,
          objectFit: 'contain', // Ensure the image fits nicely
          cursor: 'pointer', // Indicate it's clickable
          animation: 'blink 0.5s infinite', // Apply the blinking animation
        }}
      />
    </>
  );
}

export default Circle;

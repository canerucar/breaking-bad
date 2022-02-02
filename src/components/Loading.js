import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <BallTriangle color="#5e5b52b3" height={90} width={90} />
    </div>
  );
}

export default Loading;

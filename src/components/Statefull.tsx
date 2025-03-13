"use client";

import React, { useState } from "react";

export const Statefull: React.FC = () => {
  const [hasClicked, setHasClicked] = useState(false);

  const onClick = () => setHasClicked(true);

  if (hasClicked) {
    return <p>thanks for clicking me {":)"}</p>;
  }

  return <button onClick={onClick}>OOOO click me</button>;
};

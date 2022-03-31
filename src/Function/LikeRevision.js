import React, { useState } from "react";
import { Button } from "reactstrap";

//복습

const LikeRevision = () => {
  const [relike, setrelike] = useState(0);
  const PlusreLike = () => setrelike(relike + 1);
  const MinusreLike = () => setrelike(relike - 1);

  return (
    <div>
      <Button onClick={PlusreLike}>Like{relike}</Button>
      <Button onClick={MinusreLike}>Hate{-relike}</Button>
    </div>
  );
};
export default LikeRevision;

import React, { useState } from "react";
import { Button } from "reactstrap";

const Like = () => {
  const [like, setlike] = useState(0);
  const incrementLike = () => setlike(like + 1);
  const decrementLike = () => setlike(like - 1);

  return (
    <>
      <Button onClick={incrementLike} color="primary">
        좋아요 {like}개
      </Button>
      <Button onClick={decrementLike} color="danger">
        싫어요 {-like}개
      </Button>
    </>
  );
};

export default Like;

import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const UseEffectLike = () => {
  const likecontent = () => console.log("좋아요 1증가");
  const hatecontent = () => console.log("싫어요 1증가");
  const [likebutton, setlikebutton] = useState(0);
  const pluslike = () => setlikebutton(likebutton + 1);
  const [hate, sethate] = useState(0);
  const hatebutton = () => sethate(hate - 1);
  useEffect(likecontent, [likebutton]);
  useEffect(hatecontent, [hate]);

  return (
    <>
      <Button onClick={pluslike} color="primary">
        좋아요 {likebutton}개
      </Button>
      <Button onClick={hatebutton} color="danger">
        싫어요 {hate}개
      </Button>
    </>
  );
};

export default UseEffectLike;

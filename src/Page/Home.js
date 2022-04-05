import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import InputName from "../Function/InputName";
import UseEffectLike from "../Function/UseEffectLike";
import WiseSayingButton from "../Function/WiseSayingButton";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Home = () => {
  return (
    <>
      {" "}
      <span>
        <UseEffectLike></UseEffectLike>
        <InputName></InputName>
        <WiseSayingButton></WiseSayingButton>
      </span>
      <div>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/270"
            width="100%"
          />
          <CardImgOverlay>
            <CardTitle tag="h5">독서 블로그</CardTitle>
            <CardText>책읽는 멋진 사람들 모여라..</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardImgOverlay>
        </Card>
      </div>
    </>
  );
};

export default Home;

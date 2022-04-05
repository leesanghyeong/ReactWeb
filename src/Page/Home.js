import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import InputName from "../Function/InputName";
import UseEffectLike from "../Function/UseEffectLike";
import WiseSayingButton from "../Function/WiseSayingButton";
import React, { useState, useEffect, useRef } from "react";

//use Click 예제 사용 Hook = useEffect, useRef
// 주요 특징 useEffect는 componentMount 되었을때와 unmount 되었을때 기능을 제거하는 것을 생각해야한다.
const useClick = (onclick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onclick !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    //componentWillunmount일시 즉 마운트가 해제 되었을때는 addEventListnener를 제거 해줘야한다.
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return typeof onClick !== "function" ? element : undefined;
};
function onClick() {
  console.log("클릭");
}

const Home = () => {
  const title = useClick();
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
            <input ref={title} />
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

import { useState } from "react";
import { Button, ButtonGroup, ButtonToolbar } from "reactstrap";

const WiseSayingButton = () => {
  const WiseSaying = [
    {
      tab: "1",
      content:
        "인간사엔 기회라는 것이 있는 법, 기회를 잘 타면 성공에 도달하지만, 놓치면 인생 항로는 여울에 박혀 불행하기 마련이오.",
    },
    {
      tab: "2",
      content:
        "성공은 중요한 생일이 다가왔는데 당신은 전과 똑같다는 사실을 발견하는 것이다.",
    },
    {
      tab: "3",
      content:
        "사람들이 대게 기회를 놓치는 이유는 기회가 작업복 차림의 일꾼 같아 일로 보이기 때문이다.",
    },

    {
      tab: "4",
      content: "위대한 이들은 목적을 갖고, 그 외의 사람들은 소원을 갖는다.",
    },
    {
      tab: "5",
      content:
        "인생에서 실패한 사람 중 다수는 성공을 목전에 두고도 모른 채 포기한 이들이다.",
    },
    {
      tab: "6",
      content:
        "저는 미래가 어떻게 전개될지는 모르지만, 누가 그 미래를 결정하는지는 압니다.",
    },
    {
      tab: "7",
      content: "완벽함이 아니라 탁월함을 위해서 애써라.",
    },
    {
      tab: "8",
      content: "성공은 열심히 노력하며 기다리는 사람에게 찾아온다.",
    },
    {
      tab: "9",
      content: "성공한 사람보다는 가치 있는 사람이 되려하라.",
    },
    {
      tab: "10",
      content: "신중하지 않으면 찾아온 기회를 놓치기 일쑤이다.",
    },
  ];

  const useTabs = (initialTab, allTabs) => {
    //allTabs가 true가 아니거나 배열이 아니라면 유효성 검사
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex,
    };
  };
  const { currentItem, changeItem } = useTabs(1, WiseSaying);

  return (
    <span>
      <ButtonToolbar>
        <ButtonGroup>
          {WiseSaying.map((section, index) => (
            <Button onClick={() => changeItem(index)} active color="primary">
              {section.tab}
            </Button>
          ))}
        </ButtonGroup>
      </ButtonToolbar>
      <div>
        <h1>명언</h1>
      </div>
      {currentItem.content}
    </span>
  );
};

export default WiseSayingButton;

import React from "react";
import "./identity.css";

const Identity = () => {
  return (
    <div>
      <div className="head">
        <h3>안녕하세요!</h3>
        <p> 당신은 어떤 사람인가요?</p>
      </div>
      <table className="type01">
        <tr>
          <th>이름</th>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <th>나이</th>
          <td>
            <input type="number" />
          </td>
        </tr>
        <tr>
          <th>사는 지역</th>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <th>소개</th>
          <td>
            <input type="text" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Identity;

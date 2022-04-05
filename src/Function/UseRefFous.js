import React, { useRef } from "react";

const UseFocus = () => {
  const focus = useRef();
  setInterval(() => focus.current.focus(), 5000);

  return (
    <div>
      <input ref={focus} placeholder="Hi! Focus"></input>
    </div>
  );
};

export default UseFocus;

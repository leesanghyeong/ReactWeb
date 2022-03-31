import React from "react";
import { useState } from "react";

const InputName = () => {
  const InputNameValue = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      let willUpdate = true;
      if (typeof validator === "function") {
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    };

    return { value, onChange };
  };
  const maxLen = (value) => !value.includes("@");
  const name = InputNameValue("Mr.", maxLen);
  return <input placeholder="Name" {...name} />;
};
export default InputName;

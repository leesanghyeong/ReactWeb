import React, { useState } from "react";

const InputNameRevision = () => {
  const useInput = (initialValue, addString) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
      const {
        target: { value },
      } = event;

      setValue(value);
    };

    return { value, onChange };
  };

  const add = "";
  const name = useInput("Mr.", add);
  return <input placeholder="name" {...name} />;
};

export default InputNameRevision;

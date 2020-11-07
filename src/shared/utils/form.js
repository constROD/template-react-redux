import { useState } from "react";

export const useForm = ({ initialValues }) => {
  const [values, setValues] = useState(initialValues);

  const setFieldValue = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleChange = (e) => {
    const { type, name, checked } = e.target;
    const getValue = () => {
      if (type === "checkbox") return checked;
      return e.target.value;
    };

    setValues({ ...values, [name]: getValue() });
  };

  return {
    values,
    setValues,
    setFieldValue,
    handleChange,
  };
};

export const useFieldArray = ({
  fieldName,
  arrayValues,
  defaultValue,
  setFieldValue,
}) => {
  const newList = [...arrayValues];

  const add = () => {
    newList.push(defaultValue);
    setFieldValue(fieldName, newList);
  };

  const remove = (index) => {
    newList.splice(index, 1);
    setFieldValue(fieldName, newList);
  };

  const handleChangeArray = (idx, name, value) => {
    newList[idx] = { ...newList[idx], [name]: value };
    setFieldValue(fieldName, newList);
  };

  return {
    add,
    remove,
    handleChangeArray,
  };
};

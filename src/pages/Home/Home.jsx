import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/elements";
import { setCurrentUser } from "shared/redux/actions/users";
import { styled } from "shared/theme";
import { useFieldArray, useForm } from "shared/utils/form";

const Home = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);

  const defaultValueForArrayField = {
    age: undefined,
    gender: "",
  };

  const initialValues = {
    name: "",
    array: [defaultValueForArrayField],
  };

  const { values, handleChange, setFieldValue } = useForm({
    initialValues,
  });

  const { add, remove, handleChangeArray } = useFieldArray({
    fieldName: "array",
    defaultValue: defaultValueForArrayField,
    arrayValues: values.array,
    setFieldValue,
  });

  return (
    <HomeWrapper>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <Button
        color="secondary"
        onClick={() => setFieldValue("name", "bossROD")}
      >
        Set Value to 'bossROD'
      </Button>
      <Button onClick={() => alert("name: " + JSON.stringify(values))}>
        Click to alert values
      </Button>

      <h1>FieldArray</h1>
      {values.array.map((item, idx) => {
        return (
          <div
            key={idx}
            style={{ display: "flex", flexDirection: "column", width: "400px" }}
          >
            <input
              type="text"
              placeholder="input age"
              value={item.age}
              name="age"
              onChange={(e) =>
                handleChangeArray(idx, e.target.name, e.target.value)
              }
            />
            <input
              type="text"
              placeholder="input gender"
              value={item.gender}
              name="gender"
              onChange={(e) =>
                handleChangeArray(idx, e.target.name, e.target.value)
              }
            />
            <Button onClick={add}>Add more</Button>
            <Button onClick={() => remove(idx)}>Remove</Button>
          </div>
        );
      })}

      <h2>
        Click the button to display my name here: {currentUser?.name ?? ""}
      </h2>
      <Button onClick={() => dispatch(setCurrentUser({ name: "bossROD" }))}>
        Display Current User
      </Button>
      <h1>
        Hello Home! <span>test</span>
      </h1>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  h1 {
    color: ${(props) => props.theme.colors.primary};

    & > span {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/elements/button/Button";
import { setCurrentUser } from "shared/redux/actions/users";
import { styled } from "shared/theme";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const { currentUser } = users;

  console.log("users: ", users);

  return (
    <HomeWrapper>
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

import React from "react";

const UserView = ({ computedMatch }) => {
  return <div> Hello UserView! id: {computedMatch.params.id}</div>;
};

export default UserView;

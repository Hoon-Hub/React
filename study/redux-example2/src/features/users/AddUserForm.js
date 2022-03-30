import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AddUsers } from "./UserSlice";

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [addForm, setAddForm] = useState(false);
  const [name, setName] = useState("");

  const updateAddForm = () => setAddForm(!addForm);

  const onChangeUser = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(AddUsers(name));
    }
    setName("");
  };

  return (
    <>
      <br />
      {addForm ? (
        <div>
          <form onSubmit={onSubmit}>
            <input type="text" value={name} onChange={onChangeUser} />
          </form>
          <StyledButton onClick={updateAddForm}>Cancel</StyledButton>
        </div>
      ) : (
        <StyledButton onClick={updateAddForm}>Create User</StyledButton>
      )}
    </>
  );
};

export default AddUserForm;

const StyledButton = styled.button`
  width: 80%;
  height: 1.5rem;
  padding: auto 0;
`;

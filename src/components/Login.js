import React from "react";
import { Button } from "antd";
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin-top: 15rem;
`;
export default function Login() {
  return (
    <div>
      <StyledButton type="primary">
        Log in{" "}
        <span role="img" aria-label="wave">
          👋
        </span>
      </StyledButton>
    </div>
  );
}

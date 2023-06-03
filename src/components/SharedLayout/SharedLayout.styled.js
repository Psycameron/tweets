import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;

  height: 60px;
  padding: 8px 10px;
  margin-bottom: 16px;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  font-family: "Montserrat";

  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: #373737;
  font-weight: 500;
  &.active {
    background-color: #5cd3a8;
    :hover,
    :focus {
      background-color: #52bd97;
    }
  }
`;

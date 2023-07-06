import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav to={"/"}>
          <GiKnifeFork></GiKnifeFork>
          <Logo>FoodRecipe</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled.div`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;
const Nav = styled(NavLink)`
  text-decoration: none;
  margin-left: 50px;

  display: flex;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
export default App;

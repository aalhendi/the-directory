import {NavBarStyled, Logo, ThemeButton, NavItem} from "../styles.js";
import logoImg from "../logo.png"

const NavBar = (props) => {
    //Do things
    return (
        <NavBarStyled className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Logo className="navbar-brand" to="/">
            <img src={logoImg} alt="logo" width="150px" />
          </Logo>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ThemeButton onClick={props.toggleTheme}>
                {props.currentTheme === "light" ? "Dark" : "Light"} Mode
              </ThemeButton>
            </li>
            <NavItem className="nav-link" to="/movies">
              Movies
            </NavItem>
          </ul>
        </div>
      </div>
        </NavBarStyled>
    )
}

export default NavBar

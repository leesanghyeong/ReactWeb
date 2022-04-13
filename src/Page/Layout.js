import { Outlet, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Button } from "reactstrap";

/*
    상단 헤더 메뉴 공통 레이아웃 컴포넌트 사용
    다른 컴포넌트로 넘어가도 사라지지 않음
*/

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar dark color="">
          <Button color="info" outline>
            <Link to="/">Home</Link>
          </Button>
          <Button color="warning" outline>
            <Link to="/Crud">Crud</Link>
          </Button>
          <Button color="primary" outline>
            <Link to="/Login">Login</Link>
          </Button>
          <Button color="danger" outline>
            <Link to="/Board">Board</Link>
          </Button>
          <Button color="dark" outline>
            <Link to="/Identity">identity</Link>
          </Button>
        </Navbar>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

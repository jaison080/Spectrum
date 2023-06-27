import CompanyReg from "./Components/CompanyReg";
import HeaderBar from "./Components/HeaderBar";
import SideNavBar from "./Components/SideNavBar";
import Report from "./Components/Report";
import Container from "react-bootstrap/esm/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  return (
    <>
      <div>
        <SideNavBar />
        <Container fluid>
            <h2 className="mt-5">Company Approval</h2>
        <CompanyReg/>
        <h2 className="mt-5">Reported Content</h2>
        <Report/>
        </Container>
      </div>
    </>
  );
}

export default Home;

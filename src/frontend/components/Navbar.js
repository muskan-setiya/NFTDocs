import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Navigation = ({ web3Handler, account }) => {
    const navigate = useNavigate();
    const path = window.location.pathname;
    const isStudent = path.startsWith("/student");
    const isTeacher = path.startsWith("/teacher");
    const isVerifier = path.startsWith("/verifier");

    return (
        <Navbar expand="lg" bg="primary" className="nav" fixed='top'>
            <Container>
                <Navbar.Brand>
                    <Link to={"/"}>
                        <img src='https://cdn-icons-png.flaticon.com/128/2480/2480303.png' width="40" height="40" className="" alt="" /></Link>
                    &nbsp; Med3

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                        <Nav.Item></Nav.Item>
                        <Nav.Item></Nav.Item>
                        <Nav.Item></Nav.Item>
                        <Nav.Item></Nav.Item>
                        <Nav.Item></Nav.Item>
                    </Nav>
                    {isStudent ? <Nav className="me-auto">
                        <Nav.Item> <Nav.Link as={Link} to="/student/chat"> Chat</Nav.Link></Nav.Item>

                    </Nav> : <></>}
                    {isTeacher ? <Nav className="me-auto">
                        <Nav.Link as={Link} to="/teacher/my-listed-marksheets" onClick={() => navigate("/teacher/my-listed-marksheets")}>My Listed Marksheets</Nav.Link>
                    </Nav> : <></>}
                    {isVerifier ? <Nav className="me-auto">
                        {/* <Nav.Link as={Link} to="/verifier" onClick={() => navigate("/verifier")}>Home</Nav.Link> */}
                    </Nav> : <></>}
                    <Nav>
                        {account ? (
                            <Nav.Link
                                href={`https://mumbai.polygonscan.com/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button nav-button btn-sm mx-4">
                                <Button variant="outline-light">
                                    {account}
                                </Button>
                            </Nav.Link>
                        ) : (
                            <Button onClick={web3Handler} variant="outline-light">Connect Wallet</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}
export default Navigation;

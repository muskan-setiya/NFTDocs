import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import market from './logo.png';
import { useNavigate } from 'react-router-dom'


const Navigation = ({ web3Handler, account }) => {
    const navigate = useNavigate();
    const path = window.location.pathname;
    const isStudent = path.startsWith("/student");
    const isTeacher = path.startsWith("/teacher");
    const isVerifier = path.startsWith("/verifier");

    return (
        <Navbar expand="lg" bg="secondary" variant="dark" >
            <Container>
                <Navbar.Brand href="http://www.dappuniversity.com/bootcamp">
                    <img src={market} width="40" height="40" className="" alt="" />
                    &nbsp; DApp NFT CollegePlatform
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {isStudent ? <Nav className="me-auto">
                        <Nav.Link as={Link} to="/student/my-purchases" onClick={() => navigate("/student/my-purchases")}>My Purchases</Nav.Link>
                    </Nav> : <></>}
                    {isTeacher ? <Nav className="me-auto">
                        <Nav.Link as={Link} to="/teacher/create" onClick={() => navigate("/teacher/create")}>Create</Nav.Link>
                        <Nav.Link as={Link} to="/teacher/my-listed-records" onClick={() => navigate("/teacher/my-listed-records")}>My Listed Records</Nav.Link>
                    </Nav> : <></>}
                    {isVerifier ? <Nav className="me-auto">
                        <Nav.Link as={Link} to="/verifier" onClick={() => navigate("/verifier")}>Home</Nav.Link>
                    </Nav> : <></>}
                    <Nav>
                        {account ? (
                            <Nav.Link
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button nav-button btn-sm mx-4">
                                <Button variant="outline-light">
                                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
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
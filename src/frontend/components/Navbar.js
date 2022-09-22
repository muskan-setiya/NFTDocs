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
        <Navbar expand="lg" bg="primary" variant="dark" className="nav" fixed='top'>
            <Container>
                <Navbar.Brand>
                    <img src='https://cdn-icons-png.flaticon.com/512/5802/5802493.png' width="40" height="40" className="" alt="" />
                    &nbsp; NFTDocs
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/create">Create</Nav.Link>
                        <Nav.Link as={Link} to="/my-listed-items">My Listed Items</Nav.Link>
                        <Nav.Link as={Link} to="/my-purchases">My Purchases</Nav.Link>
                        <Nav.Link as={Link} to="/department">View Departments</Nav.Link>
                    </Nav>
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

import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Welcome() {
    return(
        <>
        <h1>Welcome</h1>

        <Row>
            <Col><Link to="/signup" className="text-light pt-4 d-block">Sign up!</Link></Col>
        </Row>
    </>
    )
}
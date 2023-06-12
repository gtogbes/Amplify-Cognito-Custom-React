import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function HomePage(props) {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col xs={4} sm={6}>
                    <Image
                        src="/img/logo.png"
                        fluid />
                </Col>
                <Col sm={6}>
                    <h1 className="font-weight-light">Avon Amplify App</h1>
                    <p className="mt-4">
                        Amplify Cognito Fun Story
                        <br /><br />
                        AWS Amplify is a great service and can vastly reduce the 
                        undifferentiated heavy lifting that comes with web development.
                        Amazon Cognito helps you implement customer identity and access management
                        (CIAM) into your web and mobile applications.
                    </p>
                    {
                        props.isAuthenticated === false && (
                            <>
                                <Link
                                    to='/login'>
                                    <Button variant="outline-primary">Login &gt;&gt;</Button>
                                </Link>
                                &nbsp;&nbsp;
                                <Link
                                    to='/register'>
                                    <Button variant="outline-primary">Register &gt;&gt;</Button>
                                </Link>
                            </>
                        )
                    }
                    {
                        props.isAuthenticated !== false && (
                            <Link
                                to='/contacts' state={{ authenticated: props.isAuthenticated }}>
                                <Button variant="outline-primary">View Contacts &gt;&gt;</Button>
                            </Link>
                        )
                    }
                </Col>
            </Row>
        </Container >
    )
}

export default HomePage;
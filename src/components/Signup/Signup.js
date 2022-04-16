import {Card, Container} from 'react-bootstrap'
import {useHistory} from "react-router";

const Signup=()=>{
    const history = useHistory();
    return (
        <>
            <Container className= "w-80">
                <Card>
                    <Card.Body className="p-3">
                        <div className="form">
                            <form onSubmit={() => {history.push('/Blog')}}>
                                <div className="input-container align-items-center justify-content-center">
                                    <label>Username </label>
                                    <input type="text" name="uname" required />
                                </div>
                                <div className="input-container">
                                    <label>Password </label>
                                    <input type="password" name="pass" required />
                                </div>
                                <div className="button-container">
                                    <input type="submit" />
                                </div>
                            </form>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Signup;
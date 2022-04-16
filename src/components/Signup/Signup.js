import {Card, Container} from 'react-bootstrap'
import {useHistory} from "react-router";
const Signup=()=>{
    const history = useHistory();
    return (
        <>
            <Container className= "w-80 p-5">
                <Card>
                    <Card.Body className="p-3">
                        <div className="form w-auto">
                            <form onSubmit={() => {history.push('/Blog')}}>
                                <div className="form-group">
                                    <label>Username </label>
                                    <input type="text" name="uname" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Password </label>
                                    <input type="password" name="pass" className="form-control" required />
                                </div>
                                <div className="form-group pt-3">
                                    <input type="submit"  className="btn btn-primary"/>
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
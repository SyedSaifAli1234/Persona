import {Card, Container} from "reactstrap";

const Signup=()=>{
    return (
        <>
            <Container className= "w-auto float-end">
                <Card>
                    <Card.Header><h2 className="text-center mb-2 mt-2">!</h2></Card.Header>
                    <Card.Body className="p-3">
                        <div className="form">
                            <form>
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
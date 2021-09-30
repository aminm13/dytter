import React, { useContext } from 'react';
import { Context } from './store'
import './App.css';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, CardHeader, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

const Success = () => {

    const [state, setState] = useContext(Context)
    var dob = new Date(state.age);
    var year = dob.getFullYear();
    var now = new Date().getFullYear()
    var age = now - year
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem active>
                    <CardHeader>Success</CardHeader>
                </BreadcrumbItem>
            </Breadcrumb>
            <Card className="text-center" style={{ backgroundColor: '#74BDCB', borderColor: '#658EA9', height: "40vh", marginTop: "5vh", color: "#658EA9" }}>

                <CardBody class="card-body">
                    <CardTitle tag="h2"><a href={"mailto:" + state.email} style={{ color: "#658EA9" }} >{state.fName.toUpperCase()}  {state.lName.toUpperCase()}</a></CardTitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted">Age: {age}</CardSubtitle>
                    <CardText class="card-subtitle mb-2 text-muted"> <a class="card-link" href={state.phone}>Call {state.phone}</a></CardText>
                </CardBody>
            </Card>
        </>
    )
}

export default Success;
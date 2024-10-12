import React from "react";
import {
    Label,
    Form,
    FormGroup
} from "reactstrap";

export default function Login(){
    return (
        <>
        <Form>
        <FormGroup>
            <Label
                for="email"
                hidden
                >
                Email
                </Label>
                <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
            />
        </FormGroup>
        {' '}
        <FormGroup>
            <Label
            for="examplePassword"
            hidden
            >
            Password
            </Label>
            <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            />
        </FormGroup>
        {' '}
        <Button>
            Submit
        </Button>
        </Form>
        </>
    )
}
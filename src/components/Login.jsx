import React, { useState, useEffect } from "react";
import {
    Input,
    Button,
    Label,
    Form,
    FormGroup,
    FormFeedback
} from "reactstrap";

import { useHistory } from "react-router-dom";

const initialValues = {
    email: '',
    password: '',
    terms: false
};

export const errorMessages = {
    email: "Gecerli bir email giriniz",
    password: "En az 8 karakter, en az bir buyuk harf, en az 1 sembol, en az bir rakam icermelidir",
    terms: "Sartlar kabul edilmedilir"
};

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

export default function Login(){

    const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        terms: false
    });

    const history = useHistory();
    
    const [isValid, setIsValid] = useState(false);

    useEffect(()=> {

        if(validateEmail(formData.email) && regex.test(formData.password) && formData.terms){
            
            setIsValid(true);
        }else{
           
            setIsValid(false);
        }

    }, [formData]);

    const handleChange = (event)=> {
        console.log(event.target.value);
        let { name, value, type } = event.target;

        if(type === "checkbox"){
            value = event.target.checked;
        }

       

        setFormData({...formData, [name]: value});

        if(name === "email"){
           
            if(validateEmail(value)){
                
                setErrors({...errors, [name]: false});
            }else{
                console.log(name, value, type);
                setErrors({...errors, [name]: true});
            }
        }

        if(name === "password"){
            if(regex.test(value)){
                setErrors({...errors, [name]: false});
            }else{
                setErrors({...errors, [name]: true});
            }
        }

        if(name === "terms"){
            setErrors({...errors, [name]: !value});
        }
        // Validasyon
    };

    const handleSubmit = (event)=>{
        event.preventDefault();

        if(!isValid) return;

        history.push("/success");
    }
    
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label
                        for="email"
                        hidden
                        >
                        Email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        onChange={handleChange}
                        value={formData.email}
                        invalid={errors.email}
                        data-cy="email-input"
                    />
                    {errors.email && (<FormFeedback data-cy="error-message">
                        {errorMessages.email}
                    </FormFeedback>)
                    }
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label
                    for="password"
                    hidden
                    >
                    Password
                    </Label>
                    <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={handleChange}
                    value={formData.password}
                    invalid={errors.password}
                    data-cy="password-input"
                    />
                    {errors.password && (<FormFeedback data-cy="error-message">
                        {errorMessages.password}
                    </FormFeedback>)
                    }
                </FormGroup>
                {' '}
                <FormGroup check>
                    <Input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        checked={formData.terms}
                        onChange={handleChange}
                        invalid={errors.terms}
                        data-cy="terms-checkbox"
                    />
                    {errors.terms && (<FormFeedback data-cy="error-message">
                        {errorMessages.terms}
                    </FormFeedback>)
                    }
                    <Label
                        check
                        for="terms"
                    >
                        Sartlari kabul et
                    </Label>
                </FormGroup>
                <Button disabled={!isValid} data-cy="submit-button">
                    Login
                </Button>
            </Form>
        </>
    )
}
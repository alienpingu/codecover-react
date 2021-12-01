import React from 'react';

import {  
        Form,
        Button,
        InputGroup,
        FormControl
      } from 'react-bootstrap';


export default function NewsLetterForm(props) {

        return(
                <Form action={'POST'} >
                     <Form.Group className="rounded-pill"> 
                        <InputGroup className="mb-2">
                                <FormControl id="inlineNewLetter" type="email" placeholder="example@gmail.com"/>
                                <InputGroup.Text id="ns-text"><Button variant="outline" type="submit">Iscriviti</Button></InputGroup.Text>
                        </InputGroup>

                        </Form.Group> 
                        
                </Form>
        )
}
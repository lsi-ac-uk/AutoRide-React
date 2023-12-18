import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchHeadBar(props){
    return (
        <div className='row g-3 my-2'>
        <div className='col-5'>

        <InputGroup className="mb-3">
        
            <InputGroup.Text>{props.firstInput}</InputGroup.Text>
            <Form.Control aria-label="Amount (to the nearest dollar)" />
            
        </InputGroup>
        </div>
        <div className='col-5'>

        <InputGroup className="mb-3">
        <InputGroup.Text>{props.secondInput}</InputGroup.Text>
            <Form.Control aria-label="Amount (to the nearest dollar)" />
        
        </InputGroup>
        </div>

    </div>

    );
}

export default SearchHeadBar;
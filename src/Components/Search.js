import React, { useContext} from 'react'
import { Button, InputGroup,Form, Container } from 'react-bootstrap';
import { AppContext } from '../Context/AppContext';

const Search = () => {
    const {keyword,setKeyword,searchCourse, clearSearchBox} = useContext(AppContext);
    const handleSubmit = (e) => {
        e.preventDefault();
     
        searchCourse(keyword);
        clearSearchBox();

    }


  return (
    <>
    <Container >
        <div>
                  <Form onSubmit={handleSubmit}>
                  <InputGroup className="mb-3 mx-auto ">
                      <Form.Control
                        value={keyword} onChange={(e) => { setKeyword(e.target.value) }}
                          placeholder="Please enter the course name "
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                      />
                      <Button variant="secondary" type='submit' id="button-addon2">
                          Search
                      </Button>
                  </InputGroup>
                  </Form>
        </div>
           
    </Container>
          
    </>
  )
}

export default Search
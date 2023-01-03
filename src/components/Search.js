import "../App.css"

import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
function Search() {
  return (
    <>
      <div className="d-flex">
        <Form.Select className="mx">
          <option>L select</option>
          <option>D select</option>
          <option>S select</option>
          <option>M select</option>
        </Form.Select>
        <Form.Select className="mx">
          <option>L select</option>
          <option>D select</option>
          <option>S select</option>
          <option>M select</option>
        </Form.Select>
        <Form.Select className="mx">
          <option>L select</option>
          <option>D select</option>
          <option>S select</option>
          <option>M select</option>
        </Form.Select>
        <Form.Select className="mx">
          <option>L select</option>
          <option>D select</option>
          <option>S select</option>
          <option>M select</option>
        </Form.Select>
        <Button className="mx" variant="primary" type="submit">
        Search
      </Button>
      </div>
    </>
  );
}

export default Search;

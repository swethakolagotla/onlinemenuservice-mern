import React, { useState ,useEffect} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import "../styles/AddMenu.css"
import axios from "axios";
import { useNavigate ,useParams} from "react-router-dom";
import { Link } from "react-router-dom";
function AddMenu(props) {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [isAdmin]=useState(false)
  const[editmode,setEditmode]=useState(false)
  const [state, setState] = useState({
    name: "",
    price:"",
    dsc: "",
    img:""
  });
  const Navigate=useNavigate()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const { id } = useParams();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    //console.log(event.currentTarget)
    if (form.checkValidity() === true) {
      event.preventDefault();
    }
 axios
   .post("http://localhost:4000/menus", state)
   .then((res) => {
     console.log(res.data);
     setState(res.data)
   })
   .catch((err) => {
     console.log(err);
   }); 
  Navigate("/")
  };
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  }; 
    
   
  return (
    <div className="menu">
      <Button className={"btn"} variant="primary" onClick={handleShow}>
        AddMenu
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "'Bree Serif', serif" }}>
            Add Menu Item
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{ fontFamily: "'Bree Serif', serif" }}
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Row className="mb-2">
              <Form.Group controlId="validationCustomUsername">
                <Form.Label>
                  <h4>Item Name</h4>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleChange}
                  value={state.name}
                  name="name"
                  required
                >
                  <option placeholder="select one"></option>
                  <option>Sambar</option>
                  <option>Chicken soup</option>
                  <option>Mutton koorma</option>
                  <option>Paneer tikka</option>
                  <option>Bendi fry</option>
                  <option> Fish fry</option>
                  <option>Chicken 65 Manchurian</option>
                  <option> Dosa</option>
                  <option> Pav Bhaji</option>
                  <option> Pani Puri</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-2">
              <Form.Group controlId="validationCustomUsername">
                <Form.Label>
                  <h4>Item Category</h4>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleChange}
                  name="dsc"
                  value={state.dsc}
                  required
                >
                  <option placeholder="select one"></option>
                  <option>lunchMeal</option>
                  <option>Soups</option>
                  <option> Non-veg curry</option>
                  <option> Curry</option>
                  <option>Starters&snacks</option>
                  <option> BreakFast</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Label>
                <h4>Price(USD)</h4>
              </Form.Label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                name="price"
                placeholder="$0"
                value={state.price}
                required
              />
            </Row>
            <Row className="mb-3">
              <Form.Label>
                <h4>Image(URL)</h4>
              </Form.Label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                name="img"
                placeholder=""
                value={state.img}
                required
              />
            </Row>

            <button type="submit">Add</button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddMenu;

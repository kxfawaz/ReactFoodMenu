import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import SnackOrBoozeApi from "./Api";
import "./AddItemForm.css"

function AddItemForm({ type }) {
  // type should be either "snacks" or "drinks"
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    recipe: "",
    serve: ""
  });

  function handleChange(evt) {
    setFormData(f => ({ ...f, [evt.target.name]: evt.target.value }));
  }

  async function handleSubmit(){
    const {id,name,description,recipe,serve} = formData
    if(type === "snack"){
    await SnackOrBoozeApi.createSnack(formData)
    }

    if(type === "drink"){
     await SnackOrBoozeApi.createDrink(formData)
    }
  }


  return (
    <Form onSubmit={handleSubmit} className="my-4">
      <h4>Add a new {type} </h4>

      <FormGroup>
        <Label for="id">ID</Label>
        <Input
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="textarea"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="recipe">Recipe</Label>
        <Input
          type="textarea"
          id="recipe"
          name="recipe"
          value={formData.recipe}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="serve">Serve</Label>
        <Input
          type="textarea"
          id="serve"
          name="serve"
          value={formData.serve}
          onChange={handleChange}
        />
      </FormGroup>

      <Button color="primary">Add {type}</Button>
    </Form>
  );
}

export default AddItemForm;
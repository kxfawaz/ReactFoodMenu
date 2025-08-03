import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";


function FoodItem({ items, cantFind }) {
  const { id } = useParams();

  let item = items.find(i => i.id === id);
  if (!item) return <Navigate to={cantFind} />;
 

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}

          </CardTitle>
          <CardText className="font-italic text-center">{item.description}</CardText>
          <p className="font-italic text-center">
            <b>Recipe:</b>{item.recipe}
          </p>
          <p className="font-italic text-center">
            <b>Serve:</b>{item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;

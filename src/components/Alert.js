import React, { useContext } from "react";
import { Toast } from "react-bootstrap";
import { PlacesContext } from "../context/PlacesContext";

const Alert = () => {
  const { state, dispatch } = useContext(PlacesContext);
  const { alert } = state;
  return (
    <div className="alert position-absolute p-3">
      <Toast
        onClose={() => dispatch({ type: "SHOW_ALERT" })}
        show={alert.show}
        delay={3000}
        autohide
        className="bg-warning"
      >
        <Toast.Header>
          <strong className="mr-auto">Wrong input</strong>
        </Toast.Header>
        <Toast.Body>{alert.message}</Toast.Body>
      </Toast>
    </div>
  );
};

export default Alert;

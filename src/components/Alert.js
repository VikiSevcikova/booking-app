import React, { useContext } from "react";
import { Toast } from "react-bootstrap";
import { PlacesContext } from "../context/PlacesContext";

const Alert = () => {
  const { placesState, placesDispatch } = useContext(PlacesContext);
  const { alert } = placesState;
  return (
    <div className="alert position-fixed p-3">
      <Toast
        onClose={() => placesDispatch({ type: "SHOW_ALERT" })}
        show={alert.show}
        delay={3000}
        autohide
        className={`bg-${alert.variant}`}
      >
        <Toast.Header>
          <strong className="mr-auto">{alert.title}</strong>
        </Toast.Header>
        <Toast.Body>{alert.message}</Toast.Body>
      </Toast>
    </div>
  );
};

export default Alert;

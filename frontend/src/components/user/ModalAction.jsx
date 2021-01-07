import React from "react";
import { Modal, Button } from "react-bootstrap";

export const ModalAction = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.subtitle}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancelar
          </Button>
          <Button
            variant={props.variant}
            onClick={() => {
              props.func(props.param);
              props.handleClose();
            }}
          >
            {props.action}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

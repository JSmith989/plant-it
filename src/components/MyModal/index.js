import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

const MyModal = (props) => {
  const { buttonLabel, className, title } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <div className="p-3">
      <Button color='warning' onClick={toggle}>
        {buttonLabel}
      </Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          {props.children}
        </ModalBody>
        <ModalFooter>
          <Button color='warning' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MyModal;

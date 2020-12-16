import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
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
        <ModalHeader className="myModalHeader" toggle={toggle}>{title}</ModalHeader>
        <ModalBody className="myModal">
          {props.children}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default MyModal;

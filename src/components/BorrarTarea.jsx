import React from "react";
import { useDispatch } from "react-redux";
import { accionBorrarTarea } from "../redux/actions";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { FiTrash2 } from "react-icons/fi";

const BorrarTarea = ({ tarea }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  function controlBorrarTarea(id) {
    dispatch(accionBorrarTarea(id));
  }

  return (
    <>
      <IconButton icon={<FiTrash2 />} isRound="true" onClick={onOpen} />

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader>Realmente quieres borrar la tarea?</ModalHeader>
          <ModalBody>
            <Text>{tarea.body}</Text>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              No
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => controlBorrarTarea(tarea.id, onClose)}
            >
              Si
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BorrarTarea;

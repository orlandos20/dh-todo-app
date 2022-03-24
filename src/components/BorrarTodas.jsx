import React from "react";
import { useDispatch } from "react-redux";
import { accionBorrarTodas } from "../redux/actions";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const BorrarTodasTareas = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  function controlBorrarTodas() {
    dispatch(accionBorrarTodas());
  }

  return (
    <>
      <Button
        colorScheme="gray"
        px="8"
        h="45"
        color="gray.500"
        mt="8"
        onClick={onOpen}
      >
        Excluir Todos
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader>
            Realmente quieres eliminar todas las tareas?
          </ModalHeader>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="blue" onClick={() => controlBorrarTodas()}>
              Si
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BorrarTodasTareas;

import React from "react";
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

function BorrarTodasTareas({ controlBorrarTodas }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
}

function BorrarTarea({ tarea, controlBorrarTarea }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
}

export { BorrarTarea, BorrarTodasTareas };

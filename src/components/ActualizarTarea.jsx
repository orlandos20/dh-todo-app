import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import { FiEdit } from "react-icons/fi";

function ActualizarTarea({ tarea, controlActualizarTarea }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [body, setBody] = useState("");

  const refInicial = React.useRef();

  return (
    <>
      <IconButton icon={<FiEdit />} isRound="true" onClick={onOpen} />
      <Modal
        isCentered
        initialFocusRef={refInicial}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader>Atualize sua tarefa </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                ref={refInicial}
                placeholder="Escriba su tarea"
                defaultValue={tarea.body}
                onChange={(e) => setBody(e.target.value)}
                onFocus={(e) => setBody(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => controlActualizarTarea(tarea.id, body, onClose)}
            >
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ActualizarTarea;

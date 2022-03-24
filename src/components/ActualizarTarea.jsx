import React from "react";
import { useDispatch } from "react-redux";
import { accionActualizarTarea } from "../redux/actions";
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
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

function ActualizarTarea({ tarea }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [textoNuevo, modificarTexto] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();

  const refInicial = React.useRef();

  function controlActualizarTarea(id, nuevoTextoTarea, onClose) {
    const info = textoNuevo.trim();

    if (!info) {
      toast({
        title: "Escriba su tarea",
        position: "top",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });

      return;
    }

    dispatch(accionActualizarTarea(id, nuevoTextoTarea));

    onClose();
  }

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
          <ModalHeader>Actualice su tarea </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                ref={refInicial}
                placeholder="Escriba su tarea"
                defaultValue={tarea.tareaTexto}
                onChange={(e) => modificarTexto(e.target.value)}
                onFocus={(e) => modificarTexto(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              colorScheme="blue"
              onClick={() =>
                controlActualizarTarea(tarea.id, textoNuevo, onClose)
              }
            >
              Actualizar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ActualizarTarea;

import { useState } from "react";
import { Button, HStack, Input, useToast } from "@chakra-ui/react";

let contadorTareas = 0;

function AgregarTarea({ controlAgregarTarea }) {
  const toast = useToast();
  const [contenido, agregarContenido] = useState("");
  const [estadoCampo, agregarEstadoCampo] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    const textoTarea = contenido.trim();

    if (!textoTarea) {
      toast({
        title: "Escriba su tarea",
        position: "top",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      agregarEstadoCampo(false);

      return agregarContenido("");
    }

    const tarea = {
      id: contadorTareas++,
      tareaTexto: textoTarea,
      check: false,
    };

    controlAgregarTarea(tarea);
    agregarContenido("");
  }

  if (contenido && !estadoCampo) {
    agregarEstadoCampo(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="4" mb="4">
        <Input
          h="46"
          borderColor={!estadoCampo ? "red.300" : "transparent"}
          variant="filled"
          placeholder="Escriba su tarea"
          value={contenido}
          onChange={(e) => agregarContenido(e.target.value)}
        />
        <Button colorScheme="blue" px="8" pl="10" pr="10" h="46" type="submit">
          Agregar
        </Button>
      </HStack>
    </form>
  );
}

export default AgregarTarea;

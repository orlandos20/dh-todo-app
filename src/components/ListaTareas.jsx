import React from "react";
import ActualizarTarea from "./ActualizarTarea";
import { BorrarTarea, BorrarTodasTareas } from "./BorrarTarea";
import {
  HStack,
  Box,
  VStack,
  Flex,
  Text,
  StackDivider,
} from "@chakra-ui/react";

function ListaTareas({
  tareas,
  controlActualizarTarea,
  controlBorrarTarea,
  controlBorrarTodas,
}) {
  if (!tareas.length) {
    return (
      <>
        <Box maxW="80%">
          <Text mt={{ base: "26", sm: "10" }}>Su lista está vacia :(</Text>
        </Box>
      </>
    );
  }

  return (
    <>
      <VStack
        divider={<StackDivider />}
        borderColor="gray.100"
        borderWidth="2px"
        p="5"
        borderRadius="lg"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
        alignItems="stretch"
      >
        {tareas.map((tarea) => (
          <HStack key={tarea.id} opacity={tarea.check ? "0.2" : "1"}>
            <Text
              w="100%"
              p="8px"
              borderRadius="lg"
              as={tarea.check ? "s" : ""}
              cursor="pointer"
            >
              {tarea.tareaTexto}
            </Text>
            <BorrarTarea
              tarea={tarea}
              controlBorrarTarea={controlBorrarTarea}
              controlBorrarTodas={controlBorrarTodas}
            />
            <ActualizarTarea
              tarea={tarea}
              controlActualizarTarea={controlActualizarTarea}
            />
          </HStack>
        ))}
      </VStack>

      <Flex>
        <BorrarTodasTareas controlBorrarTodas={controlBorrarTodas} />
      </Flex>
    </>
  );
}

export default ListaTareas;

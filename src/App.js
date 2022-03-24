import { useState } from "react";
import {
  Heading,
  IconButton,
  VStack,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import ListaTareas from "./components/ListaTareas.jsx";
import AgregarTarea from "./components/AgregarTarea";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const toast = useToast();
  const [tareas, agregarTareas] = useState([]);

  function controlBorrarTarea(id) {
    const tareasFiltradas = tareas.filter((tarea) => {
      return tarea.id !== id;
    });
    agregarTareas(tareasFiltradas);
  }

  function controlBorrarTodas() {
    agregarTareas([]);
  }

  function controlActualizarTarea(id, nuevoTextoTarea, onClose) {
    const info = nuevoTextoTarea.trim();

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

    const tareaActualizada = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.tareaTexto = nuevoTextoTarea;
        tarea.check = false;
      }
      return tarea;
    });

    agregarTareas(tareaActualizada);

    onClose();
  }

  function controlAgregarTarea(task) {
    agregarTareas([...tareas, task]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4} minH="100vh" pb={28}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="md"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />

      <Heading
        p="5"
        fontWeight="extrabold"
        size="xl"
        bgGradient="linear(to-l, teal.300, blue.500)"
        bgClip="text"
      >
        Lista de tareas
      </Heading>

      <AgregarTarea controlAgregarTarea={controlAgregarTarea} />
      <ListaTareas
        tareas={tareas}
        controlActualizarTarea={controlActualizarTarea}
        controlBorrarTarea={controlBorrarTarea}
        controlBorrarTodas={controlBorrarTodas}
      />
    </VStack>
  );
}

export default App;

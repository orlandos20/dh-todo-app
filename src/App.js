import { useSelector } from "react-redux";
import { Heading, IconButton, VStack, useColorMode } from "@chakra-ui/react";
import ListaTareas from "./components/ListaTareas.jsx";
import AgregarTarea from "./components/AgregarTarea";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const tareas = useSelector((state) => state.estadoTareas.tareas);

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

      <AgregarTarea />
      <ListaTareas tareas={tareas} />
    </VStack>
  );
}

export default App;

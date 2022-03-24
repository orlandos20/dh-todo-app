let numeroTodo = 0;
export const accionAgregarTarea = (tarea) => {
  return {
    type: "AGREGAR_TAREA",
    tarea: {
      id: numeroTodo++,
      ...tarea,
    },
  };
};

export const accionActualizarTarea = (id, texto) => {
  return {
    type: "ACTUALIZAR_TAREA",
    tarea: {
      id: id,
      tareaTexto: texto,
    },
  };
};

export const accionBorrarTarea = (id) => {
  return {
    type: "BORRAR_TAREA",
    id: id,
  };
};

export const accionBorrarTodas = () => {
  return {
    type: "BORRAR_TODAS",
  };
};

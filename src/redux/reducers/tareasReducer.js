const estadoInicial = {
  tareas: [],
};

export const estadoTareas = (state = estadoInicial, action) => {
  switch (action.type) {
    case "AGREGAR_TAREA":
      return {
        ...state,
        tareas: state.tareas.concat(action.tarea),
      };

    case "ACTUALIZAR_TAREA":
      const tareaActualizada = state.tareas.map((tarea) => {
        if (tarea.id === action.tarea.id) {
          tarea.tareaTexto = action.tarea.tareaTexto;
          tarea.check = false;
        }
        return tarea;
      });
      return {
        ...state,
        tareas: tareaActualizada,
      };

    case "BORRAR_TAREA":
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.id),
      };

    case "BORRAR_TODAS":
      return estadoInicial;

    default:
      return state;
  }
};

const { createApp, ref } = Vue;

const App = createApp({
  setup() {
    const tareas = ref([]); // Arreglo vacío al inicio
    const nuevaTarea = ref("");
    const msg = ref("");
    const msgTipo = ref("");

    const agregarTarea = () => {
      if (nuevaTarea.value.trim()) {
        tareas.value.push({
          tarea: nuevaTarea.value,
        });
        nuevaTarea.value = "";
        msg.value = "Tarea agregada correctamente";
        msgTipo.value = "alert alert-success";
      } else {
        msg.value = "Ingrese una tarea";
        msgTipo.value = "alert alert-danger";
      }
    };

    const eliminarTarea = (index) => {
      tareas.value.splice(index, 1);
      msg.value = "Tarea eliminada correctamente";
      msgTipo.value = "alert alert-success";
    };

    return {
      tareas,
      nuevaTarea,
      agregarTarea,
      eliminarTarea,
      msg,
      msgTipo,
    };
  },
});

App.mount("#myapp");

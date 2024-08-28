const { createApp, ref } = Vue;

const MostrarOcultarApp = createApp({
  setup() {
    const mostrar = ref(false);
    const mensaje = ref("¡Hola, este es un mensaje secreto!");

    const toggleMensaje = () => {
      mostrar.value = !mostrar.value;
    };

    return {
      mostrar,
      mensaje,
      toggleMensaje,
    };
  },
});

MostrarOcultarApp.mount("#mostrar-ocultar-app");

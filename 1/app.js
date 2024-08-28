const { createApp, ref } = Vue;

const App = createApp({
  setup() {
    const mensaje = ref("");
    const bienvenida = ref("");

    const mostrarBienvenida = () => {
      if (mensaje.value.trim()) {
        bienvenida.value = `Bienvenido, ${mensaje.value}!`;
      } else {
        bienvenida.value = "Bienvenido!";
      }
    };

    return {
      mensaje,
      bienvenida,
      mostrarBienvenida,
    };
  },
});

App.mount("#myapp");

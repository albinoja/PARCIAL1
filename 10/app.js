const { createApp, ref, watch } = Vue;

const App = createApp({
  setup() {
    const inputValue = ref("");
    const mensaje = ref("");
    const msgTipo = ref("");

    watch(inputValue, (newValue) => {
      if (newValue) {
        mensaje.value = `El valor ha cambiado a: ${newValue}`;
        msgTipo.value = "alert alert-info";
      } else {
        mensaje.value = "";
      }
    });

    return {
      inputValue,
      mensaje,
      msgTipo,
    };
  },
});

App.mount("#myapp");

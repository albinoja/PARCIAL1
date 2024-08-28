const { createApp, ref } = Vue;

const InputAlertaApp = createApp({
  setup() {
    const inputValue = ref("");

    const mostrarAlerta = () => {
      alert(inputValue.value);
    };

    return {
      inputValue,
      mostrarAlerta,
    };
  },
});

InputAlertaApp.mount("#input-alerta-app");

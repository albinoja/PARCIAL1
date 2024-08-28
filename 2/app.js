const { createApp, reactive } = Vue;

const ContadorApp = createApp({
  setup() {
    const state = reactive({
      contador: 0,
    });

    const incrementarContador = () => {
      state.contador += 1;
    };

    return {
      state,
      incrementarContador,
    };
  },
});

ContadorApp.mount("#contador-app");

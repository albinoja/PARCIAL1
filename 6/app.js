const { createApp, ref } = Vue;

const App = createApp({
  setup() {
    const numero1 = ref(0);
    const numero2 = ref(0);
    const resultado = ref(null);
    const error = ref("");

    const realizarOperacion = (operacion) => {
      error.value = ""; // Resetear error
      try {
        switch (operacion) {
          case "suma":
            resultado.value = numero1.value + numero2.value;
            break;
          case "resta":
            resultado.value = numero1.value - numero2.value;
            break;
          case "multiplicacion":
            resultado.value = numero1.value * numero2.value;
            break;
          case "division":
            if (numero2.value === 0) {
              throw new Error("No se puede dividir por cero.");
            }
            resultado.value = numero1.value / numero2.value;
            break;
          default:
            throw new Error("Operación no válida.");
        }
      } catch (e) {
        error.value = e.message;
        resultado.value = null;
      }
    };

    return {
      numero1,
      numero2,
      resultado,
      error,
      realizarOperacion,
    };
  },
});

App.mount("#app");

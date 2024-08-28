const { createApp, ref, computed } = Vue;

const App = createApp({
  setup() {
    const nombre = ref("");
    const apellido = ref("");

    const nombreCompleto = computed(() => {
      return `${nombre.value} ${apellido.value}`;
    });

    return {
      nombre,
      apellido,
      nombreCompleto,
    };
  },
});

App.mount("#myapp");

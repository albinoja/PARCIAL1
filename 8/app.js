const { createApp, ref, onMounted } = Vue;

const App = createApp({
  setup() {
    const mensaje = ref("");
    const msgTipo = ref("");

    const obtenerMensajeDelDia = () => {
      const hora = new Date().getHours();

      if (hora >= 5 && hora < 12) {
        mensaje.value = "¡Buenos días!";
        msgTipo.value = "alert alert-primary"; 
      } else if (hora >= 12 && hora < 18) {
        mensaje.value = "¡Buenas tardes!";
        msgTipo.value = "alert alert-secondary"; 
      } else {
        mensaje.value = "¡Buenas noches!";
        msgTipo.value = "alert alert-dark"; 
      }
    };

    onMounted(() => {
      obtenerMensajeDelDia();
    });

    return {
      mensaje,
      msgTipo,
    };
  },
});

App.mount("#myapp");

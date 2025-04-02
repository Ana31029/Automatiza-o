
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: true, // Captura screenshots em falhas automaticamente
    video: false // (Opcional) Desativar gravação de vídeo para economizar espaço
  },
});






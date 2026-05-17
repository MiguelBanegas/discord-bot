require('dotenv').config();
const { REST, Routes } = require('discord.js');

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('🧹 Borrando comandos globales...');
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: [] } // ✅ esto borra todos los comandos globales
    );
    console.log('Comandos globales eliminados.');
  } catch (error) {
    console.error(error);
  }
})();

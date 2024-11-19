import express from 'express';
import {connectDB} from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
connectDB();

app.set('views', './views/paginas'); // Define el directorio raíz de las vistas
app.set('view engine', 'ejs'); // Usa EJS como motor de vistas
// Middleware para parsear los datos de los formularios
app.use(express.urlencoded({ extended: true }));  // Para formularios con método POST


app.use('/api', superHeroRoutes);


app.use((req, res) => {
    res.status(404).send({mensaje: "Ruta no encontrada"});
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
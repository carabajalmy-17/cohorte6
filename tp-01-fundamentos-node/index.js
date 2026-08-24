const fs = require ("node:fs");
const path = require("node:path");

const nombre = process.argv[2] || "Estudiante";

//datos de Runtime
console.log("nombre del estudiante: ", nombre);
console.log("Version de Node.js: ", process.version);
console.log("Plataforma: ", process.platform);

//datos del videojuego
const videoJuego = {
    titulo: "Starsand Island",
    estudio: "Seed Sparkle Lab",
    anio: "2026",
    multijugador: true,
    plataformas: ["Xbox","PlayStation5", "Pc(Window)"],
};

//conversiones
const plataformasTexto = videoJuego.plataformas.join(", ");
const multijugadores = videoJuego.multijugador ? "si" : "no";

//creacion de la ficha
const ficha = `FICHA DEL VIDEOJUEGO
=================
Titulo: ${videoJuego.titulo}
Estudio: ${videoJuego.estudio}
Anio: ${videoJuego.anio}
Plataformas: ${plataformasTexto}
Multijugador?: ${multijugadores}
`;

//creacion del archivo
const carpetaSalida = path.join(_dirname,"salida");
const rutaArchivo = path.join(carpetaSalida, "ficha-Videojuego.txt");

fs.mkdirSync(carpetaSalida, {recursive: true});
fs.writeFileSync(rutaArchivo, ficha, "utf8");

console.log(ficha);
console.log(`Archivo generado en: ${rutaArchivo}`);
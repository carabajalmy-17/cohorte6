const nombre = process.argv[2] || "Estudiante";

console.log("nombre del estudiante: ", nombre);
console.log("Version de Node.js: ", process.version);
console.log("Plataforma: ", process.platform);


const videoJuego = {
    titulo: "Starsand Island",
    estudio: "Seed Sparkle Lab",
    anio: "2026",
    multijugador: true,
    plataformas: ["Xbox","PlayStation5", "Pc(Window)"],
};

const plataformasTexto = videoJuego.plataformas.join(", ");
const multijugadores = videoJuego.multijugador ? "si" : "no";

const ficha = `FICHA DEL VIDEOJUEGO
=================
Titulo: ${videoJuego.titulo}
Estudio: ${videoJuego.estudio}
Anio: ${videoJuego.anio}
Plataformas: ${plataformasTexto}
Multijugador?: ${multijugadores}

`;




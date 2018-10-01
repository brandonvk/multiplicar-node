
const argv =  require('./config/yargs').argv;

const { crearArchivo,listarTabla } = require('c:/users/pc/desktop/node/03-bases-node/multiplicar/multiplicar')

let comando = argv._[0];


switch(comando){
  case 'listar':
    listarTabla(argv.base,argv.limite)
    // console.log("listar");
  break;
  case 'crear':
    // console.log("crear");
    crearArchivo(argv.base,argv.limite)
      .then(archivo => console.log(`Archivo creado`+` base = ${argv.base}`.yellow))
      .catch (err => console.log(err))

  break;
  default:
    console.log("Comando no reconocido");
  break;

}

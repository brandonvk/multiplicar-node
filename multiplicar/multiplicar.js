const fs = require('fs');

const colors = require('colors');


let listarTabla = (base,limite)=>{
  console.log('====================='.grey);
  console.log(`Tabla del ${base}`.grey);
  console.log('====================='.grey);
  if(!limite) limite = 10;
  for (var i = 0; i < limite; i++) {
    console.log(`${i+1} * ${base} = ${((i+1)*base)}`);
  }
}

let crearArchivo = (base,limite = 10) =>{
  let data = '';

  for (let i = 0; i < limite; i++) {
    data+=`${base}\t * \t${i+1} = ${base*(i+1)}\n`
  }

  return new Promise((resolve,reject)=>{

    if(!Number(base)){
      reject(`El valor introducido '${base}' no es un número`);
      return ;
    }
    fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if(err) reject(err)
      else
        resolve(`tabla-${base}-al-${limite}.txt`);
    });
  })
}

module.exports = {
  crearArchivo,
  listarTabla
}

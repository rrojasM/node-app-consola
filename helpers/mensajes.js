const { resolve } = require('path');

require('colors');



const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('===================================='.magenta);
        console.log('Seleciones una Opción'.magenta);
        console.log('==================================== \n'.magenta);

        console.log(`${'1.'.magenta} Crear Tarea`);
        console.log(`${'2.'.magenta} Listar Tareas`);
        console.log(`${'3.'.magenta} Listar Tareas Completadas`);
        console.log(`${'4.'.magenta} Listar Tareas Pendientes `);
        console.log(`${'5.'.magenta} Completar Tarea(s)`);
        console.log(`${'6.'.magenta} Borrar Tarea`);
        console.log(`${'0.'.magenta} Salir \n`);


        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })


        readline.question('Seleciones una opción: ', (opt) => {
            resolve(opt)
            readline.close();

        })
    });





}

const pausa = () => {

    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\n Presione ${'ENTER'.blue} para continuar \n`, (opt) => {
            readline.close();
            resolve();
        })

    })

}


module.exports = {
    mostrarMenu,
    pausa
}




const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
require('colors');
/* const Tarea = require('./models/tarea'); */
const Tareas = require('./models/tareas');



const main = async () => {

    let opt = '';

    const tareas = new Tareas();
    do {

        opt = await inquirerMenu();
        console.log({opt});

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas._listado);
                break;
        }
        await pausa();
    } while (opt !== '0');
    
}

main();
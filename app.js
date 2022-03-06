const { guardarInformacion, leerdb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
require('colors');
const Tareas = require('./models/tareas');

const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerdb();

    if(tareasDB){
        //TODO: CARGAR TAREAS
       tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        //Imprime el menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas.listadoArr);
                break;
        }

        guardarInformacion(tareas.listadoArr);
        await pausa();
    } while (opt !== '0');
}
main();
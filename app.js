const { guardarInformacion, leerdb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheklist } = require('./helpers/inquirer');
require('colors');
const Tareas = require('./models/tareas');

const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerdb();

    if (tareasDB) {
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
                tareas.listadoTareas();
                /* console.log(tareas.listadoArr); */
                break;
            case '3':
                tareas.listarPendientesCompletadas(true);
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            case '5':
                const ids = await mostrarListadoCheklist(tareas.listadoArr);

                tareas.toggleCompletadas(ids)
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);

                if (id !== '0') {
                    const ok = await confirmar('¿Estas seguro que deseas Borrar?');
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada exitosamente');
                    }

                }

                break;
        }

        guardarInformacion(tareas.listadoArr);
        await pausa();
    } while (opt !== '0');
}
main();
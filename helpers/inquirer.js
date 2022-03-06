const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tarea'
            },
            {
                value: '3',
                name: '3. Listar Tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar Tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar Tarea(s)'
            },
            {
                value: '6',
                name: '2. Borrar Tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
            
            
            
        ]
    }
]

const inquirerMenu = async () => {
    console.clear();
    console.log('===================================='.green);
    console.log('Selecione una Opción'.green);
    console.log('===================================='.green);
    
    const { opcion} = await inquirer.prompt(preguntas);
    return opcion;
}


const pausa = async() =>{

    const question = [
        {
            type:'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ]

    console.log('\n');
    await inquirer.prompt(question);

}

module.exports = {
    inquirerMenu,
    pausa
}
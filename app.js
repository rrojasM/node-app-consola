const { inquirerMenu, pausa } = require('./helpers/inquirer');

require('colors');

console.clear();

const main = async () => {

    console.log('HOLA MUNDO!');

    let opt = '';
    do {
        opt = await inquirerMenu();
        
        await pausa();

       /*  if (opt !== 0) await pausa(); */

    } while (opt !== '0');


    /*  pausa(); */





}

main();
import Marty from 'marty';

function requireFromContext(context, callback) {
    // Iterate through all js files in context folder
    context.keys().forEach(key => {
        if (!/\.js/.test(key)) {
            callback(key);
        }
    });
}


class Application extends Marty.Application {
    registerDependencies() {
        let context = require.context('./', true, /(actions|queries|sources|stores)/);

        requireFromContext(context, key => {
            // NOTE: id could potentially clash if files are named the same.
            let id = key.substr(key.lastIndexOf('/') + 1);
            console.log('Registering marty assets: ', id);
            this.register(id, context(key));
        });


    }

    //registerHooks() {
    //    let context = require.context('./', true, /hooks/);
    //
    //    requireFromContext(context, key => {
    //        console.log('registering hook', key);
    //        context(key); // Run
    //    });
    //}

    constructor(options) {
        super(options);
        if(Marty.isBrowser){
            console.group('Marty registrations: ');
        }

        //console.log('Marty registrations: ');
        this.registerDependencies();

        //console.log('Now registering hooks.');
        //this.registerHooks();
        //console.log('Now registering router.');
        this.router = require('./router');
        if(Marty.isBrowser){
            console.groupEnd();
        }

    }
}


module.exports = Application;

namespace Promises {
    let module: ng.IModule = angular.module('app', []);

    module.controller('PromiseController', Promises.PromisesController);
}
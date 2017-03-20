namespace Promises {
    export class PromisesController {
        // field for records
        public games: Models.Game[] = [];

        // field to control loading scenario
        public isLoading: boolean = false;

        // Explicit $inject syntax similar to ng-annotate process
        static $inject = [
            '$http'
        ];

        constructor (
            private $http: ng.IHttpService
        ) {

        }
        
        // delegate handling function for button click event
        public getGames():void {
            // set loading process to true
            this.isLoading = true;

            // Request file of game records
            this.$http.get('data/games.json')
                // If successful load data of games into controller records
                .then((result) => this.games = <Models.Game[]>result.data)
                // If failure report error to console
                .catch((reason)=> console.log('Failed to load Game records from server', reason))
                // Always condition called after either failure or success
                .finally(() => this.isLoading = false);
        }
    }
}
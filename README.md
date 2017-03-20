# Promise Demo

This demonstrates an $http promise resolution for illustration of how promises are resolved.

    // Request file of game records
    this.$http.get('data/games.json')
        // If successful load data of games into controller records
        .then((result) => this.games = <Models.Game[]>result.data)
        // If failure report error to console
        .catch((reason)=> console.log('Failed to load Game records from server', reason))
        // Always condition called after either failure or success
        .finally(() => this.isLoading = false);

## Documentation

[Angular 1.X Documentation](https://docs.angularjs.org/)

[Typescript Documentation](http://www.typescriptlang.org/docs/tutorial.html)


## Style Guides

[Angular 1.X Style Guide - John Papa](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)

[Angular 1.X Style Guide - Todd Motto](https://github.com/toddmotto/angular-styleguide)

[Javascript/Typescript Style Guide](https://github.com/mgechev/angularjs-style-guide)
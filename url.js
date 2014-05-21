module.exports = function(scope){

    scope.url = function(scope, args){
        return window.location.toString();
    };

    function createLocationFunction(key){
        return function(scope, args){
            return window.location[key].toString();
        };
    }

    for(var key in window.location){
        if(
            !window.location.hasOwnProperty(key) ||
            typeof window.location[key] !== 'string'
        ){
            continue;
        }

        scope.url[key] = createLocationFunction(key);
    }

    //override .hash to remove the #.
    scope.url.hash = function(scope, args){
        return window.location.hash.split('#').pop();
    };

    scope.url.query = function(scope, args){
        var searchParts = window.location.search.slice(1).split('&'),
            searchPair,
            query = {};

        for(var i = 0; i < searchParts.length; i++) {
            searchPair = searchParts[0].split('=');
            query[searchPair[0]] = searchPair[1];
        }

        return query;
    };
};
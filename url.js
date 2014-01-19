module.exports = function(gel){
    gel.scope.url = function(scope, args){
        return window.location.toString();
    };
    gel.scope.url.hostname = function(scope, args){
        return window.location.hostname.toString();
    };
    gel.scope.url.pathname = function(scope, args){
        return window.location.pathname.toString();
    };
    gel.scope.url.query = function(scope, args){
        var searchParts = window.location.search.slice(1).split('&'),
            searchPair,
            query = {};

        for(var i = 0; i < searchParts.length; i++) {
            searchPair = searchParts[0].split('=');
            query[searchPair[0]] = searchPair[1];
        }

        return query;
    };
    gel.scope.url.hash = function(scope, args){
        return window.location.hash.split('#').pop();
    };
};
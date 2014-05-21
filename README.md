# gel-url

url functions for gel

# usage

    var gelUrl = require('gel-url');

Call the gelUrl function on your gel instances scope:

    gelUrl(gel.scope);

Now you can use url functions in gel expressions:

    (url)
    -> 'http://localhost/'

    (url.pathname)
    -> '/'
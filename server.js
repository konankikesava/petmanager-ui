var connect = require('connect'),
serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("dist/petmanager-ui-master"))
app.listen(process.env.PORT || 8000);
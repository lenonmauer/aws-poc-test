const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOST || process.env.IP || "0.0.0.0";
const port = process.env.PORT || 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    console.log('============================')
    console.log("------pathname------");
    console.log(pathname);
    console.log("------headers------");
    console.log(req.headers);
    console.log("------query------");
    console.log(query);
    console.log('============================')

    await handle(req, res, parsedUrl)

    return
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});

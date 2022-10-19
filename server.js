const next = require("next");
const express = require('express')

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOST || process.env.IP || "0.0.0.0";
const port = process.env.PORT || 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

(async () => {
  try {
    await app.prepare();
    const server = express();

    server.get('/redirect', (req, res) => {
      console.log('received QS');
      console.log(req.query);
      res.redirect('/')
    })

    server.all("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();

const Koa = require("koa");
const app = new Koa();
const port = 3000;
// response
app.use((ctx) => {
  if (ctx.url === "/") {
    ctx.status = 200;
    ctx.body = "<h1>INDEX PAGE</h1>";
  }
  if (ctx.url === "/about") {
    ctx.status = 200;
    ctx.body = "<h1>ABOUT PAGE</h1>";
  }
  if (ctx.url === "/contact") {
    ctx.status = 200;
    ctx.body = "<h1>CONTACT PAGE</h1>";
  }
});

app.listen(port, () => {
  console.log(`Server started ${port}...`);
});

import { serveDir } from "jsr:@std/http/file-server";

Deno.serve((req: Request) => {
  const url = new URL(req.url);

  return serveDir(req, {
    fsRoot: "dist",
    urlRoot: "",
    showDirListing: false,
    enableCors: true,
    quiet: true,
  }).then((res) => {
    if (res.status === 404) {
      return serveDir(new Request(new URL("/index.html", req.url)), {
        fsRoot: "dist",
        urlRoot: "",
        quiet: true,
      });
    }
    return res;
  });
});

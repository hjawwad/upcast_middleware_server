const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express().use(cors());
app.use(
  cors({
    origins: "*",
  })
);

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://upcast.work",
    changeOrigin: true,
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers["Access-Control-Allow-Origin"] = "*";
    },
  })
);

app.listen(3000, () => {
  console.log("Proxy server running on port 3000");
});

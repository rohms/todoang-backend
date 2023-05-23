import http from "http";
import express from "express";

const server = http.createServer((req, res) => {
  res.end("This is my first response");
});

server.on("listening", () => {
  console.log("Listening on port 4000");
});

server.listen(4000);

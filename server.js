const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const tarefas = [
  { id: 1, titulo: "Estudar API REST", concluida: false },
  { id: 2, titulo: "Fazer um exemplo com fetch", concluida: true },
  { id: 3, titulo: "Testar a aplicação", concluida: false },
];

const paginaInicial = path.join(__dirname, "index.html");
const porta = Number(process.env.PORT) || 3000;

const servidor = http.createServer((requisicao, resposta) => {
  const url = new URL(requisicao.url, `http://${requisicao.headers.host}`);

  if (url.pathname === "/api/tarefas") {
    if (requisicao.method !== "GET") {
      resposta.writeHead(405, {
        Allow: "GET",
        "Content-Type": "application/json; charset=utf-8",
      });
      resposta.end(JSON.stringify({ erro: "Método não permitido" }));
      return;
    }

    resposta.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
    });
    resposta.end(JSON.stringify(tarefas));
    return;
  }

  if (
    requisicao.method === "GET" &&
    (url.pathname === "/" || url.pathname === "/index.html")
  ) {
    resposta.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    fs.createReadStream(paginaInicial)
      .on("error", (erro) => {
        console.error("Erro ao ler index.html:", erro);
        if (!resposta.headersSent) resposta.writeHead(500);
        resposta.end("Erro ao carregar a página");
      })
      .pipe(resposta);
    return;
  }

  resposta.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  resposta.end("Não encontrado");
});

servidor.listen(porta, () => {
  console.log(`Aplicação disponível em http://localhost:${porta}`);
});

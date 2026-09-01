# Rick and Morty API — Desafio ZRP

API desenvolvida com Node.js e Express para consultar episódios
de Rick and Morty e retornar os dados dos personagens participantes.

## Tecnologias

- Node.js
- Express
- Nodemon
- Docker

## Executar localmente

Instale as dependências:

```bash
npm install
```

Inicie em modo de desenvolvimento:

```bash
npm run dev
```

## Executar com Docker

Com o Docker Desktop iniciado:

```bash
docker build -t rickmorty-api .
docker run --rm -p 3000:3000 --name rickmorty-api rickmorty-api
```

## Endpoint

```http
GET /episode/:id
```

Exemplo:

```text
http://localhost:3000/episode/17
```

Retorna os dados do episódio e seus personagens, contendo:
nome, status, espécie, imagem e data de criação do registro.

Os personagens são consultados em conjunto, utilizando seus IDs.

## Organização

- `models`: representam os dados dos episódios e personagens.
- `services`: consultam a API externa e organizam os resultados.
- `controllers`: recebem as requisições e retornam as respostas.
- `routes`: definem os endpoints.

## Fonte dos dados

https://rickandmortyapi.com/
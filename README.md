# Rickmorty Node.js API

API em Node.js e Express que consulta a API pública de Rick and Morty e retorna
um episódio com os personagens já preenchidos.

Essa API foi criada para ser consumida pelo app Flutter **Mortyverse**.

## Funcionalidades

- Consulta de episódio por ID.
- Busca dos personagens do episódio em uma única chamada.
- Retorno simplificado para o app Flutter.
- Suporte a execução local com `npm run dev`.
- Suporte a Docker Compose.
- Impressão automática das URLs para local, rede e emulador Android.
- Tratamento de erro quando a API externa estiver indisponível.

## Requisitos

- Node.js 24 ou compatível com `fetch` nativo.
- npm.
- Docker Desktop, apenas se for executar com Docker.
- Internet ativa para consultar `https://rickandmortyapi.com`.

## Instalação

```bash
npm install
```

## Executar localmente

```bash
npm run dev
```

Ao iniciar, o servidor mostra URLs parecidas com:

```txt
Local:    http://localhost:3000
Network:  http://192.168.68.101:3000
Emulator: http://10.0.2.2:3000
```

Use:

- `Local` para testar no próprio PC.
- `Network` para testar em celular físico na mesma rede Wi-Fi.
- `Emulator` para testar no emulador Android.

## Variáveis de ambiente

Crie um arquivo `.env` se quiser configurar manualmente:

```env
PORT=3000
HOST_IP=192.168.68.101
```

`HOST_IP` é opcional. Ele serve apenas para forçar o IP exibido no terminal.
O servidor continua escutando em `0.0.0.0`, permitindo acesso pela rede.

## Executar com Docker

Com o Docker Desktop aberto e rodando:

```bash
docker compose down --remove-orphans
docker compose build --no-cache
docker compose up -d
```

Ver logs:

```bash
docker compose logs -f app
```

Parar:

```bash
docker compose down
```

Se o Docker travar ou mostrar erro de daemon:

```txt
failed to connect to the docker API
```

Abra o Docker Desktop e espere o engine iniciar. Se continuar travado, reinicie
o PC ou reinicie o serviço do Docker em um PowerShell como administrador:

```powershell
Restart-Service com.docker.service -Force
```

Enquanto o Docker não estiver funcionando, rode a API localmente com:

```bash
npm run dev
```

## Endpoint

```http
GET /episode/:id
```

Exemplo:

```txt
http://localhost:3000/episode/1
```

## Resposta

```json
{
  "id": 1,
  "name": "Pilot",
  "air_date": "December 2, 2013",
  "episode": "S01E01",
  "characters": [
    {
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "created": "2017-11-04T18:48:46.250Z",
      "origin": "Earth (C-137)"
    }
  ]
}
```

## Erros

ID inválido:

```json
{
  "error": "O ID deve ser um número inteiro positivo."
}
```

API externa fora do ar, sem internet ou erro de DNS:

```json
{
  "success": false,
  "message": "External Rick and Morty API unavailable."
}
```

## Estrutura

```txt
src/
  controllers/
  middlewares/
  models/
  routes/
  services/
  utils/
  app.js
  server.js
```

## Fonte dos dados

```txt
https://rickandmortyapi.com
```

## Integração com o Flutter

No app Flutter, configure a URL usando `API_BASE_URL`:

```bash
flutter run --dart-define=API_BASE_URL=http://SEU_IP_WIFI:3000
```

Para emulador Android:

```bash
flutter run --dart-define=API_BASE_URL=http://10.0.2.2:3000
```

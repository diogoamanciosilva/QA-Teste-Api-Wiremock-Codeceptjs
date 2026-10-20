# 🚗 QA - Testes de API com CodeceptJS e WireMock

[![API Tests](https://github.com/diogoamanciosilva/QA-teste-api-wiremock-codeceptjs/actions/workflows/api-tests.yml/badge.svg?branch=master)](https://github.com/diogoamanciosilva/QA-teste-api-wiremock-codeceptjs/actions/workflows/api-tests.yml)

Projeto de automação de testes de **API desenvolvido com CodeceptJS**, utilizando os **helpers REST e JSONResponse** integrados ao **WireMock** para mock e simulação de serviços.

A suíte foi organizada para oferecer um ambiente modular, simples e de fácil execução, validando múltiplos comportamentos de uma API REST. 

A base didática e API Simulada com base nos conhecimentos adquiridos no curso **Automação API com JavaScript**, desenvolvida pela **Qazando** (https://qazando.com.br), **Professores Eduardo Finotti e Hebert Soares.**

Todos os testes e a estrutura deste repositório foram desenvolvidos por **Diogo Amancio**.


| Item | Detalhe |
| :--- | :--- |
| **Foco** | Automação de testes de API |
| **Stack** | CodeceptJS 4 (REST + JSONResponse), WireMock 3.9.1, Node.js, Java, Postman, Mochawesome, GitHub Actions |
| **Endpoint testado** | `/api/cars` |
| **Cobertura** | 4 cenários: `GET` 200 · `POST` 201 · `POST` 404 · `POST` 500 |
| **Resultado esperado** | `OK \| 4 passed` |
| **Ambiente validado** | Windows com PowerShell (local) e Ubuntu 24.04 (GitHub Actions) |


---

## 📑 Índice

- [📌 Sobre o projeto](#-sobre-o-projeto)
- [🧰 Tecnologias](#-tecnologias)
- [🧭 Jornada do usuário](#-jornada-do-usuário)
- [🎯 Objetivo da Automação](#-objetivo-da-automação)
- [🧪 Casos de teste](#-casos-de-teste)
- [📲 Cenários automatizados](#-cenários-automatizados)
- [🚙🔍 1. Consulta de veículos](#-1-consulta-de-veículos)
- [🚘➕ 2. Cadastro de veículo](#2-cadastro-de-veículo)
- [🛻⁉️ 3. Veículo inexistente](#%EF%B8%8F3--veículo-inexistente)
- [🛞🚫 4. Modelo não permitido](#4-modelo-não-permitido)
- [📁 Estrutura do projeto](#-estrutura-do-projeto)
- [🔧 Instalação e configuração do ambiente](#-instalação-e-configuração-do-ambiente)
- [🚀 Execução do projeto](#-execução-do-projeto)
- [⚡ Execução simplificada (scripts npm)](#-execução-simplificada-scripts-npm)
- [🔩 Configuração do CodeceptJS](#-configuração-do-codeceptjs)
- [🧩 Como o WireMock funciona neste projeto](#-como-o-wiremock-funciona-neste-projeto)
- [🔭 Postman](#-postman)
- [📊 Relatório de testes com Mochawesome](#-relatório-de-testes-com-mochawesome)
- [🔁 Integração contínua (GitHub Actions)](#-integração-contínua-github-actions)
- [🐞 Problemas comuns](#-problemas-comuns)
- [✅ Validação do ambiente](#-validação-do-ambiente)
- [🚧 Limitações e escopo](#-limitações-e-escopo)
- [🎯 Próximos passos](#-próximos-passos)
- [💡 Aprendizados técnicos](#-aprendizados-técnicos)
- [📬 Contato](#-contato)

---

# 📌 Sobre o projeto

O projeto simula uma **API de gerenciamento de veículo**s e utiliza o **WireMock** para representar o **comportamento de um backend real**, permitindo testar diferentes respostas da API sem depender de um sistema de produção.

Na prática, os testes automatizados simulam operações que um usuário ou sistema cliente faria, como:

| Cenário | Método | Resposta Esperada |
| :--- | :---: | :--- |
| **Consultas de dados** | `GET` | `200 OK` |
| **Cadastros válidos (permitidos)** | `POST` | `201 Created` |
| **Cadastros inválidos (não permitidos)** | `POST` | `500 Internal Server Error` |
| **Requisições de recursos inexistentes** | `POST` / `GET` | `404 Not Found` |

👉🏻 O **CodeceptJS** envia as requisições e valida se a API retorna exatamente o comportamento esperado. 

👉🏻 O **WireMock** atua como o backend simulado, fornecendo respostas previamente configuradas.


# 🧭 Jornada do usuário

Imagine que o usuário esteja utilizando uma aplicação de veículos. Essa aplicação precisa conversar com uma API para consultar e cadastrar veículos.

| Cenário / Funcionalidade | Método / Status HTTP | Validação de Comportamento |
| :--- | :---: | :--- |
| **Consulta de Veículos** | `GET` | Retorna a lista completa de veículos disponíveis. |
| **Cadastro de Veículo Válido** | `POST` (`201`) | Registra o novo veículo e confirma a criação com sucesso. |
| **Recurso Inexistente** | `GET` / `POST` (`404`) | Garante que requisições para veículos inexistentes sejam tratadas corretamente. |
| **Erro Interno do Servidor** | `POST` (`500`) | Valida a resposta do sistema diante de envios com modelos não permitidos. |

# 🎯 Objetivo da Automação

É um projeto de automação de testes de API que simula uma aplicação de gerenciamento de veículos, utilizando o WireMock como backend simulado e o CodeceptJS para validar automaticamente cenários de sucesso e diferentes condições de erro.

<img width="1312" height="1199" alt="Testes de API com CodeceptJS e WireMock" src="https://github.com/user-attachments/assets/28d6fb83-e31d-490f-856d-15b497647fe4" />

# 🏹 Por que testar contra um mock?

O objetivo é praticar a estrutura de automação (configuração, helpers, organização dos testes e validação das respostas), não validar as regras de negócio de uma aplicação real. 

O WireMock permite reproduzir respostas `200`, `201`, `404` e `500` de forma controlada e repetível, sem depender de um backend disponível.

---

# 🧰 Tecnologias

![API](https://img.shields.io/badge/API-Testing-1E88E5?style=for-the-badge)
![REST API](https://img.shields.io/badge/REST%20API-Testing-6C63FF?style=for-the-badge)
![Postman](https://img.shields.io/badge/Postman-API%20Testing-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![CodeceptJS](https://img.shields.io/badge/CodeceptJS-API%20Testing-6C63FF?style=for-the-badge)
![Mochawesome](https://img.shields.io/badge/Mochawesome-Test%20Reporting-6C63FF?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-Test%20Automation-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=node.js&logoColor=white)
![WireMock](https://img.shields.io/badge/WireMock-API%20Mocking-6C63FF?style=for-the-badge)
![JSON](https://img.shields.io/badge/JSON-Data%20Format-000000?style=for-the-badge&logo=json&logoColor=white)
![Java](https://img.shields.io/badge/Java-Runtime-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![npm](https://img.shields.io/badge/npm-Package%20Manager-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Git](https://img.shields.io/badge/Git-Version%20Control-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)
![PowerShell](https://img.shields.io/badge/PowerShell-Terminal-5391FE?style=for-the-badge&logo=powershell&logoColor=white)

---

# 🧪 Casos de teste

Os testes (`backend/tests/veiculos_teste.js`) validam o endpoint `/api/cars` com quatro cenários:

| ID | Cenário | Método | Payload (`model`) | O que o teste valida |
| :---: | :--- | :---: | :---: | :--- |
| **CT-01** | Consultar veículos | `GET` | — | Status `200` |
| **CT-02** | Cadastrar veículo válido | `POST` | `fusca` | Status `201`, `message` e `carId` |
| **CT-03** | Cadastrar veículo inexistente | `POST` | `ronaldo` | Status `404` e `message` |
| **CT-04** | Cadastrar modelo não permitido | `POST` | `up tsi` | Status `500` e `message` |

Cada caso traz o cenário em formato BDD, o comando de execução e as evidências (automação com CodeceptJS e validação manual no Postman).

> ⚠️**Importante:** Execute os comandos de cada caso a partir da pasta `backend/`, com o WireMock em execução (`npm run mock`).


# 📲 Cenários automatizados

# 🚙🔍 1. Consulta de veículos

```http
GET /api/cars
```


```powershell
  npx codeceptjs run --grep "Fazendo um GET para o endpoint" --verbose
```


# 🟰 Resultado esperado:

```text
HTTP 200
```

# 🎬 **Vídeo:**
https://github.com/user-attachments/assets/0b088f0b-6783-4a31-9f99-00118a9f3d53


# 📸 **Print:**
<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/123fec6a-fcc6-4db4-b9d2-99d37f08e671" />


# 🔭 Evidência da validação manual (Postman)

https://github.com/user-attachments/assets/76369f5c-6d55-410b-abad-0dc24e388ae4


---

# 🚘➕2. Cadastro de veículo

```json
{
  "brand": "volks",
  "model": "fusca",
  "year": 2019
}
```


```powershell
npx codeceptjs run --grep "Cadastrando um veículo utilizando POST" --verbose
```



# 🟰 Resultado esperado:

```text
HTTP 201
```

# ↪️↩️ Com retorno:

```json
{
  "message": "Car successfully registered!",
  "carId": 6
}

```

# 🎬 **Vídeo:**

https://github.com/user-attachments/assets/59da63ad-e703-4bb5-85b7-7e80aae61ea5


# 📸 **Print:**

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/e6d0b498-488c-49a4-ad6c-c7ddbe97a483" />

# 🔭 Evidência da validação manual (Postman)

https://github.com/user-attachments/assets/d6ed52f9-1536-4c3e-9c4c-c939ca61e228

---
# 🛻⁉️3.  Veículo inexistente

```json
{
  "brand": "volks",
  "model": "ronaldo",
  "year": 2019
}
```

```powershell
  npx codeceptjs run --debug --grep "Validando veículo inexistente POST 404"
```

# 🟰 Resultado esperado:

```text
HTTP 404
```

# ↪️↩️ Com retorno:

```json
{
  "message": "Vehicle not found."
}
```


# 🎬 **Vídeo:**

https://github.com/user-attachments/assets/dce451e3-28d3-43c6-8281-65dc52ae6853


# 📸 **Print:**
<img width="1916" height="1078" alt="image" src="https://github.com/user-attachments/assets/3c3492e8-05aa-4a79-a36e-d495a8b4695c" />


# 🔭 Evidência da validação manual (Postman)

https://github.com/user-attachments/assets/53cf60da-51ed-4f51-820b-f6e1c1b8f48f

---

# 🚫🛞4. Modelo não permitido

```json
{
  "brand": "volks",
  "model": "up tsi",
  "year": 2019
}
```

# 🟰 Resultado esperado:

```text
HTTP 500
```

# ↪️↩️ Com retorno:

```json
{
  "message": "Internal server error: model 'up tsi' is not allowed."
}
```

```powershell
  npx codeceptjs run --grep "Validando veículo com erro POST 500" --verbose
```

# 🎬 **Vídeo:**

https://github.com/user-attachments/assets/420f27e6-cfe7-4cfa-a12a-fb5e2a0c7771


# 📸 **Print:**

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/d6606bac-091d-4f32-b1e0-8a676bb73c10" />


# 🔭 Evidência da validação manual (Postman)

https://github.com/user-attachments/assets/41e2e5ef-0b70-4623-a24e-5e31b2a15d8c



---

# 📁 Estrutura do projeto

```text
QA-teste-api-wiremock-codeceptjs/
├── .github/
│   └── workflows/
│       └── api-tests.yml                  # Pipeline de CI (GitHub Actions)
├── backend/                               # Testes automatizados com CodeceptJS
│   ├── codecept.conf.js                   # Configuração do CodeceptJS (BASE_URL por variável de ambiente)
│   ├── package.json                       # Dependências e scripts npm
│   ├── package-lock.json                  # Versões exatas das dependências
│   ├── jsconfig.json                      # Auxiliares gerados pelo CodeceptJS
│   ├── steps.d.ts                         #   (tipagem e autocomplete)
│   ├── steps_file.js
│   └── tests/
│       └── veiculos_teste.js              # Cenários automatizados da API
├── mappings/                              # Respostas simuladas do WireMock
│   ├── get-apicars-a89dc6b6-bc65-4ab4-994d-73c164637b4f.json    # GET  /api/cars           → 200
│   ├── post-apicars-eed49bc7-17ee-461e-a3fc-113c1b184593.json   # POST /api/cars (fusca)   → 201
│   ├── post-apicars-5bc9cf4b-2a87-445f-bb75-c8521e4fba62.json   # POST /api/cars (ronaldo) → 404
│   └── post-apicars-106b2db8-8be1-4269-a84c-b305133842de.json   # POST /api/cars (up tsi)  → 500
├── scripts/
│   └── download-wiremock.js               # Download do WireMock (qualquer SO)
├── .gitignore
└── README.md
```

> ⚠️**Importante:** > Os nomes dos arquivos em `mappings/` são gerados pelo WireMock (método, rota e um identificador único). Os corpos das respostas estão no próprio mapping (`jsonBody`), por isso o projeto não usa a pasta `__files/`.

> ⚠️ **Não versionados:** o `wiremock-standalone-3.9.1.jar` (binário pesado, baixado por script), a pasta `node_modules/` e as pastas geradas pela execução (`backend/output/` e `backend/mochawesome-report/`).

| Diretório/arquivo | Responsabilidade |
| :--- | :--- |
| `.github/workflows/` | Pipeline de integração contínua |
| `backend/` | Configuração, scripts npm e testes do CodeceptJS |
| `backend/tests/` | Cenários automatizados |
| `mappings/` | Endpoints, requisições e respostas simuladas pelo WireMock |
| `scripts/` | Scripts auxiliares (download do WireMock) |
| `README.md` | Documentação do projeto |

---

# 🔧 Instalação e configuração do ambiente

O procedimento foi validado em ambiente **Windows com PowerShell**.

### 📍 1. Pré-requisitos

| Ferramenta | Finalidade |
| :--- | :--- |
| **Git** | Clonar o repositório e controlar versões |
| **Node.js** | Executar o ambiente JavaScript (o pipeline usa Node 22) |
| **npm** | Instalar e gerenciar as dependências do projeto |
| **Java JDK** | Executar o WireMock (o pipeline usa Java 17) |
| **PowerShell** | Executar os comandos deste guia |

### 📍 2. Verificar as instalações

```powershell
git --version
node --version
npm --version
java -version
```

> ⚠️**Importante:**  Caso algum comando não seja reconhecido, instale a ferramenta e configure-a no `PATH` do sistema antes de continuar.

### 📍 3. Clonar o repositório

```powershell
git clone https://github.com/diogoamanciosilva/QA-teste-api-wiremock-codeceptjs.git
cd QA-teste-api-wiremock-codeceptjs
```

### 📍 4. Baixar o WireMock

Na **raiz do projeto**, execute:

```powershell
Invoke-WebRequest -Uri "https://repo1.maven.org/maven2/org/wiremock/wiremock-standalone/3.9.1/wiremock-standalone-3.9.1.jar" -OutFile "wiremock-standalone-3.9.1.jar"
```

Confirme que o arquivo está na raiz:

```powershell
dir *.jar
```

> **Alternativa:** depois de instalar as dependências (passo 5), o comando `npm run mock:setup` faz o mesmo download e funciona em qualquer sistema operacional.

### 📍 5. Instalar as dependências

```powershell
cd backend
npm install
```

> ⚠️**Importante:**  O `npm install` deve ser executado dentro da pasta `backend`, onde está o `package.json`.

---

# 🚀 Execução do projeto

A execução envolve dois processos em paralelo, então use **duas janelas do PowerShell**.

### 📍 Terminal 1: iniciar o WireMock

Na **raiz do projeto**:

```powershell
java -jar .\wiremock-standalone-3.9.1.jar --port 8080
```

Quando iniciado corretamente, o terminal exibe:

```text
version: 3.9.1
port: 8080
```

> ⚠️ **Importante: não feche este terminal.** O WireMock precisa permanecer em execução durante os testes.

<details>
<summary>🎬 Evidências (vídeo e print)</summary>

https://github.com/user-attachments/assets/687afc1d-f93b-4820-99ba-f5e9046547e9

<img width="1913" height="1078" alt="Print do WireMock em execução" src="https://github.com/user-attachments/assets/7dd60178-5ee0-4723-bc18-9e2b7a8268ec" />

</details>

### 📍 Terminal 2: executar os testes

```powershell
cd backend
npx codeceptjs run
```

> Se o terminal já estiver na pasta `backend`, pule o `cd backend`.

Resultado esperado:

```text
Consulta de veiculos --

  √ Fazendo um GET para o endpoint
  √ Cadastrando um veículo utilizando POST
  √ Validando veículo inexistente POST 404
  √ Validando veículo com erro POST 500

  OK  | 4 passed
```


# 🎬 Evidências (Vídeo e Print)

https://github.com/user-attachments/assets/4b4bad36-0754-4fd1-8218-c17393b2b952

<img width="1917" height="1078" alt="Print da execução da suíte" src="https://github.com/user-attachments/assets/1428239d-7ac0-4951-97da-bf10e507f3c0" />


### 📍 Modo detalhado

```powershell
npx codeceptjs run --verbose
```


# 🎬 Evidências (Vídeo e Prints)

https://github.com/user-attachments/assets/d42b4911-3fe0-478a-b40d-a0d87f9a912e

<img width="1913" height="726" alt="Print da execução em modo detalhado (1)" src="https://github.com/user-attachments/assets/fd32590c-111b-4593-8491-05506732cc38" />
<img width="1917" height="1078" alt="Print da execução em modo detalhado (2)" src="https://github.com/user-attachments/assets/95789130-b832-4e41-9c18-a71abca4f2c6" />

</details>

### 📍 Fluxo completo de execução

```text
1. Instalar Git, Node.js, npm e Java
        ↓
2. Clonar o repositório
        ↓
3. Baixar o wiremock-standalone-3.9.1.jar
        ↓
4. Acessar a pasta backend e executar npm install
        ↓
5. Terminal 1 → iniciar o WireMock na porta 8080
        ↓
6. Terminal 2 → executar npx codeceptjs run
        ↓
7. Confirmar "OK | 4 passed"
```

---

# ⚡ Execução simplificada (scripts npm)

Os scripts do `backend/package.json` simplificam a execução:

| Script | O que faz |
| :--- | :--- |
| `npm run mock:setup` | Baixa o WireMock (só na primeira vez) |
| `npm run mock` | Inicia o WireMock na porta 8080, lendo os mappings da raiz do projeto |
| `npm test` | Executa a suíte |
| `npm run test:verbose` | Executa a suíte em modo detalhado |
| `npm run test:report` | Executa a suíte e gera o relatório Mochawesome |

```powershell
cd backend
npm install
npm run mock:setup   # baixa o WireMock (só na primeira vez)
npm run mock         # Terminal 1: inicia o WireMock na porta 8080
npm test             # Terminal 2: executa a suíte
```

O `npm run mock` aponta para a pasta `mappings/` da raiz, então pode ser executado de dentro de `backend/`.

### 📍 Usar outra porta

A URL base pode ser alterada pela variável de ambiente `BASE_URL`. Como o `npm run mock` usa a porta `8080`, para outra porta inicie o WireMock manualmente, dentro de `backend/`:

```powershell
# Terminal 1: WireMock na porta 9090
java -jar ..\wiremock-standalone-3.9.1.jar --port 9090 --root-dir ..

# Terminal 2: aponta os testes para a nova porta
$env:BASE_URL = "http://localhost:9090"
npm test
```

> ⚠️ **Importante:** A variável vale apenas para a janela atual do PowerShell. Para voltar ao padrão:

```powershell
Remove-Item Env:BASE_URL
```

---

# 🔩 Configuração do CodeceptJS

```javascript
helpers: {
  REST: {
    endpoint: process.env.BASE_URL || 'http://localhost:8080',
    defaultHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  },
  JSONResponse: {}
}
```

O `endpoint` usa a variável de ambiente `BASE_URL`. Quando ela não está definida, o valor padrão é `http://localhost:8080`.

> ⚠️ **Importante:** a porta usada pelo WireMock e a porta configurada no `endpoint` do CodeceptJS precisam ser iguais.

---

# 🧩 Como o WireMock funciona neste projeto

O WireMock carrega os arquivos JSON da pasta `mappings/` e responde às requisições conforme as regras definidas neles.

```text
CodeceptJS
    │
    │ HTTP Request
    ▼
http://localhost:8080
    │
    ▼
WireMock (lê mappings/*.json)
    │
    ├── GET  /api/cars                         → 200
    ├── POST /api/cars  { "model": "fusca" }   → 201
    ├── POST /api/cars  { "model": "ronaldo" } → 404
    └── POST /api/cars  { "model": "up tsi" }  → 500
```

- O `GET` é identificado pela rota e pelo método.
- Os `POST` são identificados pela rota, pelo método e pelo **corpo da requisição** (`bodyPatterns` com `equalToJson`), e é isso que permite respostas diferentes para o mesmo endpoint.

Exemplo simplificado do mapping do cenário `404`:

```json
{
  "request": {
    "url": "/api/cars",
    "method": "POST",
    "bodyPatterns": [
      { "equalToJson": "{\"brand\":\"volks\",\"model\":\"ronaldo\",\"year\":2019}" }
    ]
  },
  "response": {
    "status": 404,
    "jsonBody": { "message": "Vehicle not found." },
    "headers": { "Content-Type": "application/json" }
  }
}
```

---

# 🔭 Postman

O Postman complementa a automação como ferramenta de exploração e validação manual:

- **Validar endpoints** antes de automatizar;
- **Conferir** método HTTP, payload e status codes;
- **Diagnosticar** falhas durante o desenvolvimento.

Fluxo de trabalho: **Postman** (validação manual) → **CodeceptJS** (automação) → **WireMock** (simulação do backend).

Os vídeos da validação manual de cada cenário estão nos casos de teste [CT-01 a CT-04](#-casos-de-teste).

---

# 📊 Relatório de testes com Mochawesome

O projeto usa o **Mochawesome** para gerar relatórios visuais das execuções do CodeceptJS. O relatório mostra os cenários executados, os resultados, as falhas e a duração dos testes, proporcionando visibilidade, rastreabilidade e facilidade de análise.

Essa prática transforma os resultados da automação em uma evidência estruturada da qualidade da aplicação, facilitando a identificação de falhas e a comunicação dos resultados entre QA, desenvolvimento e demais envolvidos no projeto.

Para gerar o relatório localmente:

```powershell
cd backend
npm run test:report
```

Os arquivos são criados em `backend/mochawesome-report/` (`mochawesome.html` e `mochawesome.json`). Essa pasta é gerada a cada execução e não é versionada. Nas execuções do GitHub Actions, o relatório fica disponível como *artifact* chamado `mochawesome-report`, na página da execução.

<details>
<summary>🎬 Evidência (vídeo)</summary>

https://github.com/user-attachments/assets/d63cd263-7e91-4a78-bfe9-212dab089143

</details>

---

# 🔁 Integração contínua (GitHub Actions)

A cada `push` ou `pull request` na branch `master`, o workflow [`api-tests.yml`](.github/workflows/api-tests.yml) é executado em Ubuntu 24.04, com Node.js 22 e Java 17. Ele também pode ser disparado manualmente, pelo botão *Run workflow* na aba **Actions**. O fluxo:

1. instala as dependências (`npm ci`);
2. baixa e inicia o WireMock, aguardando que ele responda;
3. executa a suíte com `npm test`;
4. gera o relatório Mochawesome com `npm run test:report`;
5. publica o relatório como *artifact* da execução.

O resultado pode ser consultado na aba **Actions** do repositório, e o badge no topo deste README mostra o status da última execução na `master`.

---

# 🐞 Problemas comuns

| Sintoma | Causa provável | Solução |
| :--- | :--- | :--- |
| Todos os testes falham com `ECONNREFUSED` (testes não conectam à API) | WireMock não está em execução, ou está em outra porta | Inicie o WireMock (`npm run mock`) em outro terminal e confira a porta do `endpoint` |
| Testes retornam `404` inesperado | WireMock iniciado fora da raiz do projeto, ou payload diferente do mapping | Use `npm run mock`, ou inicie o WireMock na pasta que contém `mappings`; confira se o corpo da requisição é idêntico ao do mapping |
| Testes com falhas inesperadas | Configuração do WireMock ou do endpoint incorreta | Confira o WireMock, a porta `8080` e o `codecept.conf.js` |
| `Invalid URL` | URL sem a barra inicial | Use `"/api/cars"` em vez de `"api/cars"` |
| `I.seeResponseCodeIs is not a function` | Helper `JSONResponse` ausente | Adicione `JSONResponse: {}` na configuração |
| Porta `8080` em uso | Outro processo está usando a porta | Encerre o processo anterior ou use outra porta e ajuste a variável `BASE_URL` |
| `java` não é reconhecido | Java não instalado ou fora do `PATH` | Instale o Java e execute `java -version` |
| `node` não é reconhecido | Node.js não instalado ou fora do `PATH` | Instale o Node.js e execute `node --version` |
| `npm install` apresenta erro | Comando executado fora da pasta `backend` | Execute `cd backend` antes do `npm install` |
| `Unable to access jarfile` | Arquivo `.jar` ausente na raiz do projeto | Execute o download do WireMock (passo 4 da instalação) ou `npm run mock:setup` |
| Pipeline falha em "Aguardar WireMock" | WireMock não iniciou (jar ausente ou porta ocupada) | Consulte o log do WireMock exibido no próprio passo da execução |

---

# ✅ Validação do ambiente

O ambiente está correto quando todas as condições abaixo forem atendidas:

| Etapa | Categoria | Resultado esperado |
| :--- | :---: | :--- |
| **Pré-requisitos** | Ambiente | Git, Node.js, npm e Java instalados e disponíveis no terminal |
| **Clonagem** | Repositório | Repositório clonado localmente com sucesso |
| **Download do WireMock** | Mock | Arquivo JAR do WireMock baixado na raiz do projeto |
| **Dependências** | Instalação | Dependências instaladas com `npm install` dentro de `backend/` |
| **Servidor** | Mock | WireMock iniciado e escutando na porta `8080` |
| **Execução** | Automação | Os 4 cenários executados sem falhas |
| **Verificação** | Saída do terminal | Console exibe `OK \| 4 passed` |
| **Integração contínua** | CI | Workflow `API Tests` concluído com sucesso na aba **Actions** |

---

# 🚧 Limitações e escopo

Este projeto tem finalidade **didática** e foi desenvolvido a partir dos conhecimentos do curso *Automação de API com JavaScript*. As limitações abaixo são conhecidas e fazem parte do escopo definido.

- **API simulada:** a suíte é executada contra um mock (WireMock) que emula um recorte funcional de um backend. O objetivo é praticar a estrutura de automação (CodeceptJS, helpers `REST` e `JSONResponse`), a organização do projeto e a validação de respostas, não validar regras de negócio de uma aplicação.
- **Cobertura enxuta:** são quatro cenários sobre `/api/cars` (`GET` 200, `POST` 201, 404 e 500), escolhidos para exercitar sucesso e erro com qualidade, e não para cobrir a API de forma exaustiva.
- **Códigos de status didáticos:** o 404 e o 500 no `POST` foram adotados para simular comportamentos distintos de forma controlada. Em uma API real, erros de validação de payload normalmente seriam respondidos com `400` ou `422`.
- **Mock sem estado:** as respostas são fixas, ou seja, o veículo cadastrado no `POST` não aparece em um `GET` posterior.
- **Correspondência exata de payload:** cada `POST` só é reconhecido quando o corpo é idêntico ao definido no mapping. Qualquer outro payload não casa com nenhum mapping, e o WireMock responde `404` por padrão.
- **Validações básicas:** os cenários `POST` validam status e mensagem de retorno, e o `GET` valida apenas o status. Não há validação de schema, tipos de dados ou tempo de resposta.
- **Cenários negativos não explorados:** campos ausentes, valores inválidos, body vazio e métodos não suportados ficaram fora desta versão.
- **Alertas do `npm audit`:** o `npm audit` reporta 12 vulnerabilidades (1 baixa, 8 moderadas e 3 altas) em dependências indiretas das ferramentas de teste (CodeceptJS e Mochawesome). A correção automática (`--force`) instalaria uma versão anterior do CodeceptJS, com mudança incompatível, por isso foi adiada. Essas ferramentas são usadas apenas em ambiente de teste, contra um mock local.

---

# 🎯 Próximos passos

✅ **Concluído:** scripts npm, URL base por variável de ambiente, download automatizado do WireMock e pipeline no GitHub Actions com relatório Mochawesome e badge de status.

Evoluções planejadas, da mais simples à mais avançada:

1. **Validar o corpo do `GET`:** conferir no CT-01 a lista de veículos retornada, e não só o status.
2. **Ampliar a cobertura:** cenários negativos (campos obrigatórios, tipos e valores inválidos), validação de schema das respostas e uso de *Scenarios* do WireMock para simular estado.
3. **Revisar os status codes** dos erros de validação, alinhando-os às boas práticas REST (`400`/`422`), e documentar a decisão.
4. **Versionar a coleção do Postman** em uma pasta `postman/`, com asserts na aba *Tests*.
5. **Rastreabilidade:** usar os IDs `CT-01` a `CT-04` também nos nomes dos testes e no relatório.
6. **Manter as dependências em dia:** acompanhar as atualizações do CodeceptJS e do Mochawesome para reduzir os alertas do `npm audit`, e migrar do uso de funções globais, que o CodeceptJS 4 sinaliza como depreciado.
7. **Compatibilidade multiplataforma:** documentar os comandos para Linux e macOS, além do PowerShell.

---

# 💡 Aprendizados técnicos

- **Automação de testes de API com CodeceptJS:** configuração do projeto, escrita de cenários e execução da suíte via `npx codeceptjs run`, incluindo o modo `--verbose` para depuração.
- **Helpers `REST` e `JSONResponse`:** uso do `REST` para enviar requisições HTTP (`GET` e `POST`) e do `JSONResponse` para validar status code e corpo das respostas. Aprendi na prática que, sem o `JSONResponse` configurado, os métodos de validação, como `seeResponseCodeIs`, não ficam disponíveis.
- **Configuração de ambiente de testes:** definição da URL base e dos `defaultHeaders` no `codecept.conf.js`, uso de caminhos relativos com barra inicial (`/api/cars`) e a necessidade de manter a porta do WireMock alinhada com o `endpoint` do CodeceptJS.
- **Mocking de API com WireMock:** criação de mappings em JSON, com correspondência por rota, método e corpo da requisição (`equalToJson`), para simular diferentes respostas de um mesmo endpoint de forma controlada e sem depender de um backend real.
- **Cenários positivos e negativos:** validação de respostas `200`, `201`, `404` e `500`, entendendo a importância de testar não só o caminho feliz, mas também o comportamento diante de falhas.
- **Códigos de status HTTP:** compreensão do significado de cada código e senso crítico sobre sua adequação. Neste projeto, o 404 e o 500 foram usados com finalidade didática, e reconheço que, em uma API real, erros de validação seriam tratados com `400` ou `422`.
- **Testes exploratórios de API com Postman:** uso do Postman como etapa prévia à automação. Antes de transformar um cenário em teste no CodeceptJS, eu enviava as requisições `GET /api/cars` e `POST /api/cars` manualmente para:
  - Confirmar o comportamento esperado do endpoint (método HTTP, payload JSON, status code e mensagem retornada);
  - Validar se o WireMock respondia conforme o mapping configurado;
  - Diagnosticar falhas, comparando o resultado manual com o resultado da automação para descobrir se o problema estava no teste, no mock ou no ambiente.

  Com isso, entendi que o **Postman** complementa a automação, funcionando como ferramenta de exploração, validação e diagnóstico, enquanto o **CodeceptJS** garante a execução repetível e confiável dos cenários.
  
- **Relatórios de execução:** Geração de relatório visual com Mochawesome, facilitando a análise de resultados e a comunicação com outras pessoas do time.
- **Integração contínua com GitHub Actions:** Criação de um workflow que configura Node.js e Java, baixa e inicia o WireMock, aguarda sua disponibilidade, executa a suíte e publica o relatório Mochawesome como *artifact*, além do uso de scripts npm, variáveis de ambiente e versões fixadas por major (Ubuntu 24.04 e actions atualizadas) para tornar a execução reproduzível.
- **Diagnóstico de problemas:** Análise de erros comuns do ambiente (WireMock desligado, que gera `ECONNREFUSED`, WireMock iniciado fora da raiz do projeto, porta em uso, Java ou Node fora do `PATH`, `npm install` executado na pasta errada) e registro das soluções na tabela de *Problemas comuns*.
- **Segurança de dependências:** Leitura do relatório do `npm audit` e decisão consciente de não aplicar `npm audit fix --force`, que instalaria uma versão anterior do CodeceptJS com mudança incompatível, registrando a limitação no projeto.
- **Organização e documentação:** Estruturação do repositório em pastas com responsabilidades claras (`backend/`, `mappings/` e `scripts/`) e escrita de um README com passo a passo reproduzível.
- **Versionamento com Git e GitHub:** Uso do Git para controle de versão, trabalho em branch própria (`ci/github-actions`) e pull request para publicar as alterações.
- **Visão crítica e evolução:** Identificação das limitações do projeto e planejamento dos próximos passos (validação do corpo das respostas, ampliação de cobertura e versionamento da coleção do Postman).

---

# 📬 Contato

| LinkedIn                   |  https://www.linkedin.com/in/diogoamanciosilva/ |
| ------------------------- | ------: |

| E-mail                   |  diogoamanciosilva@gmail.com/ |
| ------------------------- | ------: |


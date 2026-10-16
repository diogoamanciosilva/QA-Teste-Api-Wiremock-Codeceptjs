# 🚗 QA - Testes de API com CodeceptJS e WireMock

[![API Tests](https://github.com/diogoamanciosilva/QA-teste-api-wiremock-codeceptjs/actions/workflows/api-tests.yml/badge.svg?branch=master)](https://github.com/diogoamanciosilva/QA-teste-api-wiremock-codeceptjs/actions/workflows/api-tests.yml)

Projeto de automação de testes de **API desenvolvido com CodeceptJS**, utilizando os **helpers REST e JSONResponse** integrados ao **WireMock** para mock e simulação de serviços.

A suíte foi organizada para oferecer um ambiente modular, simples e de fácil execução, validando múltiplos comportamentos de uma API REST. 

A base didática e API Simulada com base nos conhecimentos adquiridos no curso **Automação API com JavaScript**, desenvolvida pela **Qazando** (https://qazando.com.br), **Professores Eduardo Finotti e Hebert Soares.**

Todos os testes e a estrutura deste repositório foram desenvolvidos por **Diogo Amancio**.

---

# 📑 Índice

- [📌 Finalidade do projeto](#-finalidade-do-projeto)
- [🧭 A Jornada do usuário](#-a-jornada-do-usuário)
- [🎯 Objetivo da Automação](#-objetivo-da-automação)
- [🏷️ Tecnologias utilizadas](#️-tecnologias-utilizadas)
- [🤖 O que é testado](#-o-que-é-testado)
- [📱 Cenários Automatizados](#-cenários-automatizados)
- [🚙🔍 1. Consulta de veículos](#-1-consulta-de-veículos)
- [🚘➕ 2. Cadastro de veículo](#2-cadastro-de-veículo)
- [🛻⁉️ 3. Veículo inexistente](#%EF%B8%8F3--veículo-inexistente)
- [🛞🚫 4. Modelo não permitido](#4-modelo-não-permitido)
- [📁 Estrutura do projeto](#-estrutura-do-projeto)
- [⚙️ Instalação e configuração do ambiente](#️-instalação-e-configuração-do-ambiente)
- [🚀 Execução do projeto](#-execução-do-projeto)
- [🔄 Fluxo completo de execução](#-fluxo-completo-de-execução)
- [⚙️ Configuração do CodeceptJS](#️-configuração-do-codeceptjs)
- [🧩 Como o WireMock funciona neste projeto](#-como-o-wiremock-funciona-neste-projeto)
- [🔭 Postman](#-postman)
- [🔎🚙 1. Consultar veículos](#-1-consultar-ve%C3%ADculos)
- [➕🚘 2. Cadastrar um veículo válido](#-2-cadastrar-um-veículo-válido)
- [⁉️🛻 3. Tentar cadastrar um veículo inexistente](#%EF%B8%8F-3-tentar-cadastrar-um-veículo-inexistente)
- [🚫🛞 4. Tentar cadastrar um modelo não permitido](#-4-tentar-cadastrar-um-modelo-não-permitido)
- [📊 Relatórios de testes: Mochawesome](#-relatórios-de-testes-mochawesome)
- [🛠️ Problemas comuns](#️-problemas-comuns)
- [✅ Validação do ambiente](#-validação-do-ambiente)
- [🚧 Limitações e escopo](#-limitações-e-escopo)
- [🚀 Próximos passos (CI/CD)](#-próximos-passos-cicd)
- [💡 Aprendizados técnicos](#-aprendizados-técnicos)
- [📬 Contato](#-contato)

---

# 📌 Finalidade do projeto

O projeto simula uma **API de gerenciamento de veículo**s e utiliza o **WireMock** para representar o **comportamento de um backend real**, permitindo testar diferentes respostas da API sem depender de um sistema de produção.

Na prática, os testes automatizados simulam operações que um usuário ou sistema cliente faria, como:

| Cenário | Método | Resposta Esperada |
| :--- | :---: | :--- |
| **Consultas de dados** | `GET` | `200 OK` |
| **Cadastros válidos (permitidos)** | `POST` | `201 Created` |
| **Cadastros inválidos (não permitidos)** | `POST` | `500 Internal Server Error` |
| **Requisições de recursos inexistentes** | `POST` / `GET` | `404 Not Found` |

O CodeceptJS envia as requisições e valida se a API retorna exatamente o comportamento esperado. O WireMock atua como o backend simulado, fornecendo respostas previamente configuradas.

# 🧭 A Jornada do usuário

Imagine que o usuário esteja utilizando uma aplicação de veículos. Essa aplicação precisa conversar com uma API para consultar e cadastrar veículos.

| Cenário / Funcionalidade | Método / Status HTTP | Validação de Comportamento |
| :--- | :---: | :--- |
| **Consulta de Veículos** | `GET` | Retorna a lista completa de veículos disponíveis. |
| **Cadastro de Veículo Válido** | `POST` (`201`) | Registra o novo veículo e confirma a criação com sucesso. |
| **Recurso Inexistente** | `GET` / `POST` (`404`) | Garante que requisições para veículos inexistentes sejam tratadas corretamente. |
| **Erro Interno do Servidor** | `POST` (`500`) | Valida a resposta do sistema diante de envios com modelos não permitidos. |

# 🎯 Objetivo da Automação

> É um projeto de automação de testes de API que simula uma aplicação de gerenciamento de veículos, utilizando o WireMock como backend simulado e o CodeceptJS para validar automaticamente cenários de sucesso e diferentes condições de erro.

---

<img width="1312" height="1199" alt="Testes de API com CodeceptJS e WireMock" src="https://github.com/user-attachments/assets/28d6fb83-e31d-490f-856d-15b497647fe4" />

---

# 🏷️ Tecnologias utilizadas

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
![Git](https://img.shields.io/badge/Git-Version%20Control-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)
![PowerShell](https://img.shields.io/badge/PowerShell-Terminal-5391FE?style=for-the-badge&logo=powershell&logoColor=white)

---

# 🤖 O que é testado

👉🏻 **Os testes automatizados validam o endpoint:**

```text
/api/cars
```

👉🏻 **A suíte contempla quatro cenários:**

| Cenário                       | Método | Resposta esperada                     |
| ----------------------------- | ------ | ------------------------------------- |
| Consultar veículos            | `GET`  | `200`                                 |
| Cadastrar veículo (fusca)     | `POST` | `201` + mensagem de sucesso e `carId` |
| Veículo inexistente (ronaldo) | `POST` | `404` + `Vehicle not found.`          |
| Modelo não permitido (up tsi) | `POST` | `500` + mensagem de erro interno      |

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


---

# 📁 Estrutura do projeto

```text
QA-teste-api-wiremock-codeceptjs/
├── .github/
│   └── workflows/
│       └── api-tests.yml            # Pipeline do GitHub Actions
├── backend/                         # Testes automatizados com CodeceptJS
│   ├── codecept.conf.js             # Configuração do CodeceptJS (BASE_URL por variável de ambiente)
│   ├── package.json                 # Dependências e scripts npm
│   ├── package-lock.json
│   ├── mochawesome-report/          # Relatório gerado localmente (não versionado)
│   └── tests/
│       └── veiculos_teste.js        # Cenários automatizados da API
├── mappings/                        # Rotas e respostas simuladas do WireMock
│   ├── get-apicars-a89dc6b6-bc65-4ab4-994d-73c164637b4f.json    # GET /api/cars → 200
│   ├── post-apicars-eed49bc7-17ee-461e-a3fc-113c1b184593.json   # POST /api/cars (fusca) → 201
│   ├── post-apicars-5bc9cf4b-2a87-445f-bb75-c8521e4fba62.json   # POST /api/cars (ronaldo) → 404
│   └── post-apicars-106b2db8-8be1-4269-a84c-b305133842de.json   # POST /api/cars (up tsi) → 500
├── scripts/
│   └── download-wiremock.js         # Baixa o .jar do WireMock (Maven Central)
├── .gitignore
└── README.md
```

> ⚠️**Importante:** O arquivo `wiremock-standalone-3.9.1.jar` **não está versionado** no repositório por ser um binário pesado. Veja as instruções de download na seção de instalação.

### Responsabilidade de cada diretório

| Diretório/arquivo    | Responsabilidade                                                     |
| -------------------- | -------------------------------------------------------------------- |
| `backend/`           | Contém a configuração e os testes do CodeceptJS                      |
| `backend/tests/`     | Contém os cenários automatizados                                     |
| `mappings/`          | Define os endpoints, requisições e respostas simuladas pelo WireMock (corpos em `jsonBody`) |
| `scripts/`           | Script que baixa o `.jar` do WireMock, que não é versionado          |
| `.github/workflows/` | Pipeline de CI que executa os testes e publica o relatório           |
| `README.md`          | Documentação do projeto                                              |

---

# ⚙️ Instalação e configuração do ambiente

O procedimento foi validado em ambiente **Windows utilizando PowerShell**.

---

## 📍1. Pré-requisitos

| Ferramenta     | Finalidade                                      |
| -------------- | ----------------------------------------------- |
| **Git**        | Clonar o repositório e controlar versões        |
| **Node.js**    | Executar o ambiente JavaScript                  |
| **npm**        | Instalar e gerenciar as dependências do projeto |
| **Java JDK**   | Executar o WireMock                             |
| **PowerShell** | Executar os comandos deste guia                 |

---

## 📍2. Verificar as instalações

```powershell
git --version
node --version
npm --version
java -version
```

> **Importante:** caso algum comando não seja reconhecido, a respectiva ferramenta precisa ser instalada e configurada no `PATH` do sistema antes de continuar.

---

## 📍3. Clonar o repositório

```powershell
git clone https://github.com/diogoamanciosilva/QA-teste-api-wiremock-codeceptjs.git
cd QA-teste-api-wiremock-codeceptjs
```

---

## 📍4. Baixar o WireMock

O arquivo `wiremock-standalone-3.9.1.jar` não está versionado no repositório. Faça o download executando o comando abaixo na **raiz do projeto**:

```powershell
Invoke-WebRequest -Uri "https://repo1.maven.org/maven2/org/wiremock/wiremock-standalone/3.9.1/wiremock-standalone-3.9.1.jar" -OutFile "wiremock-standalone-3.9.1.jar"
```

Após o download, confirme que o arquivo está na raiz do projeto:

```powershell
dir *.jar
```

---

## 📍5. Instalar as dependências do projeto

```powershell
cd backend
npm install
```

> **Importante:** o comando `npm install` deve ser executado dentro da pasta `backend`.

---

# 🚀 Execução do projeto

A execução envolve dois processos rodando em paralelo — utilize **duas janelas do PowerShell**.

---

## 📍Terminal 1 — Iniciar o WireMock

Na raiz do projeto, execute:

```powershell
java -jar .\wiremock-standalone-3.9.1.jar --port 8080
```

Quando iniciado corretamente:

```text
version: 3.9.1
port: 8080
```

## 🎬 **Vídeo:**


https://github.com/user-attachments/assets/687afc1d-f93b-4820-99ba-f5e9046547e9

## 📸 **Print:**


<img width="1913" height="1078" alt="image" src="https://github.com/user-attachments/assets/7dd60178-5ee0-4723-bc18-9e2b7a8268ec" />


> ⚠️**Importante, Não feche esse terminal:** O WireMock precisa permanecer em execução durante os testes.

---

## 📍Terminal 2 — Executar os testes

```powershell
cd backend
npx codeceptjs run
```

### 📍Resultado esperado

```text
Consulta de veiculos --

  √ Fazendo um GET para o endpoint
  √ Cadastrando um veículo utilizando POST
  √ Validando veículo inexistente POST 404
  √ Validando veículo com erro POST 500

  OK  | 4 passed
```

## 🎬 **Vídeo:**


https://github.com/user-attachments/assets/4b4bad36-0754-4fd1-8218-c17393b2b952

## 📸 **Print:**

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/1428239d-7ac0-4951-97da-bf10e507f3c0" />


### 📍Modo detalhado

```powershell
npx codeceptjs run --verbose
```

## 🎬 **Vídeo:**

https://github.com/user-attachments/assets/d42b4911-3fe0-478a-b40d-a0d87f9a912e

## 📸 **Print:**

<img width="1913" height="726" alt="image" src="https://github.com/user-attachments/assets/fd32590c-111b-4593-8491-05506732cc38" />
<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/95789130-b832-4e41-9c18-a71abca4f2c6" />

---

# 🔄 Fluxo completo de execução

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

# ⚙️ Configuração do CodeceptJS

```javascript
helpers: {
  REST: {
    endpoint: 'http://localhost:8080',
    defaultHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  },
  JSONResponse: {}
}
```

> ⚠️**Importante:** A porta utilizada pelo WireMock e a configurada no `endpoint` do CodeceptJS precisam ser iguais.

---

# 🧩 Como o WireMock funciona neste projeto

```text
CodeceptJS
    │
    │ HTTP Request
    ▼
http://localhost:8080
    │
    ▼
WireMock
    │
    ├── GET  /api/cars → 200
    ├── POST /api/cars → 201
    ├── POST /api/cars → 404
    └── POST /api/cars → 500
```

---

# 🔭 Postman

O Postman complementa a automação como ferramenta de exploração e validação manual:

- **Validar endpoints** antes de automatizar
- **Conferir** método HTTP, payload e status codes
- **Diagnosticar** falhas durante o desenvolvimento

> ⚠️**Importante**: Postman → validação manual → CodeceptJS → automação → WireMock → simulação do backend.


# 🔎🚙 1. Consultar veículos

| ID | Descrição | Endpoint / Fluxo |
| :--- | :--- | :--- |
| **01** | **Cenário:** Consulta de lista de veículos cadastrados com sucesso <br><br> **Dado** que a API esteja online e com registros cadastrados na base de dados <br> **Quando** o cliente enviar uma requisição `GET` para o endpoint `/api/cars` <br> **Então** o sistema deve retornar a lista de veículos cadastrados | Consultar veículos → `GET /api/cars` → `200` |

🎬 **Vídeo:**

https://github.com/user-attachments/assets/76369f5c-6d55-410b-abad-0dc24e388ae4

---

# ➕🚘 2. Cadastrar um veículo válido

| ID | Descrição | Endpoint / Fluxo |
| :--- | :--- | :--- |
| **02** | **Cenário:** Cadastro de veículo com dados válidos <br><br> **Dado** que o payload da requisição contenha todos os campos obrigatórios e válidos <br> **Quando** o cliente enviar uma requisição `POST` para o endpoint `/api/cars` <br> **Então** o sistema deve cadastrar o veículo na base de dados | Cadastrar um veículo válido → `POST /api/cars` → `201` |

## 🎬 **Vídeo:**

https://github.com/user-attachments/assets/d6ed52f9-1536-4c3e-9c4c-c939ca61e228

---

# ⁉️🛻 3. Tentar cadastrar um veículo inexistente

| ID | Descrição | Endpoint / Fluxo |
| :--- | :--- | :--- |
| **03** | **Cenário:** Tentativa de cadastro referenciando um recurso inexistente <br><br> **Dado** que o payload informe um identificador de recurso não cadastrado <br> **Quando** o cliente enviar uma requisição `POST` para o endpoint `/api/cars` <br> **Então** o sistema deve recusar o cadastro | Tentar cadastrar um veículo inexistente → `POST /api/cars` → `404` |


## 🎬 **Vídeo:**

https://github.com/user-attachments/assets/53cf60da-51ed-4f51-820b-f6e1c1b8f48f

---

# 🚫🛞 4. Tentar cadastrar um modelo não permitido

| ID | Descrição | Endpoint / Fluxo |
| :--- | :--- | :--- |
| **04** | **Cenário:** Tentativa de cadastro com modelo não permitido <br><br> **Dado** que o payload contenha um modelo restrito ou inválido para o sistema <br> **Quando** o cliente enviar uma requisição `POST` para o endpoint `/api/cars` <br> **Então** o servidor deve retornar uma falha interna | Tentar cadastrar um modelo não permitido → `POST /api/cars` → `500` |

## 🎬 **Vídeo:**

https://github.com/user-attachments/assets/41e2e5ef-0b70-4623-a24e-5e31b2a15d8c

---

# 📊 Relatórios de testes: Mochawesome

O projeto utiliza o **Mochawesome Repor**t para gerar relatórios visuais das execuções dos testes automatizados realizados com CodeceptJS.

O relatório permite acompanhar de forma clara os cenários executados, resultados, falhas e duração dos testes, proporcionando maior visibilidade, rastreabilidade e facilidade na análise dos resultados.

Essa prática transforma os resultados da automação em uma evidência estruturada da qualidade da aplicação, facilitando a identificação de falhas e a comunicação dos resultados entre QA, desenvolvimento e demais envolvidos no projeto.

O projeto utiliza o **Mochawesome** para gerar relatórios visuais das execuções, o relatório pode ser consultado em:

```text
backend/mochawesome-report/mochawesome.html
```

## 🎬 **Vídeo:**

https://github.com/user-attachments/assets/d63cd263-7e91-4a78-bfe9-212dab089143

---

# 🛠️ Problemas comuns

| Sintoma                                 | Causa provável                                   | Solução                                                     |
| --------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------- |
| Testes retornam `404`                   | WireMock iniciado fora da raiz do projeto        | Inicie o WireMock na pasta que contém `mappings`            |
| `Invalid URL`                           | URL sem a barra inicial                          | Utilize `"/api/cars"` em vez de `"api/cars"`                |
| `I.seeResponseCodeIs is not a function` | Helper `JSONResponse` ausente                    | Adicione `JSONResponse: {}` na configuração                 |
| Porta `8080` em uso                     | Outro processo utilizando a porta                | Encerre o processo anterior ou utilize outra porta          |
| `java` não é reconhecido                | Java não instalado ou fora do `PATH`             | Instale o Java e execute `java -version`                    |
| `node` não é reconhecido                | Node.js não instalado ou fora do `PATH`          | Instale o Node.js e execute `node --version`                |
| `npm install` apresenta erro            | Comando executado fora da pasta `backend`        | Execute `cd backend` antes de `npm install`                 |
| Testes não conectam à API               | WireMock não está em execução                    | Inicie o WireMock na porta configurada                      |
| `Unable to access jarfile`              | Arquivo `.jar` ausente na raiz do projeto        | Execute o comando de download do WireMock (ver seção 4)     |

---

# ✅ Validação do ambiente

O ambiente está correto quando todas as condições abaixo forem atendidas:

| Etapa / Checklist | Categoria | Resultado Esperado |
| :--- | :---: | :--- |
| **Prerequisites** | Ambiente | Git, Node.js, npm e Java instalados e disponíveis no terminal |
| **Repository Setup** | Clonagem | Repositório clonado localmente com sucesso |
| **WireMock Setup** | Mock Backend | Arquivo JAR do WireMock baixado na raiz do projeto |
| **Dependencies** | Instalação | Dependências instaladas com `npm install` dentro de `backend/` |
| **Server Execution** | Mock Backend | Servidor WireMock iniciado e escutando na porta `8080` |
| **Test Execution** | Automação | Todos os 4 cenários de teste executados sem falhas |
| **Verification** | Terminal Output | Console exibe a confirmação de execução: `OK \| 4 passed` |

 ---

## 🚧 Limitações e escopo

Este projeto tem finalidade **didática** e foi desenvolvido a partir dos conhecimentos do curso *Automação de API com JavaScript*. 

- **API simulada:** A suíte de testes é executada contra uma infraestrutura de mocking (via WireMock), visando emular um recorte funcional do ambiente de produção. O objetivo é praticar a estrutura de automação (CodeceptJS, helpers `REST` e `JSONResponse`), a organização do projeto e a validação de respostas, não validar regras de negócio de uma aplicação.
- **Cobertura enxuta:** são quatro cenários sobre `/api/cars` (`GET` 200, `POST` 201, 404 e 500), escolhidos para exercitar sucesso e erro com qualidade, e não para cobrir a API de forma exaustiva.
- **Códigos de status didáticos:** o 404 e o 500 no `POST` foram adotados para simular comportamentos distintos de forma controlada. Em uma API real, erros de validação de payload normalmente seriam respondidos com `400` ou `422`.
- **Mock sem estado:** as respostas são fixas, ou seja, o veículo cadastrado no `POST` não aparece em um `GET` posterior.
- **Validações básicas:** as verificações se concentram em status code e mensagens de retorno, sem validação de schema, tipos de dados ou tempo de resposta.
- **Cenários negativos não explorados:** campos ausentes, valores inválidos, body vazio e métodos não suportados ficaram fora desta versão.
- **Execução manual:** o WireMock e os testes são executados em dois terminais separados. O guia foi validado em ambiente Windows com PowerShell.
- **Dependências com alertas do `npm audit`:** o `npm audit` reporta 12 vulnerabilidades (1 baixa, 8 moderadas e 3 altas) em dependências indiretas das ferramentas de teste (CodeceptJS e Mochawesome). A correção automática exige uma versão anterior do CodeceptJS (mudança incompatível), por isso foi adiada. As ferramentas são usadas apenas em ambiente de teste, contra um mock local.

------------


 ## 🚀 Próximos passos (CI/CD)

Evoluções planejadas, da mais simples à mais avançada:

1. ✅ **Execução local padronizada:** scripts no `package.json` (`npm run mock`, `npm test`, `npm run test:report`) e URL base por variável de ambiente (`BASE_URL`).
2. ✅ **`.jar` fora do repositório:** o WireMock é baixado por script (`npm run mock:setup`).
3. ✅ **Pipeline com GitHub Actions**, acionado em `push` e `pull request` para a `master`: instala dependências com `npm ci`, sobe o WireMock, executa os testes e publica o relatório Mochawesome como *artifact*.
4. ✅ **Badge de status** do pipeline no topo do README.
5. **Ampliar a cobertura:** cenários negativos (campos obrigatórios, tipos e valores inválidos), validação de schema das respostas e uso de *Scenarios* do WireMock para simular estado.
6. **Revisar os status codes** dos erros de validação, alinhando-os às boas práticas REST (`400`/`422`), e documentar a decisão.

 ---
 

## 💡 Aprendizados técnicos


- **Automação de testes de API com CodeceptJS:** configuração do projeto, escrita de cenários e execução da suíte via `npx codeceptjs run`, incluindo o modo `--verbose` para depuração.
- **Helpers `REST` e `JSONResponse`:** uso do `REST` para enviar requisições HTTP (`GET` e `POST`) e do `JSONResponse` para validar status code e corpo das respostas. Aprendi na prática que, sem o `JSONResponse` configurado, os métodos de validação, como `seeResponseCodeIs`, não ficam disponíveis.
- **Configuração de ambiente de testes:** definição da URL base e dos `defaultHeaders` no `codecept.conf.js`, uso de caminhos relativos com barra inicial (`/api/cars`) e a necessidade de manter a porta do WireMock alinhada com o `endpoint` do CodeceptJS.
  
- **Mocking de API com WireMock:** criação de mappings em JSON para simular diferentes respostas de um mesmo endpoint, permitindo testar cenários de sucesso e de erro de forma controlada e sem depender de um backend real.
- **Cenários positivos e negativos:** validação de respostas `200`, `201`, `404` e `500`, entendendo a importância de testar não só o caminho feliz, mas também o comportamento diante de falhas.
- **Códigos de status HTTP:** compreensão do significado de cada código e senso crítico sobre sua adequação. Neste projeto, o 404 e o 500 foram usados com finalidade didática, e reconheço que, em uma API real, erros de validação seriam tratados com `400` ou `422`.

- **Testes exploratórios de API com Postman:** uso do Postman como etapa prévia à automação. Antes de transformar um cenário em teste no CodeceptJS, eu enviava as requisições `GET /api/cars` e `POST /api/cars` manualmente para:
  - Confirmar o comportamento esperado do endpoint (método HTTP, payload JSON, status code e mensagem retornada);
  - Validar se o WireMock respondia conforme o mapping configurado;
  - Diagnosticar falhas, comparando o resultado manual com o resultado da automação para descobrir se o problema estava no teste, no mock ou no ambiente.
 
  Com isso, entendi que o **Postman** complementa a automação, funcionando como ferramenta de exploração, validação e diagnóstico, enquanto o **CodeceptJS** garante a execução repetível e confiável dos cenários.
  
- **Relatórios de execução:** geração de relatório visual com Mochawesome, facilitando a análise de resultados e a comunicação com outras pessoas do time.
- **Diagnóstico de problemas:** análise de erros comuns do ambiente (WireMock iniciado fora da raiz do projeto, porta em uso, Java ou Node fora do `PATH`, `npm install` executado na pasta errada) e registro das soluções na tabela de *Problemas comuns*.
- **Organização e documentação:** estruturação do repositório em pastas com responsabilidades claras (`backend/` e `mappings/`) e escrita de um README com passo a passo reproduzível.
- **Versionamento com Git e GitHub:** uso do Git para controle de versão e publicação do projeto como portfólio.
- **Visão crítica e evolução:** identificação das limitações do projeto e planejamento dos próximos passos (CI/CD com GitHub Actions, ampliação de cobertura e validação de schema).
 ---
 
 ## 📬 Contato

| LinkedIn                   |  https://www.linkedin.com/in/diogoamanciosilva/ |
| ------------------------- | ------: |

| E-mail                   |  diogoamanciosilva@gmail.com/ |
| ------------------------- | ------: |


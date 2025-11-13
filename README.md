# To-Do List 📝

Aplicação de lista de tarefas profissional desenvolvida como projeto de aprendizado, seguindo as melhores práticas do mercado.

## 🚀 Tecnologias

### Backend

- **Node.js** com Express
- **TypeScript** para type safety
- **Prisma** ORM para gerenciamento do banco de dados
- **PostgreSQL** como banco de dados

### Frontend

- **React** com TypeScript
- **Vite** como bundler
- **Tailwind CSS** para estilização
- **Axios** para requisições HTTP

### Ferramentas de Desenvolvimento

- **ESLint** para análise de código
- **Prettier** para formatação

## 📋 Funcionalidades

- [x] Criar tarefas
- [x] Listar tarefas
- [x] Atualizar tarefas
- [x] Deletar tarefas
- [x] Marcar tarefas como concluídas
- [x] API RESTful completa
- [x] Interface responsiva

## 🔧 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **PostgreSQL** (versão 12 ou superior)
- **npm** ou **yarn**

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/icarofurlaneto/to-do-list-project.git
cd to-do-list-project
```

### 2. Configure o Backend

```bash
cd backend
npm install
```

Crie um arquivo `.env` na pasta `backend` com as seguintes variáveis:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/todolist"
PORT=3000
```

Execute as migrations do Prisma:

```bash
npx prisma migrate dev
```

### 3. Configure o Frontend

```bash
cd ../frontend
npm install
```

Crie um arquivo `.env` na pasta `frontend`:

```env
VITE_API_URL=http://localhost:3000
```

## 🎯 Como Rodar

### Iniciar o Backend

```bash
cd backend
npm run dev
```

O servidor estará rodando em `http://localhost:3000`

### Iniciar o Frontend

Em outro terminal:

```bash
cd frontend
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 📁 Estrutura do Projeto

```text
to-do-list-project/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma      # Schema do banco de dados
│   │   └── migrations/        # Migrations do Prisma
│   ├── src/
│   │   ├── config/            # Configurações (database)
│   │   ├── controllers/       # Controladores da API
│   │   ├── routes/            # Rotas da API
│   │   ├── middlewares/       # Middlewares personalizados
│   │   └── server.ts          # Arquivo principal do servidor
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── components/        # Componentes React
│   │   │   ├── TaskForm.tsx
│   │   │   ├── TaskItem.tsx
│   │   │   └── TaskList.tsx
│   │   ├── services/          # Serviços (API)
│   │   ├── types/             # Tipos TypeScript
│   │   ├── App.tsx            # Componente principal
│   │   └── main.tsx           # Ponto de entrada
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.js
│
└── README.md
```

## 🔌 API Endpoints

### Tasks

- `GET /api/tasks` - Lista todas as tarefas
- `POST /api/tasks` - Cria uma nova tarefa
- `PUT /api/tasks/:id` - Atualiza uma tarefa
- `DELETE /api/tasks/:id` - Deleta uma tarefa

### Exemplo de Requisição

```bash
# Criar uma tarefa
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Minha tarefa", "description": "Descrição da tarefa"}'
```

## 🧪 Testes

_Em desenvolvimento..._

## � Aprendizados

Este projeto foi desenvolvido com foco em:

- **Arquitetura RESTful** - Estruturação de APIs seguindo padrões REST
- **TypeScript** - Tipagem estática para código mais seguro
- **Prisma ORM** - Gerenciamento moderno de banco de dados
- **React Hooks** - Componentes funcionais e gerenciamento de estado
- **Boas práticas** - Clean Code, separação de concerns, etc.

## 🚧 Possíveis implementações futuras

- [ ] Implementar autenticação de usuários
- [ ] Adicionar filtros e ordenação de tarefas
- [ ] Implementar testes unitários e de integração
- [ ] Deploy da aplicação

## ‍💻 Autor

Icaro Furlaneto


# Top News
Aplicação de back-end para o desafio técnico da vaga de back-end node júnior. Nesta aplicação, é possível gerenciar o back-end de um pequeno site de notícias através de requisições HTTP(s) seguindo a convenção REST.

# Demo
[Link do projeto]()

# Como funciona?
Este projeto é uma API REST para atender a aplicação de notícias rápidas da TopNews. Ela possui apenas uma única entidade: `news`. As características desta entidade estão no arquivo `schema.prisma`.

Para entidade, foram criadas cinco rotas:

- GET `/news`: Retorna todas as notícias cadastradas.
- GET `/news/:id`: Busca uma notícia específica dado um id. Se não for encontrado, retorna um erro 404. Se o id for inválido, um erro 400.
- POST `/news`: Cria uma nova notícia. As notícias não podem ter títulos iguais, caso isso aconteça, um erro 409 é retornado. A estrutura esperada para uma notícia é:
```
{
 "title": string
 "text": string
 "author": string
 "firstHand": boolean (opcional)
}
```

Se a estrutura não for respeitada, um erro 422 é retornado.

- PUT `/news/:id`: Atualiza os dados de uma notícia dado o seu id e os campos enviados. Se o id não corresponder a nenhuma notícia, o erro 404 é retornado. A estrutura esperada para uma notícia é o mesmo do POST.
- DELETE `/news/:id`: Deleta uma notícia dado o seu id. Se a notícia não existir, o erro 404 é retornado.


# Motivação (opcional)
Este projeto foi feito para praticar a construção de uma API REST usando o ecossistema Node e Express junto com as tecnologias TypeScript e Prisma.

# Tecnologias utilizadas
Para este projeto, foram utilizadas:

- Node (versão 18.17.0);
- Express;
- TypeScript;
- Prisma;
- Postgres;
- Redis;
- MongoDb;
- Jest e Supertest;
- Joi;
- JWT.

# Como rodar em desenvolvimento
Para executar este projeto em desenvolvimento, é necessário seguir os passos abaixo:

- Clonar o repositório;
- Baixar as dependências necessárias com o comando: `npm install`;
- Em seguida, criar o arquivo `.env` com base no `.env.example`;
- Para poder executar os testes, será necessário criar um outro arquivo `.env.test` com base no `.env.example`;
- Este arquivo `.env` é composto pelas seguintes propriedades:
```
  DATABASE_URL="postgresql://postgres..."
```
- A propriedade `DATABASE_URL` é usada para fazer a conexão com o banco de dados.

- Será necessário executar o Prisma para criar o banco de dados e as tabelas necessárias. Para isso, execute o comando: `npx prisma migrate dev`;
- Para rodar o projeto em desenvolvimento, execute o comando `npm run dev`;
- Testes manuais podem ser feitos através do Thunder Client. Na raiz do projeto há uma coleção chamada `thunder-collection.json` que pode ser carregada na ferramenta.

# Como rodar em produção (opcional)
- Buildar o projeto com npm run build;
- Subir plataforma ajsijdoiasjoidasjo
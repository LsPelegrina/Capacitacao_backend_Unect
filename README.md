# Capacitacao_backend_Unect


## Descrição do Projeto

O projeto consiste no desenvolvimento de um backend no formato CRUD para alunos
utilizando node.js, Express e mongoDB. O modelo de aluno deve possuir os seguintes
atributos:<br>
● _id: Gerado automaticamente pelo mongoDB<br>
● name (string)<br>
● age (number)<br>
● ra (string)<br>
● cpf (string)<br>
● createdAt (string): Data gerada quando um novo aluno é criado. Utilizar a biblioteca
moment - https://www.npmjs.com/package/moment<br>
● updatedAt (string): Data gerada sempre que um aluno é alterado. Também utilizar a
biblioteca moment.<br>
O foco desse projeto é capacitar os membros no básico de como desenvolver uma API com
node.js, Express e mongoDB, desenvolvendo todas as principais operações de um backend
web.<br>


## Entrega final

No dia da entrega (17/04) deverá ser entregue o repositório do projeto no github possuindo as
seguintes rotas funcionais:<br>
● POST de um aluno<br>
● GET de todos os alunos criados<br>
● GET de um aluno a partir do seu ID<br>
● PUT/PATCH de um aluno a partir do seu ID<br>
● DELETE de um aluno a partir do seu ID<br>
● Extra: no método de listagem de todos os alunos, adicionar a opção de filtrar através
de query pelo RA ou nome.<br>

## Documentação

A documentação da API foi feita utilizando o swagger-ui, para acessar a documentação entre no path /api-docs/, onde estão todas as rotas.

## Teste de rotas

Para o teste das rotas foi utilizado uma extensão do visual studio code, onde você cria um arquivo .http, e consegue fazer requisições para API, o arquivo está no repositorio explicado, e de fácil acesso, e uso.


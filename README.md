# Store Manager 🏬

## 📄 Sobre:

Projeto desenvolvido durante o módulo de back-end do curso de desenvolvimento web da [Trybe](https://www.betrybe.com/).

Neste projeto foi desenvolvida uma API RESTful de gerenciamento de vendas no formato dropshipping. Dentro da API é possível criar, visualizar, deletar e atualizar os produtos e as vendas.

Para está aplicação foi utilizado um banco de dados <strong>MySQL</strong>.

A API foi criada utilizando arquitetura <strong>MSC (model-service-controller)</strong>.

Foram desenvolvidos testes unitários para a aplicação utilizando as ferramentas <strong>Mocha, Chai e Sinon</strong>.

</br>
<details>
<summary><strong>Desempenho</strong></summary>
Aprovado com 100% de desempenho em todos os requisitos
</details>

<details>
<summary><strong>Requisitos</strong></summary>
</br>
<strong>Requisitos obrigatórios:</strong> </br>

1. Crie endpoints para listar produtos </br>
2. Desenvolva testes que cubram no mínimo 5% das camadas da sua aplicação </br>
3. Crie endpoint para cadastrar produtos </br>
4. Crie validações para produtos </br>
5. Desenvolva testes que cubram no mínimo 10% das camadas da sua aplicação </br>
6. Crie endpoint para validar e cadastrar vendas </br>
7. Desenvolva testes que cubram no mínimo 15% das camadas da sua aplicação </br>
8. Crie endpoints para listar vendas </br>
9. Desenvolva testes que cubram no mínimo 20% das camadas da sua aplicação </br>
10. Crie endpoint para atualizar um produto </br>
11. Desenvolva testes que cubram no mínimo 25% das camadas da sua aplicação </br>
12. Crie endpoint para deletar um produto </br>
</br>

<strong>Requisitos bônus:</strong> </br>

13. Desenvolva testes que cubram no mínimo 30% das camadas da sua aplicação </br>
14. Crie endpoint para deletar uma venda </br>
15. Desenvolva testes que cubram no mínimo 35% das camadas da sua aplicação </br>
16. Crie endpoint para atualizar uma venda </br>
17. Desenvolva testes que cubram no mínimo 40% das camadas da sua aplicação </br>
18. Crie endpoint products/search?q=searchTerm </br>
19. Desenvolva testes que cubram no mínimo 50% das camadas da sua aplicação </br>
20. Desenvolva testes que cubram no mínimo 60% das camadas da sua aplicação </br>
</details>

<details>
<summary><strong>Diagrama Entidade-Relacionamento</strong></summary>
 
![image](https://user-images.githubusercontent.com/99846604/209247552-b1c6ddba-8506-44c3-ae2f-d40bbd496f99.png)
 
</details>
</br>

## ↪️ Rotas:
### Products:
<details>
<summary><strong>GET /products</strong></summary>
 
Lista todos os produtos cadastrados no banco de dados </br>
> * Se bem-sucedido, retorna status 200 e um array com todos os produtos cadastrados

</details>
<details>
<summary><strong>GET /products/:id</strong></summary>
 
Lista apenas o produto correspondente ao id da rota </br>
> * Se bem-sucedido, retorna status 200 e um objeto contendo as informações do produto

</details>
<details>
<summary><strong>GET /products/search?q=searchTerm</strong></summary>
 
Lista todos os produtos que possuem em seu nome o termo passado na rota</br>
> * Se bem-sucedido, retorna status 200 e um array contendo os produtos que correspondem a busca
> * Se o termo de busca for vazio, retorna status 200 e um array contendo todos os produtos cadastrados

</details>
<details>
<summary><strong>POST /products</strong></summary>
 
Cadastra um novo produto no banco de dados</br>
> * Se bem-sucedido, retorna status 201 e um objeto contendo os dados do novo produto

</details>
<details>
<summary><strong>PUT /products/:id</strong></summary>
 
Altera as informações de um produto cadastrado no banco de dados </br>
> * Se bem-sucedido, retorna status 200 e um objeto contendo os dados atualizados do produto

</details>
<details>
<summary><strong>DELETE /products/:id</strong></summary>
 
Remove um produto cadastrado do banco de dados </br>
> * Se bem-sucedido, retorna apenas o status 204

</details>

### Sales:
<details>
<summary><strong>GET /sales</strong></summary>

Lista todas as vendas cadastradas no banco de dados </br>
> * Se bem-sucedido, retorna status 200 e um array com todas as vendas cadastradas

</details>
<details>
<summary><strong>GET /sales/:id</strong></summary>

Lista apenas a venda correspondente ao id da rota </br>
> * Se bem-sucedido, retorna status 200 e um array contendo as informações da venda

</details>
<details>
<summary><strong>POST /sales</strong></summary>

Cadastra uma nova venda no banco de dados </br>
> * Se bem-sucedido, retorna status 201 e um objeto contendo o id da venda e um array com as informações dos produtos vendidos

</details>
<details>
<summary><strong>PUT /sales/:id</strong></summary>

Altera as informações de uma venda cadastrada no banco de dados
> * Se bem-sucedido, retorna status 200 e um objeto contendo o id da venda e um array com as informações atualizadas dos produtos vendidos

</details>
<details>
<summary><strong>DELETE /sales/:id</strong></summary>

Remove uma venda cadastrada no banco de dados
> * Se bem-sucedido, retorna apenas um status 204

</details>
</br>


## 🤹🏽 Habilidades Desenvolvidas:
* Criar uma aplicação utilizando Express.js
* Criar uma API RESTful utilizando arquitetura MSC (Model-Service-Controller)
* Validar dados das requisições utilizando a biblioteca Joi
* Implementar testes unitários utilizando as ferramentas Mocha, Chai e Sinon
</br>

## 🧰 Ferramentas:
* JavaScript
* Node.js
  * Express.js
* DotEnv
* Joi
* MySQL
* Mocha.js
* Chai.js
* Sinon.js
* Docker
</br>

## 📝 Desenvolvido por:
* [João Emanuel Soares Pacheco](https://github.com/joaoespacheco)

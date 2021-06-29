# Teste Unidas

Teste do processo seletivo da Unidas, realizado em NodeJS e Express.

## Instalação

Utilize o NodeJS na versão >= 16.4 e rode o comando abaixo no terminal através da pasta principal do projeto.

```bash
npm install
```

## Como rodar

Vá até a pasta principal, abra o terminal e rode o comando a seguir. Estará utilizando a porta 8085 porém basta editar a linha 3 no arquivo server.js para alterar a porta.

```bash
node server.js
```

## Uso

A API irá retornar true ou false de acordo com o teste feito na senha enviada para saber se atende aos requisitos mínimos:

* mínimo de 9 caracteres
* sem repetição de caracteres
* ao menos um número (0-9)
* ao menos uma letra maiúscula (AZ)
* ao menos uma letra minúscula (az)
* ao menos um caractere especial entre !@#$%^*()-+

Basta enviar uma requisição em JSON para http://localhost:8085/verifica_senha/ com a senha no seguinte formato:

```javascript
{'valor': 'senha_para_ser_testada'}
```

O retorno será:

```javascript
// caso a senha atenda aos requisitos
{'senha_valida': 'true'}
// caso não atenda
{'senha_valida': 'false'}

## Exemplo de uso pelo terminal:

```bash
curl -d '{"valor":"AcZp7*bar"}' -H "Content-Type: application/json" http://localhost:8085/verifica_senha {"valor":"AcZp7*bar"}
```

## Para testes unitários:
```bash
node server.test
```
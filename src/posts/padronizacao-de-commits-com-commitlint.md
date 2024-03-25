---
title: "Padronização de commits com commitlint"
description: "Mostrando um passo a passo de como criar uma padronização de commits"
category: "Git"
date: "2021-07-29"
thumbnail: "/images/git/git-1.jpg"
---

## Resumo

Falaaa pessoal, muitas pessoas já me perguntaram algumas formas de como fazer commit, ou até mesmo se existe um jeito certo quando se trabalha em um projeto grande, por isso hoje eu vou mostrar como padronizar em seus projetos os commits e não deixar aquele commit todo feito sem informações coerentes irem para a branch.

Para isso iremos usar o `commitlint` e como bônus irei mostrar como implementar o `commitizen`, uma interface via linha de comando sensacional para que você possa interagir e facilitar ainda mais os commits

## Commitlint

### O que é o Commitlint ❓

O commitlint nada mais é que um hook que fica ativo na sua aplicação ouvindo suas mensagens de commit, então toda vez que houver um commit só irá continuar caso o commit se encaixe em algum dos padrões convencioneis

```sh
type(scope?): subject #scope é opcional
```

### Exemplos reais podem ser assim 👇

```sh
chore: run tests on travis ci

fix(server): send cors headers

feat(blog): add comment section
```

### Vamos configurar ⚙️

Antes de tudo vamos instalar as dependências do `@commitlint/config-conventional` `@commitlint/cli`

Vamos usar o `-D` para instalar apenas em desenvolvimento

```sh
yarn add -D @commitlint/config-conventional @commitlint/cli
```

Após instalar é preciso configurar o commitlint para entender a configuração convencional criando pelo pessoal do Angular
Aqui no caso ele cria um arquivo chamado `commitlint.config.js` que extends o modulo do config-conventional e a partir disso vai começar a funcionar

```sh
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

E para validar os commits, pode usar o hook `commit-msg` do `Husky`

```sh
yarn add -D husky
```

Ativar o hook

```sh
yarn husk install
```

Adicionando o hook `commit-msg`

```
yarn husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

Depois de tudo isso chegou a hora de testar, existe duas formas de testar de testar que é realizando o commit direto, ou um commit fake, que no nosso caso faz mais sentido e para isso vamos usar o terminal.

```sh
$ echo "testing commit" | yarn commitlint

# return
⧗   input: testing commit
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

Executando o comando no terminal `echo "testing commit" | yarn commitlint` ele apresenta alguns erros como a falta do subject e type

No exemplo apresentado a cima jamais iríamos querer que um commit desse fosse para a produção.

Portando agora vou apresentar um exemplo válido

```sh
$ echo "chore(test): testing commit" | yarn commitlint

# return
Done
```

No comando `echo "chore(test): testing commit" | yarn commitlint`

Informo coisas importantes para o meu commit, o `chore` é um dos typos que existem dentro do `commitlint-config-conventional`

Dentro das `( )` informei o escopo que estou trabalhando dentro do meu projeto, que pode ser qualquer coisa

E após os `:` escrevo minha mensagem de commit referente as modificações no projeto

Portando quando for realizar o commit de alguma atividade o passo-a-passo ficará assim:

```sh
git add .
git commit -m "chore(local): alteração realizada"
git push
```

## Commitizen

### O que é Commitizen ❓

É um facilitador de commit de acordo com o `config-conventional`, é usado via terminal onde abre uma interface que trás um passo a passo, até você finalizar seu `commit`

### Vamos configurar ⚙️

Primeiro de tudo devemos instalar.

```sh
yarn add -D commitizen
```

Após instalar é preciso inicializar o commitizen

Usando **NPM**

```sh
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

Usando **YARN**

```sh
yarn commitizen init cz-conventional-changelog --yarn --dev --exact
```

Com esse comando, dentro do `package.json` foi adicionado uma sessão de config para o commitizen, apontando o caminho de instalação.

E para utilizar o `commitizen` de forma mais fácil geral é criado um script dentro do `package.json`

```sh
"scripts": {
  "commit": "yarn cz"
}
```

Para utilizar esse comando é preciso rodar

```sh
yarn commit
```

E em seguida é aberto uma interface gráfica de terminal de irá auxiliar no processo de mensagem de **commit**.

E o passo a passo para realizar o commit usando o commitizen

- **git add .**
- **yarn commmit**
  - _Select the type of change that you're committing:_
    - **Informar o tipo commit está realizando.**
  - _What is the scope of this change (e.g. component or file name): (press enter to skip)_
    - **Informar o escopo que está trabalhando, pode ser um componente, tela ou tarefa, caso não seja necessário, apenas dar enter.**
  - _Write a short, imperative tense description of the change (max 86 chars):_
    - Fazer uma breve descrição da atividade.
  - _Provide a longer description of the change: (press enter to skip)_
    - **Poser ser usado para realizar uma longa descrição, caso não seja necessário, apenas dar enter.**
  - _Are there any breaking changes? (y/N)_
    - **Digitar y caso as alterações afetem comportamentos de outros componentes ou algo do tipo, caso não seja necessário, apenas digitar N.**
  - _Does this change affect any open issues? (y/N)_
    - **Digitar y caso esse commit finalize alguma issue que esteja aberta, caso não seja necessário, apenas digitar N.**
- **git push**

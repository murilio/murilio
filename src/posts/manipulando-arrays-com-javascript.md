---
title: 'Manipulando Arrays com JavaScript'
description: 'Hoje vou desmistificar um pouco sobre arrays no JavaScript'
category: 'JavaScript'
date: '2021-05-28'
thumbnail: '/images/javascript/javascript-2.jpg'
---

## Início
Vejo que várias pessoas pessoas tem dificuldades em trabalhar com arrays.

Por isso hoje eu vim desmistificar um pouco sobre os Arrays.


## O que é um Array?!
O objeto `Array` do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.

[Fonte: MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array#sum%C3%A1rio)


### Criando um Array

```
const pessoas = ['Murilio', 'Mateus']

console.log(pessoas.length) // 2
```

Ao contrário que muitas pessoas pensam criar um array é a coisa mais simples. No exemplo acima com o length é obtido o tamanho do Array.

### Adicionar um item ao final do Array

```
const pessoas = ['Murilio', 'Mateus']
pessoas.push('Carlos')

console.log(pessoas) // ['Murilio', 'Mateus', 'Carlos']
```

Como podemos notar, quando se trabalha com `Array` o próprio JavaScript cria funções por padrão para auxiliar, um deles é o `push`.

O comportamento do `push` é adicionar um novo item ao final do Array, simples né?!


### Adicionar um item ao início do Array

```
const pessoas = ['Murilio', 'Mateus']
pessoas.unshift('Carlos')

console.log(pessoas) // ['Carlos', 'Murilio', 'Mateus']
```

A função `unshift`, é outro criado por padrão pelo JavaScript. E tem o comportamento de adicionar um novo item ao início do Array.


### Remover um item do final do Array

```
const pessoas = ['Murilio', 'Mateus', 'Carlos']
pessoas.pop() // remove o ultimo, no caso 'Carlos'

console.log(pessoas) // ['Murilio', 'Mateus']
```

A função `pop`, é outro criado por padrão pelo JavaScript. O comportamento do `pop` é de sempre remover o último item do Array.


### Remover um item do início do Array

```
const pessoas = ['Murilio', 'Mateus']
pessoas.shift() // remove o primeiro, no caso 'Murilio'

console.log(pessoas) // ['Mateus']
```

A função `shift`, é outro criado por padrão pelo JavaScript. O comportamento do `shift` é de sempre remover o primeiro item do Array.


### Procurar um item pelo índice

```
const pessoas = ['Murilio', 'Mateus', 'Carlos']

const posicao = pessoas.indexOf('Murilio')
console.log(posicao) // 0
```

A função `indexOf` é responsável por buscar um item pelo o seu valor e retornar a posição dele.

Como mostrado no exemplo acima.


### Remover um item pelo índice

```
const pessoas = ['Murilio', 'Mateus', 'Carlos']

pessoas.splice(0, 1)

console.log(pessoas) // ['Mateus', 'Carlos']
```
A função `splice`, recebe 2 parâmetros por padrão, o primeiro é a posição do Array, e o segundo é a quantidade de items a partir da posição informada, no exemplo a cima, falei que quero remover apenas `1` item a partir da posição `0`


## Métodos ES6 Array
Com o lançamento da versão do ES6 alguns novos métodos para se trabalharem com Arrays foram adicionados.


### Array.map
A função `.map` percorre um array e devolve um novo array como resultado.


```
const numbers = [1, 2, 3]
numbers.map(num => console.log(num * 2))

// 2, 4, 6
```

No exemplo acima a função `map` recebe um parâmetro e uma função de callback, o parâmetro `num` é cada posição do array, na função de callback é impresso o valor do array * 2.


### Array.filter
O função `.filter` cria um novo array com itens que passarem no teste.


```
const numbers = [18, 30, 5, 13, 100, 99, 51]
const numbersPairs = numbers.filter(num => num % 2 === 0)

console.log(numbers) // [18, 30,  5, 13, 100, 99, 51]
console.log(numbersPairs) // [18, 30, 100]
```
No exemplo acima a função `filter` recebe um parâmetro e uma função de callback, na função de callback é onde vai ficar o nosso teste, que no exemplo verifiquei se o resto da divisão é = 0, se o número passar no teste, então ele vai para o array de números pares.


### Array.find
A função `.find` retorna o apenas o primeiro valor que passar no teste.


```
const numbers = [18, 30, 5, 13, 100, 99, 51]
const findFirstNumber = numbers.find(num => num > 30)

console.log(numbers) // [18, 30,  5, 13, 100, 99, 51]
console.log(findFirstNumber) // 100
```
No exemplo acima o único número que passa no teste é o `100`, pois na ordem do array é o próximo número maior que `30`


#### Finish
Bom pessoal, essas são as principais formas de se trabalhar com arrays dentro do JavaScript, espero que tenham gostado e compartilhe entre os amigos de vocês.


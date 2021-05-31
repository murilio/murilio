---
title: 'Trabalhando com array em Golang'
description: 'Aqui está um pequeno artigo de como trabalhar com array em Go'
category: 'Golang'
date: '2021-06-01'
thumbnail: '/golang/golang-2.jpg'
---

## Início
array sao estruturas de dados

os arrays são estruturas homogêneas e estáticas (no caso, elas sempre vão ter o mesmo tipo e mesmo tamanho quando for definido)

vale lembrar também que o array é uma estrutura indexada e que cada elemento tem um index, partindo do índice 0

### Declarando o primeiro array

```
var notas [3]float64
fmt.Println(notas) // [0 0 0]
```

no exemplo acima a variável notas recebe um array e dentro do colchetes pode ser passado o tamanho do array, depois é passado o tipo de dado que o array vai possuir

como não foi passado nenhum valor para o array, ele imprime tudo 0, que é o valor default do float64

```
numeros := [...]int{1, 2, 3, 4, 5}
```

no exemplo acima, criei um array um pouco diferente do array acima, neste caso passei como parâmetro do colchetes `[...]` três pontinhos, isso representa que o array vai ter um tamanho fixo de acordo com a quantidade de parâmetros que eu passar.

portando criei o array do tipo `int` e dentro as chaves passei o seu conteúdo, que são cinco valores e o compilador que faz a contagem da quantidade.

### Passando valores para o array

```
var notas [3]float64
notas[0], notas[1], notas[2] = 7.9, 5.3, 7.8
fmt.Println(notas) // [7.9 5.3 7.8]
```

como o meu array tem um tamanho fixo de 3 posições, logo eu só posso 3 valores partindo do índice 0, caso eu tente passar um valor para um índice que não existe, o próprio Go irá informar que existe um erro.

aqui como passei um valor para índice, quando imprimo o array ele me retorna os valores passados para cada índice


### Percorrendo o array usando For

```
var notas [3]float64
notas[0], notas[1], notas[2] = 7.9, 5.3, 7.8

total := 0.0
for i := 0; i < len(notas); i++ {
  total += notas[i]
}

media := total / float64(len(notas))
fmt.Printf("Média %.2f", media) // 7
```
aqui faço um for, logo em seguida inicializo o contador `i` = 0, e uso uma função chamada `len` para poder calcular o tamanho do array e depois vou incrementando o contador que é a variável `i`.

e dentro da função vou pegar cada uma das notas e ir somando e atribuindo a variável `total`.

agora nossa variável notas tem o valor somando, depois disso vou calcular a média das notas.

então crio um variável media onde vai receber o valor de nota divido pelo tamanho do array, so que fazendo isso surge um problema, pois a variável notas é do tipo float64 e o tamanho do array é um tamanho inteiro, neste caso tenho que pegar o tamanho do array e converter em float64.

para isso uso a função `float64` e passo como parâmetro a função `len` passando o array

depois imprimo no console o resultado da média usando a função `printf` passando `%.2f`, isso significa que quero imprimir valor de ponto flutuante e que só quero imprimir 2 casas após o ponto

### Percorrendo array usando Range

```
numeros := [...]int{1, 2, 3, 4, 5}

for i, num := range numeros {
  fmt.Println("%d: %d", i, num)
}
```

o exemplo de código a cima é pra usar o `range` para percorrer um array.

este formato de `array` é explicado na sessão de como declarar o primeiro array, dando continuidade ao for inicializo um contador e uma variável num que irá receber o valor de cada item do array, dentro do array vou imprimir os valores, usei a função `Println` e passei como parâmetro %d pois quero imprimir um inteiro e os valores a serem impressos e logo abaixo tem o resultado.


```
// output
0: 1
1: 2
2: 3
3: 4
4: 5
```

no go existe uma forma de ignorar valores, no caso se o valor do contador não fosse necessário, poderia ser ignorado como no exemplo:

```
numeros := [...]int{1, 2, 3, 4, 5}

for _, num := range numeros {
  fmt.Println(num)
}
```

e aqui eu imprimo apenas o valor contido no array e ignoro o contador.

```
// output
1
2
3
4
5
```

### Conhecendo o slice


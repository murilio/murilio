---
title: 'Converter string em slug e slug em string usando regex'
description: 'Nesse tutorial vou mostrar como criar funções com JavaScript para criar um slug de acordo com um texto e fazer o processo inverso, converter um slug em string usando javascript e regex'
category: 'JavaScript'
date: '2021-05-21'
thumbnail: '/javascript/javascript-1.png'
---

## Motivação
- Acredito que alguma vez na sua vida de `dev` você precisou converter uma string em slug ou o processo inverso,
eu precisei fazer isso a um tempo atrás e achei alguns tutoriais, mas sempre coisa muito complicada, por isso decidi
escrever um pequeno artigo explicando a função para quem precisar.

## Funções
### Criando o slug
- logo abaixo tem a função de recebe um parâmetro chamado string.
- em seguida temos que tratar a string recebida, primeiro é removido os caracteres especiais e deixo tudo em minúsculo.
- caracteres como `àáäâè...` não conseguimos tratar no regex, é preciso fazer um for comparando os caracteres, por isso temos duas strings, os valores de entrada e o de saída.
- após o for é feito outro regex `replace(/[^a-z0-9 -]/g, '')` dizendo que é permitido apenas letras e números, no próximo regex `replace(/\s+/g, '-')` onde houver espaço em branco vai colocar um `-`, e na terceira linha de regex `replace(/-+/g, '-')` ele verifica onde tem `-` e substitui pra não haver duplicidade.

```
function convertStringToSlug (string) {
  string = string.replace(/^\s+|\s+$/g, '')
  string = string.toLowerCase()

  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
  const to = 'aaaaeeeeiiiioooouuuunc------'

  for (let i = 0, l = from.length; i < l; i++) {
    string = string.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  string = string.replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

  return string
}

```

#### Usando a função pra criar o slug
- aqui é um exemplo de como usar a função, criei uma string e passei como parâmetro e um `console.log` no retorno da função e esse é o resultado.

```
const string = 'Converter string em slug e slug em string usando regex'

console.log(convertStringToSlug(string))

#output:  converter-string-em-slug-e-slug-em-string-usando-regex
```

### Criando uma string com base no slug
- para fazer o processo reverso eu acho ate mais fácil, o regex é bem menor, vamos criar a função.
- podemos ver que vai receber um parâmetro um slug em formato de string.
- logo após isso o regex é bem menos complexo do que o anterior, na primeira linha `replace(/-/g, ' ')` onde tiver `-` é removido e colocado um espaço, nas outras linhas `.replace(/oe/g, 'ö').replace(/ae/g, 'ä').replace(/ue/g, 'ü')` ele pega palavras que por padrão deveria existir algum tipo e acento, e na ultima `replace(/\?.*/, '')` é removido os caracteres especiais caso na url exista alguma `query` ou algo do tipo.

```
function convertSlugToString (slug) {
  return slug
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .replace(/\?.*/, '')
}

```

#### Usando a função reverter o slug em uma string
- aqui é um exemplo de como usar a função, criei uma string e passei como parâmetro e um `console.log` no retorno da função e esse é o resultado.

```
const slug = 'converter-string-em-slug-e-slug-em-string-usando-regex'

console.log(convertSlugToString(slug))

#output: converter string em slug e slug em string usando regex

```

## Finish
- pessoal esse foi mais um post no meu blog, mostrando como criar um slug a partir de uma string e fazer o processo inverso, espero que seja válido.


---
title: 'Atributos HTML que você precisa conhecer'
description: 'Nesse post vou apresentar alguns atributos HTML desconhecidos pela maioria dos devs front-end'
category: 'HTML'
date: '2021-06-22'
thumbnail: '/images/html/html-1.jpg'
---

## Motivação
Fallaaaaaa pessoal, hoje venho mostrar a vocẽs algumas tags HTML que poucos conhecem.

Então vamos aos exemplos de Tags HTML

### ContentEditable
Esse é um `atributo global` onde, quando ele estiver habilitado como true, o navegador permite a edição do conteúdo, tornando seu widget editável.

```
<blockquote contenteditable="true">
  <p>Edit this content to add your own quote</p>
</blockquote>
```

### Download
Esse é um atributo referente a `tag a`, onde leva o usuário a baixar o conteúdo informado.

> `download` só é permitido em URLs da mesma origem <br>
> portanto o arquivo não pode estar fora da aplicação

```
<a href="example.pdf" download>Baixar</a>
```

### Hidden
O atributo `Hidden` é um booleano onde, quando estiver setado o navegador não renderizar o elemento, geralmente é usado para esconder conteúdo enquanto alguma ação é carregada.

```
<h1 hidden>Este elemento deve está oculto</h1>
```

### Multiple
O `multiple` é outro atributo booleano, que quando for inserido permite o usuário tem permissão de inserir mais de um valor no input.

```
<input type="file" multiple>
```

### Poster
`Poster` é um atributo exclusivo da `tag video`, o atributo informa uma imagem que vai ser mostrada durante o download do vídeo ou até iniciar o vídeo.

```
<video poster="example.png"></video>
```

E esse post mostrou algumas `tags` pouco usadas ou ate mesmo desconhecidas.

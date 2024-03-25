---
title: "Novidades do CSS e HTML para 2024"
description: "Nesse post vim apresentar algumas funcionalidades adicionadas para o CSS e HTML em 2024"
category: "CSS"
date: "2024-03-25"
thumbnail: "/images/css/css-1.png"
---

Falaaa pessoal

Hoje neste pequeno artigo eu vim trazer algumas novidades sobre `CSS` que saíram no fim de 2023 que simplesmente irão aumentar demais a produtividade

## Pop-up

Quem nunca precisou criar um `pop-up` ou o famoso `modal` que o time de produto adora colocar todo o lugar no sistema e com isso era preciso criar um componente, gerenciar estado para saber se está aberto ou fechado, controlar o click fora do modal para poder fechar, utilizar do `z-index` do css para poder controlar a sobreposição sobre os outros itens da tela.

Agora temos esse comportamento nativo do HTML com o exemplo do código HTML abaixo. Agora por nativo dentro do [API do popover](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) temos:

- Já nativamente ele controla a sobreposição de todos os elementos em tela.
- Controla o click fora do modal para fechar automaticamente.
- Acessibilidade padrão para motores de acessibilidade.

<br>

Tudo isso diminui a quantidade de JavaScript a ser escrito para algo que quase todas as aplicações possuem hoje em dia e a estrutura HTML escrita para gerar o popup é declarativa e feita de forma super simples. Ao atribuir o atributo `popover` a uma div já é possível criar um modal.

```HTML
<div id="event-popup" popover>
  Conteúdo do modal aqui

  <button popovertarget="event-popup">Fechar Modal</button>
</div>

<button popovertarget="event-popup">Abrir Modal</button>
```

Essa propriedade `popover` por padrão recebe o valor de `popover=auto`, onde que sempre que abrir um modal novo, é forçado o fechamento dos outros modais que estão aberto. E por outro lado colocar `popover=manual` quando o modal aberto não força nenhum fechamento de outro modal, não recebem foco e é preciso fechar todos os modais abertos manualmente.

## Aninhamento de CSS

Quem já trabalhou com `CSS` sabe a dificuldade para estilizar itens filhos e agora o `CSS` adicionou o aninhamento de estilos para itens filhos, para solucionar esse problema sempre foi utilizado do `SASS` como solução.

Dada a seguinte a estrutura HTML:

```HTML
<div class="card">
  <div class="header">
    <h2 class="title">...</h2>
  </div>
</div>
```

Da forma anterior com CSS para estilizar essa estrutura HTML, ficaria assim:

```CSS
.card {}
.card .header {}
.card .header .title {}
```

Com o novo formato de aninhamento de CSS inserido, ficaria assim:

```CSS
.card {
  &.header {
    &.title {
      font-size: 1rem;
    }
  }
}
```

Dessa forma ao utilizar o `&` ou mais conhecido como `"E" comercial` ele vai procurar se existe algum item filho com aquela class css e assim aplica a estilização. Nesse novo modelo também é possível aninhar `Media Queries` trazendo mais versatilidades e manutenibilidade para alterações futuras.

```CSS
.card {
  &.header {
    &.title {
      font-size: 1rem;

      @container (width > 768px) {
        font-size: 2rem;
      }
    }
  }
}
```

E essas foram duas novas atualizações do `HTML` e `CSS` que veio para ajudar e dar melhor suporte aos devs front-end.

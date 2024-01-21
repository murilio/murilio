---
title: 'Seletores CSS especiais para conhecer no Angular'
description: 'Adicionando conhecimento sobre novas formas estilizar componentes e Tags HTML no Angular, vamos falar sobre os seletores :host, :host-context e ::ng-deep'
category: 'Angular'
date: '2024-01-21'
thumbnail: '/images/angular/angular-1.jpg'
---

Falaa pessoal

Depois do muito tempo estou voltando com uns pequenos artigos para falar sobre tecnologia, ferramentas, frameworks e tudo aquilo que for divertido e trouxer conhecimento para a gente

E para este primeiro post de 2024 vou trazer algumas formas curiosa de estilizar componentes css no angular, framework que venho estudando e trabalhando com ele a mais `+2 anos`, e existe diversos pontos curiosos neste framework, para começarmos pelos items mais simples dentro do angular, vamos falar de estilização de componentes, propriedades como:

> :host {} <br>
> :host-context {} <br>
> ::ng-deep {} <br>

### :host
O primeiro que vamos falar é o `:host`, este pseudo-elemento é usado quando queremos estilizar o componente angular em si, digamos que tenham um componente com a seguinte estrutura, vamos usar uma estratégia para estilizar o componente gerado pelo angular e não seus items filhos, exemplo:

```

@Component({
  selector: 'app-custom-button',
  template: `
    <button>Elemento filho</button>
  `,
  styles: [`
    :host {
      display: block;
      background-color: blue;
      width: 100px;
      height: 100px;
    }
  `]
})
export class CustomButtonComponent { }
```

Neste exemplo acima caso queiramos estilizar o `app-custom-component` por qualquer motivo, em alguns cenário é preciso usar essa abordagem, e no CSS do componente irá ficar da seguinte forma. Então quem vai herdar o estilo neste exemplo vai ser o `app-custom-component`,

### :host-context
O `:host-context` segue o principio do `:host`, só que para esse pseudo-elemento é preciso passar um contexto para o seu uso, como no exemplo a seguir:

```

@Component({
  selector: 'app-custom-button',
  template: `
    <button>Elemento filho</button>
  `,
  styles: [`
    :host-context(.red-theme) .btn-theme {
      background: red;
    }
    :host-context(.blue-theme) .btn-theme {
      background: blue;
    }
  `]
})
export class CustomButtonComponent { }
```

Neste exemplo acima de acordo com a classe passada no elemento pai, o componente aplica um determinado estio para o componente. Veja no exemplo abaixo, é passado a classe `.blue-theme` e de acordo com o pseudo-elemento criado em cima ele vai aplicar a cor de fundo azul.

```

<div class="blue-theme">
  <app-custom-button></app-custom-button>
</div>
```

### ::ng-deep

> <strong>Cuidado ao usar este seletor</strong>

Logo de cara eu vou avisar para ter cuidado com esse pseudo-elemento, pois com ele é possível estilizar qualquer componente na sua página caso você utilize ele sozinho, portando boas práticas pedem que utilize ele junto com `:host`.

```

@Component({
  selector: 'app-custom-button',
  template: `
    <app-other-component>Elemento filho</app-other-component>
  `,
  styles: [`
    :host ::ng-deep {
      app-other-component {
        display: block;
        background-color: red;
        color: white;
      }
    }
  `]
})
export class CustomButtonComponent { }
```

Neste exemplo eu consigo aplicar estilo CSS dentro de outro component. Por padrão o angular encapsula todos os estilos do seu componente, então todo CSS escrito para um componente só pertence a ele, nenhum estilo vaza para outro componente.

Essa é uma forma que o angular permite para estilizar componentes filhos de uma forma muito especifica, portante é imprescindível usar com toda cautela do mundo, pois a utilização em excesso pode causar Side Effects (efeitos colaterais) em componentes que não queríamos ter acesso.

### Considerações finais
Chagando ao fim de mais um post que foi usado para Aprender novas formas de estilizar dentro do angular.

Documentação de referência: [link](https://angular.io/guide/component-styles)

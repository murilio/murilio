---
title: 'Máscaras com regex no React JS'
description: 'Bom, esses dias eu precisei fazer uma máscara para um campo de input, encontrei algumas libs que conseguiram auxiliar na hora de criar a mascara, mas, elas não retornavam o valor ou estavam muito desatualizadas, portanto decidi criar tanto minhas máscara, sem usar nenhuma lib, apenas javascript e regex, vamos lá.'
category: 'React JS'
date: '2020-12-13'
thumbnail: '/images/reactjs/reactjs-01.jpg'
---

## Máscaras
eu crio um arquivo em `/lib/mask.js` e escrevo as funções de máscaras


```
export function cep(e) {
  e.currentTarget.maxLength = 9
  let value = e.currentTarget.value
  value = value.replace(/\D/g, "")
  value = value.replace(/^(\d{5})(\d)/, "$1-$2")
  e.currentTarget.value = value
  return e
}

export function cpf(e) {
  e.currentTarget.maxLength = 14
  let value = e.currentTarget.value
  if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, "")
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1-$2")
    e.currentTarget.value = value
  }
  return e
}

export function telefone(e) {
  e.currentTarget.maxLength = 13
  let value = e.currentTarget.value
  value = value.replace(/\D/g, "")
  value = value.replace(/(\d{2})(\d{5})(\d{2})/, "$1 $2-$3")
  e.currentTarget.value = value
  return e
}
```

Eu crio funções que recebem como parâmetro o valor do input que o usuário está digitando.

Em específico irei falar do campo de CEP.

Na primeira linha eu defino o valor máximo que o usuário irá poder inserir no campo.

Na segunda eu crio uma variável value onde recebe o valor digitado pelo usuário.

Na terceira linha eu uso um método replace que retorna uma string com algumas correspondências de um padrão, substituídos por um determinado caractere. esse método recebe dois parâmetros, o primeiro é a o valor a ser encontrado e o segundo parâmetro é o valor a substituir, no nosso caso eu quero valores apenas numéricos, caso o usuário digite alguma letra, ele remove automaticamente.

Na quarta linha eu uso o método replace novamente, onde no primeiro parâmetro, passo uma regex, que eu quero encontrar duas ocorrências a primeira com 5 dígitos e a outra com a quantidade de dígitos que sobrarem, que no caso é 3 dígitos, e no segundo parâmetro informo que entra a primeira e a segunda ocorrência, inserir um — (hífen), que é a formatação padrão do CEP.

No fim de tudo na ultima linha, eu apenas atribuo o valor formatado ao value do input, e pronto, temos uma máscara e uma validação para o input.


## Input
dentro da pasta de componentes eu crio `/componentes/Input.js`


```
import React, { useCallback } from 'react'

// mascaras
import { cpf, cep, telefone } from './lib/mask'

const Input = ({mask, ...props}) => {

  const handleKeyUp = useCallback((e) => {
    if (mask === 'cep') {
      return cep(e)
    }
    if (mask === 'cpf') {
      return cpf(e)
    }

    if (mask === 'telefone') {
      return telefone(e)
    }
  }, [mask])

  return (
    <input {...props} onKeyUp={handleKeyUp} />
  )
}

export default Input
```

Esse aqui ficou a estrutura do meu Input, e eu crio meus componentes em formato de constante, pois acredito que facilita a minha leitura, seguindo isso, meu componente recebe duas propriedades, a primeira é a máscara que o input irá utilizar e a segunda passo todas as propriedades com o operador spread que permite passar vários argumentos, que no nosso caso seria as propriedades do input como value, style, type, tudo o que for necessário para o seu input.

A partir disso crio uma função que fica ouvindo todo o que é digitado pelo usuário, como o input recebe o tipo de máscara, utilizei o useCallback do react para criar a função que recebe como parâmetro os dados do input e dentro é verificado qual a máscara informada e é retornado a máscara todas as propriedades do input.


## Usando o componente de input

```
import { useState } from 'react';

import Input from './components/Input'

function App() {

  const [cpf, setCpf] = useState('')
  const [cep, setCep] = useState('')
  const [telefone, setTelefone] = useState('')

  return (
    <>
      <h1>Input mask react</h1>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <label htmlFor="cpf">cpf</label>
        <Input
          id="cpf"
          name="cpf"
          placeholder="xxx.xxx.xxx-xx"
          onChange={e => setCpf(e.target.value)}
          mask="cpf"
        />
      </div>


      <div style={{ display: 'flex', alignItems: 'center'}}>
        <label htmlFor="cep">cep</label>
        <Input
          id="cep"
          name="cep"
          placeholder="xxxxx-xxxx"
          onChange={e => setCep(e.target.value)}
          mask="cep"
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center'}}>
        <label htmlFor="telefone">telefone</label>
        <Input
          id="telefone"
          name="telefone"
          placeholder="xx xxxxx-xxxx"
          onChange={e => setTelefone(e.target.value)}
          mask="telefone"
        />
      </div>

      <pre>
        <h4>CPF: {`"${cpf}"`} </h4>
        <h4>CEP: {`"${cep}"`} </h4>
        <h4>Telefone: {`"${telefone}"`} </h4>
      </pre>
    </>
  );
}

export default App;
```

Aqui tem um exemplo de como fica o uso do input, é um componente de input normal, o que muda é apenas uma propriedade mask, que é informado o tipo de máscara que o input irá utilizar, e apenas com isso o input já irá entender automaticamente o tamanho máximo, formatação, e assim temos o nosso regex e validação finalizadas.

repositório: [github](https://github.com/murilio/Input-Mask-Regex)

---
title: 'Instalando o Go lang no linux'
description: 'Pequeno passo a passo de como instalar o Go lang em máquinas linux'
category: 'Golang'
date: '2021-05-10'
thumbnail: '/golang/golang-1.webp'
---

## Download
- primeiro passo acessar a página de [downloads do golang](https://golang.org/dl/) e baixar o arquivo tar.gz para linux
- abrir o terminal na pasta de onde foi baixado o arquivo e abrir o terminal.
- descompactar o arquivo executando o seguinte commando.

```
# linux 64 bits
$ tar -C -xzf <nome-do-arquivo>.linux-amd64.tar.gz
```

## Movendo a pasta
- em seguida mover a pasta descompactada para a pasta `/usr/local`

```
$ sudo mv go /usr/local
```

- agora para ficar mais organizado e separar seus projetos da pasta de instalação.
- na pasta pessoal vamos criar uma pasta chamada `go`
- para acessar usa pasta pessoal execute no terminal.

```
$ cd ~
```
## Pastas dos projetos

- crie uma pasta `go` no seu workspace ou no local de sua preferência.
- os parâmetros `{bin,src,pkg}` são pastas internas onde vão ficar nossos projetos.


```
$ mkdir -p go/{bin,src,pkg}
```

## Variáveis ambiente

- depois de criado é preciso apontar essas pastas nas variáveis ambiente do Go os arquivos de instalação.
- para isso abra o arquivo `~/.profile`.


```
$ sudo gedit ~/.profile
```

- e no fim do arquivo adicionar as linhas.
- salve e feche o arquivo.

```

export PATH=$PATH:/usr/local/go/bin
export GOPATH="$HOME/go"
export GOBIN="$GOPATH/bin"
```

- para concluir a instalação é necessário atualiza o arquivo `~/.profile`.
- para atualizar o arquivo, execute no terminal.

```
$ source ~/.profile
```

## Versão

- e logo depois você pode a ver a versão do Golang no terminal.

```
$ go version
```

---
title: "Instalando o Go lang no linux"
description: "Pequeno passo a passo de como instalar o Go lang em máquinas linux"
category: "Golang"
date: "2021-05-10"
thumbnail: "/images/golang/golang-1.jpg"
---

## Download

primeiro passo acessar a página de [downloads do golang](https://golang.org/dl/) e baixar o arquivo tar.gz para linux

abrir o terminal na pasta de onde foi baixado o arquivo e abrir o terminal.

descompactar o arquivo executando o seguinte commando.

```C
# linux 64 bits
$ sudo tar -C /usr/local -xzf <nome-do-arquivo>.linux-amd64.tar.gz
```

## Pastas dos projetos

crie uma pasta `go` no seu workspace ou no local de sua preferência.

os parâmetros `{bin,src,pkg}` são pastas internas onde vão ficar nossos projetos.

```C
$ mkdir -p go/{bin,src,pkg}
```

## Variáveis ambiente

depois de criado é preciso apontar essas pastas nas variáveis ambiente do Go os arquivos de instalação.

para isso abra o arquivo `~/.profile`.

```C
$ sudo gedit ~/.profile
```

e no fim do arquivo adicionar as linhas.

salve e feche o arquivo.

```C
export PATH=$PATH:/usr/local/go/bin
```

para concluir a instalação é necessário atualiza o arquivo `~/.profile`.

para atualizar o arquivo, execute no terminal.

```C
$ source ~/.profile
```

## Versão

e logo depois você pode a ver a versão do Golang no terminal.

```C
$ go version
```

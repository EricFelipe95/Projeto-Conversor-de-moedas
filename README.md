 # Conversor de Moedas

Este é o meu primeiro projeto utilizando a linguagem de programação JavaScript, desenvolvido como parte de um desafio do curso **DevClub**.
O objetivo era aplicar, na prática, conceitos como:

- if/else
- function
- manipulação do DOM
- eventos e variáveis

---

<img src="https://github.com/user-attachments/assets/888f6467-9955-4791-aaf4-927ae0ef23c3" alt="Captura tela">

<p align="center">
  <img src="https://github.com/user-attachments/assets/54ed3143-5839-4695-bc4a-4b5f84121764" alt="Captura Celular" width="200" />
</p>

---

## Criatividade

Tive uma pequena liberdade para personalizar a interface com **CSS**, onde aprendi a:

- Adicionar uma imagem de fundo
- Utilizar background-blend-mode para aplicar efeitos visuais

---

## Funcionalidades

O conversor é simples porém funcional e dinâmico, onde se permite escolher entre 8 moedas diferentes. Ele:

- Mostra os valores convertidos formatados corretamente
- Exibe o símbolo da moeda
- Atualiza ícones das bandeiras conforme a seleção do usuário
- Há um botão que inverte os valores da moeda origem pela moeda destino, facilitando a troca de conversão

---

## Lógica

Para tornar a conversão dinâmica, usei o **Real (BRL)** como base, e criei uma estrutura de dados com a **cotação** das moedas.

A lógica funciona assim:

1. Capturo o valor digitado no campo de entrada (input)
2. Multiplico esse valor pela cotação da moeda de origem
3. Divido o resultado pela cotação da moeda de destino

---

## Aprendizados

Durante o desenvolvimento, aprendi a usar:

- `parseFloat` para converter texto em número decimal
- `replace` para limpar caracteres do valor
- `innerHTML` para atualizar dinamicamente os valores e imagens no DOM

Descobri também que a moeda **Bitcoin (₿)** não é reconhecida por padrão no `Intl.NumberFormat`, então precisei adicionar o símbolo manualmente.


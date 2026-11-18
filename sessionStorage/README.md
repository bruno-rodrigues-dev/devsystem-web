# Exemplo de sessionStorage

Exemplo simples em HTML, CSS e JavaScript puro que mostra como funciona o `sessionStorage`.

## O que é o sessionStorage

O `sessionStorage` guarda dados no navegador no formato chave/valor. Os dados continuam disponíveis se a página for recarregada, mas são apagados quando a aba é fechada. Cada aba tem a sua própria sessão.

## Como funciona o exemplo

- **Salvar:** guarda o nome digitado com `sessionStorage.setItem()`.
- **Recuperar:** mostra o nome salvo com `sessionStorage.getItem()`.
- **Remover:** apaga o nome com `sessionStorage.removeItem()`.

## Como testar

1. Abra o `index.html` no navegador.
2. Digite um nome, clique em **Salvar** e depois em **Recuperar**.
3. Recarregue a página (F5): o nome continua salvo.
4. Feche a aba e abra de novo: o nome foi apagado.

## Estrutura

```
index.html   → estrutura da página
style.css    → estilos
script.js    → lógica com sessionStorage
```

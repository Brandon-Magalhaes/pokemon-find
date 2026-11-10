# Pokémon Find

Busca de Pokémon em **React + TypeScript**, consumindo a [PokeAPI](https://pokeapi.co/). Os Pokémon encontrados ficam salvos no `LocalStorage`, então a lista continua lá depois de recarregar a página.

## Funcionalidades

- Listagem dos primeiros 151 Pokémon da PokeAPI.
- Busca por nome, com tratamento de nome inexistente.
- Adição do Pokémon encontrado à coleção pessoal.
- Persistência da coleção no `LocalStorage` por um hook próprio.
- Botão para limpar a coleção, com modal de confirmação.
- Layout responsivo com Tailwind CSS.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · axios · react-icons · PokeAPI

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├─ components/
│  ├─ Modal.tsx           confirmação para limpar a lista
│  └─ PokemonList.tsx     busca, listagem e coleção
├─ hooks/
│  └─ useLocalStorage.ts  persistência no LocalStorage
├─ App.tsx
└─ main.tsx
```

## Observações

Projeto de estudo de front-end. Não há back-end: os dados vêm direto da API pública e a coleção é local ao navegador.

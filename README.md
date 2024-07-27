# Pokémon List
Este é um projeto em React que permite buscar e listar Pokémons, com persistência de dados usando o LocalStorage. O usuário pode digitar o nome de um Pokémon, e se ele for encontrado, será adicionado a uma lista de Pokémons encontrados. A lista é persistida no LocalStorage para que, mesmo após a página ser atualizada, os dados permaneçam. O projeto também inclui um botão para resetar a lista e o LocalStorage.

## Funcionalidades
Listagem dos primeiros 151 Pokémons utilizando a PokeAPI.
Pesquisa por nome de Pokémon.
Adição de Pokémons encontrados à lista de Pokémons encontrados.
Persistência de dados no LocalStorage.
Botão para resetar a lista de Pokémons encontrados.
Modal de confirmação para resetar a lista.

## Tecnologias Utilizadas
React
TypeScript
Tailwind CSS
axios
PokeAPI

## Instalação
Clone o repositório:
```bash
git clone https://github.com/seu-usuario/pokemon-list.git

```
1. Navegue até o diretório do projeto:
``` bash
cd pokemon-list
```
2. Instale as dependências:
``` bash
npm install
```
3. Inicie o projeto:
```bash
npm start
```

## Estrutura do Projeto
```src/components/Modal.tsx:``` Componente de modal para confirmação de reset.
```src/hooks/useLocalStorage.ts:``` Hook personalizado para uso do LocalStorage.
```src/components/PokemonList.tsx:``` Componente principal que lista os Pokémons.
```src/index.tsx:``` Arquivo de entrada do React.

## Como Usar
Digite o nome de um Pokémon no campo de entrada.
Clique no botão "Enviar" para adicionar o Pokémon à lista de encontrados.
Para resetar a lista, clique no botão com o ícone de reset (⟳). Um modal aparecerá para confirmar a ação.
Clique em "Confirmar" para resetar a lista e limpar o LocalStorage ou "Cancelar" para fechar o modal sem fazer nenhuma alteração.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

Fork o projeto
Crie uma nova branch (git checkout -b feature/nova-funcionalidade)
Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade')
Push para a branch (git push origin feature/nova-funcionalidade)
Abra um Pull Request

## Licença
Este projeto está licenciado sob a licença MIT.

Se você tiver alguma dúvida ou problema, por favor, abra uma issue no repositório.

## Contato
Brandon Magalhães
Email: ``` bash
brandonmagalhaes.developer@hotmail.com
```

## Referências
PokeAPI
React
TypeScript
Tailwind CSS

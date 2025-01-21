# Projeto: Sorteio de Amigo Secreto - Alura & Oracle

Este projeto é um desafio para desenvolver uma aplicação interativa que permite aos usuários criar uma lista de amigos e realizar um sorteio aleatório para determinar quem será o "amigo secreto". 

## Funcionalidades

### 1. Adicionar Nomes
- Os usuários podem adicionar nomes à lista através de um campo de texto e um botão "Adicionar".
- Caso o campo de texto esteja vazio, o programa exibirá um alerta solicitando que o usuário insira um nome válido.

### 2. Visualizar a Lista
- Os nomes adicionados serão exibidos em uma lista visível na página.

### 3. Sorteio Aleatório
- Um botão "Sortear Amigo" permitirá selecionar aleatoriamente um dos nomes da lista.
- O nome sorteado será exibido na tela para que os usuários possam visualizar o resultado.

## Tecnologias Utilizadas
- **HTML**: Para estruturar a interface da aplicação.
- **CSS**: Para estilizar os elementos da página.
- **JavaScript**: Para implementar a lógica de adição de nomes, validação de entradas e sorteio aleatório.

## Como Usar
1. Abra a aplicação em um navegador.
2. Insira o nome de um amigo no campo de texto.
3. Clique no botão "Adicionar" para incluir o nome na lista.
4. Repita o processo até que todos os amigos tenham sido adicionados.
5. Clique no botão "Sortear Amigo" para realizar o sorteio.
6. Veja o nome do amigo sorteado exibido na tela.

## Validações Implementadas
- **Campo de texto vazio**: O sistema impede que nomes em branco sejam adicionados à lista, exibindo um alerta caso isso ocorra.

## Melhorias Futuras
- Adicionar a funcionalidade de remover nomes da lista.
- Permitir salvar e carregar listas previamente criadas.
- Implementar um design responsivo para melhor experiência em dispositivos móveis.
- Adicionar animações durante o sorteio para uma experiência mais divertida.

---
**Autor:** RaianeBatista

---
### Informações sobre commits
- Removendo um Commit

- Passos

1. **Resetar o repositório local para o commit anterior:**
   ```bash
   git reset --hard HEAD~1
   ```

2. **Forçar o push para o repositório remoto para refletir a mudança:**
   ```bash
   git push origin main --force
   ```

- Atenção

Use o comando `--force` com cuidado, pois ele sobrescreve o histórico no repositório remoto.
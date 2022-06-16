# curso-frontend
curso python 2022
# Ebac Escola britanica de artes criativas e tecnologia
curso python 5/3/2022
Patrick


## Para remover uma branch (ramo) local no Git, basta rodar o seguinte comando:
- git branch -d nome-da-branch. Bash.
- git branch -D nome-da-branch. Bash.
- git push origin --delete nome-da-branch. Bash.
- git push origin :nome-da-branch. Bash.


## Commits
Informação de alteração
- após testado todo o código
- git add *
- git commit -m "mensagem"
- git push (enviar alterações para o repositorio GitHub)
- git pull (baixar / trazer as alterações do Git para minha maquina)

## Git Flow
Fluxo do Git

## Confirgura o GitFlow
- git flow init
- git flow feature start {nome-da-feature}

## Branchs
São ramificações / versões paralelas

- main / master (vai para produção, quando o projeto é publicado)
- develop
- DOD Definition of Done: criterios de aceite
- versionamento 1.0.0

> git checkout -b dev (cria uma branch)
> git checkout master (mudar de branch)

## Merge
Mescla branchs
Voce pode precisar resolver conflitos manualmente

## Pull Rwquests
Mescla de branchs no repositório
Permite code review
O repositório resolve os conflitos automaticamente




## Conveitos de Versionamento
- Hitorico
- Controle de versão
- Quem alterou
- o que alterou
- Quando alterou
- Todos os arquivos
- Evolução continua

## Commit Message Format
Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject:

<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
The header is mandatory and the scope of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.


## Type
Must be one of the following:

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

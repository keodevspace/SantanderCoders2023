# RECOMENDAÇÕES

1) Antes de commitar qualquer alteração, rode o comando `npm run lint` para verificar se o código está seguindo o padrão de estilo do projeto;

2) Certifique-se de que o código está funcionando antes de commitar;

3) Não commitar código comentado;

4) Não commitar código que não está sendo utilizado;

5) Não commitar arquivos que não estão sendo utilizados;

6) Lembre-se de utilizar ALT + SHIFT + F para formatar o código com a extensão Prettier;


# PRINCIPAIS COMANDOS DO GIT
- git clone URL 
- git remote add origin URL
- git pull origin main
- git checkout -b nome-da-sua-branch
- git add "nome-do-arquivo.tipo"
- git commit -m "Descrever quais foram as alterações feitas"
- git status
- git push origin nome-da-sua-branch

OBS: Lembrar de solicitar o pull requeste no Github e pedir passar o card no trello para a coluna "Revisão"

# Como rodar o projeto
1) Clone o repositório
2) Rode o comando `npm install` para instalar as dependências
3) Acesse o endereço `http://localhost:3000` no seu navegador
4) Faça as alterações necessárias no código conforme as regras recomendadas
5) Instale o json-server: `npm install -g json-server`
6) Rode o comando `json-server --watch data-base.json` para iniciar o servidor local do json-server, quando necessário
7) Instale o Bootstrap no projeto: `npm install bootstrap@5.3.2`. OBS: Não esquecer de importar o arquivo CSS do Bootstrap no arquivo HTML principal, em caso de dúvida, consultar `https://getbootstrap.com/docs/5.0/getting-started/introduction/`

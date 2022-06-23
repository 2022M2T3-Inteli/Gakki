# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="https://www.inteli.edu.br/wp-content/uploads/2021/08/20172028/marca_1-2.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</p>

# Yamaha Management System 

## Gakki 

## Integrantes: <a href="https://www.linkedin.com/in/victorbarq/">Beatriz Hirasaki</a>, <a href="https://www.linkedin.com/in/frederico-schur-6a3313237/">Frederico Schur</a>, <a href="https://www.linkedin.com/in/gutopompeo/">Luiz Augusto Ferreira</a>, <a href="https://www.linkedin.com/in/luiz-carlos-da-silva-j%C3%BAnior-82a0a5216/">Luiz Carlos da Silva</a>, <a href="https://www.linkedin.com/in/pedro-silva-14343022a/">Pedro Silva</a>, <a href="https://www.linkedin.com/in/sergiobalucas/">Sergio Lucas</a>, <a href="https://www.linkedin.com/in/thain%C3%A1-lima-169177232/">Thainá Lima</a>. 

## Descrição

  Para este módulo tivemos como parceiro de projeto a Yamaha, uma empresa que detém como principal foco a produção de motocicletas. Nosso parceiro vem buscando um método de gerenciar melhor sua equipe de TI, pois hoje não dispõem de um sistema que mostre com clareza a alocação e disponibilidade de seus funcionários nos seus projetos, sendo assim, foi proposto criar um sistema de capacity humano que demonstre em um dashboard as informações tanto do projeto quanto da equipe de TI. O Principal objetivo do projeto é mostrar através de um gráfico de saturação, as informações citadas anteriormente, alem das alocações de cada funcionário.
<br><br>
<br><br>
<p align="center">

</p>


<br><br>
Então para atingirmos o objetivo da Yamaha, começamos por introduzir uma tela de login para os administradores já cadastrados no sistema. A tela de login consiste em um design único autoral.


<br><br>
  A página inicial é o dashboard, área voltada completamente para a visualização dos gráficos de saturação e quantidade de projetos, além de oferecer uma visão de todos os projetos através do formato de lista. Já na próxima página de nossa aplicação foram criadas abas como: criar funcionário, criar novo projeto, criar governança e criar nova função. Tudo isso, gerando informações que irão para o bancos de dados para que possa ser usada na aplicação. Além das duas abas principais, que são o dashboard e a página de adicionar dados, também implementamos duas páginas suplementares, onde uma delas mostra de maneira mais detalhada o gráfico de saturação e as informações relacionadas a ele e a outra mostra detalhes dos projetos da Yamaha.
  <br>O objetivo principal deste projeto é, alêm da administração de projetos e funcionarios, o gráfico de saturação, que caractetiza o workload dos funcionarios.  O gráfico mostra a capacidade total da empresa em horas, fazendo uma mêdia entre os funcionários CLTS e tercerizados, gerando uma linha da demanda ideal da empresa.
<br><br>

## 🛠 Estrutura de pastas

-documentos<br>
|<br>
|-->antigos<br>
  &emsp;|-->pasta para guardar documentos antigos<br>
  &emsp;|-->Modelo WAD<br>
-src<br>
|<br>
|-->controllers<br>
  &emsp;|-->employees<br>
  &emsp;|-->governance<br>
  &emsp;|-->projects<br>
  &emsp;|-->role<br>
|-->database<br>
   &emsp;|-->yamaha<br>
   &emsp;|-->yamaha.sqbpro<br>
|-->public<br>
   |-->imagens<br>
      &emsp;|-->.DS_Store<br>
      &emsp;|-->arte_login<br>
      &emsp;|-->logo_yamaha<br>
      &emsp;|-->user_img<br>
      &emsp;|-->yamahalogo<br>
      &emsp;|-->yamahaname<br>
   |-->script<br>
      &emsp;|-->garficos<br>
      &emsp;|-->home<br>
      &emsp;|-->index<br>
      &emsp;|-->nova_funcao<br>
      &emsp;|-->nova_governanca<br>
      &emsp;|-->novo_funcionario<br>
      &emsp;|-->novo_projeto<br>
      &emsp;|-->tabela_funcionarios<br>
   &emsp;|-->stye<br>
|-->routes<br>
  &emsp;|-->employees<br>
  &emsp;|-->governance<br>
  &emsp;|-->projects<br>
  &emsp;|-->role<br>
|-->views<br>
  &emsp;|-->atribuir.ejs<br>
  &emsp;|-->graficos.ejs<br>
  &emsp;|-->home.ejs<br>
  &emsp;|-->index.ejs<br>
  &emsp;|-->novaFuncao.ejs<br>
  &emsp;|-->novaGovernanca.ejs<br>
  &emsp;|-->novo.ejs<br>
  &emsp;|-->novoFuncionario.ejs<br>
  &emsp;|-->novoProjeto.ejs<br>
  &emsp;|-->tabelaFuncionario.ejs<br>
&emsp;|-->.gitignore<br>
&emsp;|-->index<br>
&emsp;|-->package<br>
&emsp;|-->package-lock<br>

|-->src<br>
|readme.md<br>


<b>documentos</b>: Documentação do projeto<b>

<b>src</b>: Código<b>

## 🛠 Instalação

  <p> Não há necessidade de instalação pois é uma aplicação web.</p>

## 📈 Exemplo de uso

Alguns exemplos interessantes e úteis sobre como seu projeto pode ser utilizado.

Adicione blocos de códigos e, se necessário, screenshots.

Este modelo pode ser copiado e utilizado à vontade.

Através da cópia/clone/ download do repositório, altere os dados do readme.md e carregue os arquivos de seu projeto.

## 💻 Configuração para Desenvolvimento


```
  npm install
  
  node index.js
```

## 🗃 Histórico de lançamentos

* 0.2.1 - 13/06/2022
    * Integração
    * Finalização da documentação
    * Entrega final
* 0.2.0 - 30/05/2022
    * Back-end
    * Banco de dados
* 0.1.1 - 16/05/2022
    * Início Back-end
    * Início documentação
* 0.1.0 - 02/05/2022
    * Conclusão front-end
* 0.0.1 - 18/04/2022
    * Wireframe
    * Análises e definições

## 📋 Licença/License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/2022M2T3/Projeto5">Yamaha Project Management</a> by <span property="cc:attributionName">Grupo Gakki</span> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>

## 🎓 Referências

1. <https://youtube.com/playlist?list=PLucm8g_ezqNoNHU8tjVeHmRGBFnjDIlxD>
2. <https://integrada.minhabiblioteca.com.br/reader/books/9788536533100/pageid/51>
3. <https://integrada.minhabiblioteca.com.br/reader/books/9788565837484/pageid/173>
4. <https://www.devmedia.com.br/json-javascript-object-notation/6992>
5. <https://aelaschool.com/research/teste-de-usabilidade-como-preparar-e-conduzir/>

<?php
/* Conectamos ao MySQL */
$connection = mysql_connect("localhost", "mkeygrou", "thie3Xoo") or die ('Erro ao Conectar ao Banco de dados');
/* Selecionamos o Banco de Dados */
$db = mysql_select_db("mkeygrou") or die ("Não foi possível localizar o banco de dados");
/* Buscamos o nome, email e comentarios da tabela guestbook */
$consulta = mysql_query("SELECT id,nome,email,data,comentario FROM guestbook ORDER BY id DESC");
/* Retorna o número de linhas do resultado */
$row=mysql_num_rows($consulta);
/* Verificamos se retornou algum resultado */
if($row>0){
/* Manda a mensagem para o Flash */
print "&erroMensagem=0";
/* Começamos a criar o arquivo XML */
$conteudo = "<?xml version='1.0'?><guest>";
/* Para cada item retornado */
for($i=0; $i<$row; $i++) {
/* Recuperamos os Nomes */
$nome = mysql_result($consulta,$i,"NOME");
/* Recuperamos os E-mails */
$email = mysql_result($consulta,$i,"EMAIL");
/* Recuperamos as Datas */
$data = mysql_result($consulta,$i,"DATA");
/* Recuperamos os Comentarios */
$comentario = mysql_result($consulta,$i,"COMENTARIO");
/* Inserimos os valores recuperados nas respectivas tags */
$conteudo .= "<dados><nome>";
$conteudo .= $nome;
$conteudo .= "</nome><email>";
$conteudo .= $email;
$conteudo .= "</email><data>";
$conteudo .= $data;
$conteudo .= "</data><comentario>";
$conteudo .= $comentario;
$conteudo .= "</comentario></dados>";
}
/* Fechamos a tag guest */
$conteudo .= "</guest>";
/* Se existir, abrimos o arquivo guest.xml para leitura e escrita */
/* Se não existir criamos o arquivo guest.xml */
$ponteiro = fopen("guest.xml", "w");
/* Escremos o conteúdo dentro do arquivo selecionado */
/* Codificamos para UTF8 os campos para não dar problemas com acentuação */
fwrite($ponteiro, utf8_encode($conteudo));
/* Fechamos o arquivo */
fclose($ponteiro);
/* Se não retornou nenhum resultado */
} else {
/* Manda a mensagem de erro para o Flash */
print "&erro=Não existe nenhum registro no Guestbook!&erroMensagem=1";
}
/* Selecionando a Ação */
$action = $_GET['action'];
/* Seleciona a Ação */
switch ("$action") {
/* Caso seja ação cadastrar */
case 'cadastrar':
/* Variáveis vindas do Flash pelo método POST */
/* Codificamos para ISO-8859-1 */
$nome = utf8_decode(@$_POST['nome']);
$email = utf8_decode(@$_POST['email']);
$comentario = utf8_decode(@$_POST['comentario']);
/* Deixamos a data com o formato Dia/Mes/Ano */
$data = date("d/m/Y");
/* Inserimos os dados no Banco de Dados */
$cadastra = mysql_query("INSERT INTO guestbook (nome,email,data,comentario) VALUES ('$nome','$email','$data','$comentario')") or die(mysql_error());
/* Manda a mensagem de Cadastro efetuado com Sucesso para o Flash */
print "&mensagem=Obrigado por Assinar o Guest Book&enviado=1";
break;
}
?>
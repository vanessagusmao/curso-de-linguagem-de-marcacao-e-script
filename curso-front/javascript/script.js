function validarFormulario() {
    var nome = document.forms["formulario"]["nome"].value;
    email = document.forms["formulario"]["email"].value;
    assunto = document.forms["formulario"]["assunto"].value;
    mensagem = document.forms["formulario"]["mensagem"].value;

    if (nome == "" || email == "" || assunto == "" || mensagem == "") {
        alert("Todos os campos devem ser preenchidos");
        return false;
    }
}
function myFunction () {
    var nome = formularioestudo.nome.value;
    var sobrenome = formularioestudo.sobrenome.value;
    var idade = formularioestudo.idade.value;
    var contato = formularioestudo.contato.value;
    var email = formularioestudo.email.value;

    if (nome == "") {
        alert ("Preencha o campo nome.");
        formularioestudo.nome.focus();
        return false;
    }

    if (sobrenome == "") {
        alert ("Preencha o campo sobrenome.");
        formularioestudo.sobrenome.focus();
        return false;
    }

    if (idade == "") {
        alert ("Preencha o campo idade.");
        formularioestudo.idade.focus();
        return false;
    }

    if (contato == "") {
        alert ("Preencha o campo contato.");
        formularioestudo.contato.focus();
        return false;
    }

    if (email == "") {
        alert ("Preencha o campo email.");
        formularioestudo.email.focus();
        return false;
    }
    else 
        alert ("Formulario enviado com sucesso!")
    
}

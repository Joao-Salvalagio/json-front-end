const botao = document.getElementById ('registrar');

botao.addEventListener('click',
    function(){
        const login = {
            login: document.getElementById('usuario').value,
            senha: document.getElementById('senha').value
        };
        console.log(login);
        //converterEmJson(login);
        imprimirObjeto(login);
    }
);

function converterEmJson(obj){
    const json = JSON.stringify(obj);
    imprimirJson(json);
}

function imprimirJson(json){
    const impressao = document.getElementById('impressao');

    let h2 = document.createElement('h2');
    h2.textContent = json;

    impressao.appendChild(h2);
}

function imprimirObjeto(objLogin){
    const impressao = document.getElementById('impressao');

    let pUsuario = document.createElement('p');
    pUsuario.textContent = objLogin.login;
    let pSenha = document.createElement('p');
    pSenha.textContent = objLogin.senha;

    impressao.appendChild(pUsuario);
    impressao.appendChild(pSenha);
}
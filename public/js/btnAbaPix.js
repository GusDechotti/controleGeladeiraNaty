function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.getElementById("btnNao").addEventListener("click", async function () {
    const urlPostBanco = 'http://localhost:3000/api/pedido';
    const urlMandarMensagem = 'http://localhost:3000/api/disparoNaty/padrao';
    const data = {
        "id_pessoa": getQueryParam("idPessoa"),
        "id_produto": getQueryParam("idProduto"),
        "isPix": false
    };
    console.log(data);
    try {
        const responseBanco = await fetch(urlPostBanco, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!responseBanco.ok) throw new Error('Erro na requisição para pedido');
        const responseMensagem = await fetch(urlMandarMensagem, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!responseMensagem.ok) throw new Error('Erro na requisição para disparo');
        window.location.href = "../html/confirmaCompra.html";
    } catch (error) {
        console.error('Erro:', error);
    }
});


document.getElementById("btnSim").addEventListener("click", async function () {
    const urlPostBanco = 'http://localhost:3000/api/pedido';
    const urlMandarMensagem = 'http://localhost:3000/api/disparoNaty/pix';
    const data = {
        "id_pessoa": getQueryParam("idPessoa"),
        "id_produto": getQueryParam("idProduto"),
        "isPix": true
    };
    console.log(data);
    try {
        const responseBanco = await fetch(urlPostBanco, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!responseBanco.ok) throw new Error('Erro na requisição para pedido');
        const responseMensagem = await fetch(urlMandarMensagem, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!responseMensagem.ok) throw new Error('Erro na requisição para disparo');
        window.location.href = "../html/pixPage.html";
    } catch (error) {
        console.error('Erro:', error);
    }
});

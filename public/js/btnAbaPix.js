function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.getElementById("btnNao").addEventListener("click", function () {
    const urlPostBanco = 'http://localhost:3000/api/pedido';
    var urlMandarMensagem = 'http://localhost:3000/api/disparoNaty/padrao'
    const data = {
        "id_pessoa": getQueryParam("idPessoa"),
        "id_produto": getQueryParam("idProduto"),
        "isPix": false
    };
    console.log(data)
    fetch(urlPostBanco, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(data => {
            const newUrl = `/html/conrado.html`;
            window.location.href = newUrl;
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    fetch(urlMandarMensagem, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(data => {
            const newUrl = `/html/confirmaCompra.html`;
            window.location.href = newUrl;
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    window.location.href = "../html/confirmaCompra.html";
});

document.getElementById("btnSim").addEventListener("click", function () {
    const urlPostBanco = 'http://localhost:3000/api/pedido';
        var urlMandarMensagem = 'http://localhost:3000/api/disparoNaty/pix';
    const data = {
        "id_pessoa": getQueryParam("idPessoa"),
        "id_produto": getQueryParam("idProduto"),
        "isPix": true
    };
    console.log(data)
    fetch(urlPostBanco, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(data => {
            const newUrl = `/html/conrado.html`;
            window.location.href = newUrl;
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    fetch(urlMandarMensagem, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(data => {
            const newUrl = `/html/confirmaCompra.html`;
            window.location.href = newUrl;
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    window.location.href = "../html/pixPage.html";
});
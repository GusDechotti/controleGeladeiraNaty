document.getElementById('campos').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    if(formData.get("isNaty")=='on'){
        var isNaty = true;
    }else{
        var isNaty = false;
    }
    const data = {
        nome: formData.get('nome'),
        telefone: formData.get('telefone'),
        isNaty: isNaty,
    };
    try {
        const response = await fetch('http://localhost:3000/api/pessoa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            window.alert("Olá " + formData.get('nome') + " seu usuário foi cadastrado")
            const newUrl = `/`;
            window.location.href = newUrl;
        } else {
            console.error('Erro:', response.statusText);
        }
    } catch (error) {
        console.error('Erro de conexão:', error);
    }
});
document.getElementById('campos').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
        nome: formData.get('nome'),
        quantidade: formData.get('quantidade'),
        preco: formData.get('preco'),
        imagem: formData.get('imagem')
    };
    try {
        const response = await fetch('http://localhost:3000/api/produto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            window.alert("O produto " + formData.get('nome') + " foi criado com sucesso!")
            const newUrl = `../html/jake.html`;
            window.location.href = newUrl;
        } else {
            console.error('Erro:', response.statusText);
        }
    } catch (error) {
        console.error('Erro de conexão:', error);
    }
});
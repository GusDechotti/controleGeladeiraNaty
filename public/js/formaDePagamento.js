var Pix = document.getElementById("isPix");
            Pix.addEventListener('change', function() {
                console.log('Checkbox foi clicado! Estado atual:', Pix.checked);
            });
            btn.addEventListener('click', () => {
                const urlPostBanco = 'http://localhost:3000/api/pedido';
                if(Pix.checked){
                    var urlMandarMensagem = 'http://localhost:3000/api/disparoNaty/pix';
                }else{
                    var urlMandarMensagem = 'http://localhost:3000/api/disparoNaty/padrao'
                }
            }
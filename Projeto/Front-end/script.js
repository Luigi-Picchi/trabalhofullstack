document.getElementById('formPessoa').addEventListener('submit', async (event) => {
    event.preventDefault();

    const CPF = document.getElementById('CPF').value;
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    const pessoaData = {
        CPF,
        Nome: nome,
        Telefone: telefone
    };

    try {
        const response = await fetch('http://localhost:3000/pessoas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pessoaData)
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('message').innerText = 'Pessoa cadastrada com sucesso!';
            document.getElementById('formPessoa').reset();
        } else {
            document.getElementById('message').innerText = `Erro: ${result.error}`;
        }
    } catch (error) {
        document.getElementById('message').innerText = 'Erro na comunicação com o servidor.';
    }
});

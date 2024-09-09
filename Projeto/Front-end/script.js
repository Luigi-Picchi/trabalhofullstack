document.addEventListener('DOMContentLoaded', () => {
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');

    cpfInput.addEventListener('input', () => {
        cpfInput.value = formatCPF(cpfInput.value);
    });

    telefoneInput.addEventListener('input', () => {
        telefoneInput.value = formatTelefone(telefoneInput.value);
    });

    document.getElementById('formPessoa').addEventListener('submit', async (event) => {
        event.preventDefault(); 

        const CPF = cpfInput.value;
        const Nome = document.getElementById('nome').value;
        const Telefone = telefoneInput.value;

        try {
            const response = await fetch('http://localhost:3000/pessoas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ CPF, Nome, Telefone }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erro ao cadastrar pessoa.');
            }

            document.getElementById('message').textContent = 'Pessoa cadastrada com sucesso!';
        } catch (error) {
            document.getElementById('message').textContent = `Erro: ${error.message}`;
        }
    });
});

function formatCPF(cpf) {
    return cpf.replace(/\D/g, '') 
              .replace(/(\d{3})(\d{3})/, '$1.$2') 
              .replace(/(\d{3})(\d{2})/, '$1.$2') 
              .replace(/(\d{3})(\d{2})$/, '$1-$2');
}

function formatTelefone(telefone) {
    return telefone.replace(/\D/g, '') 
                   .replace(/(\d{2})(\d{5})/, '($1) $2') 
                   .replace(/(\d{4})$/, '$1'); 
}

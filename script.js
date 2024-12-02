document.addEventListener('DOMContentLoaded', () => {
    const generateKeysBtn = document.getElementById('generate-keys');
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const messageInput = document.getElementById('message');
    const encryptedMessageOutput = document.getElementById('encrypted-message');
    const decryptedMessageOutput = document.getElementById('decrypted-message');
    const keyInfo = document.getElementById('key-info');

    let privateKey, publicKey;

    // Função para gerar as chaves RSA
    function generateKeys() {
        const { pki } = forge;
        const keypair = pki.rsa.generateKeyPair(2048); // Gerando um par de chaves de 2048 bits

        // Armazenando as chaves
        privateKey = keypair.privateKey;
        publicKey = keypair.publicKey;

        // Atualizando a interface com as chaves geradas
        keyInfo.textContent = 'Chaves geradas com sucesso!';
        encryptBtn.disabled = false; // Habilita o botão de cifragem
        decryptBtn.disabled = false; // Habilita o botão de decifragem
    }

    // Função para cifrar a mensagem com a chave pública
    function encryptMessage() {
        const message = messageInput.value;
        if (!message) {
            showErrorPopup('Por favor, insira uma mensagem para cifrar.');
            return;
        }

        // Cifrar a mensagem com a chave pública
        const encryptedMessage = publicKey.encrypt(message, 'RSA-OAEP'); // Usando RSA-OAEP para segurança

        // Exibir o resultado cifrado diretamente como uma string codificada em base64
        encryptedMessageOutput.value = forge.util.encode64(encryptedMessage);
    }

    // Função para decifrar a mensagem com a chave privada
    function decryptMessage() {
        const encryptedMessage = encryptedMessageOutput.value;
        if (!encryptedMessage) {
            showErrorPopup('Por favor, insira uma mensagem cifrada para decifrar.');
            return;
        }

        try {
            // Decodificando a mensagem cifrada da base64
            const decodedMessage = forge.util.decode64(encryptedMessage);

            // Decifrar a mensagem com a chave privada
            const decryptedMessage = privateKey.decrypt(decodedMessage, 'RSA-OAEP');

            // Exibir o resultado decifrado
            decryptedMessageOutput.value = decryptedMessage;
        } catch (error) {
            showErrorPopup('Erro ao decifrar a mensagem. Certifique-se de que a mensagem cifrada foi inserida corretamente.');
        }
    }

    // Função para copiar o resultado para a área de transferência
    function copyToClipboard(event) {
        const targetId = event.target.getAttribute('data-target');
        const textToCopy = document.getElementById(targetId).value;
        navigator.clipboard.writeText(textToCopy)
            .then(() => showSuccessPopup('Texto copiado para a área de transferência!'))
            .catch(err => showErrorPopup('Erro ao copiar: ' + err));
    }

    // Função para mostrar o popup de erro
    function showErrorPopup(message) {
        const errorPopup = document.createElement('div');
        errorPopup.classList.add('error-popup');
        errorPopup.textContent = message;

        document.body.appendChild(errorPopup);

        // Remover o popup após 3 segundos
        setTimeout(() => {
            errorPopup.remove();
        }, 3000);
    }

    // Função para mostrar o popup de sucesso
    function showSuccessPopup(message) {
        const successPopup = document.createElement('div');
        successPopup.classList.add('success-popup');
        successPopup.textContent = message;

        document.body.appendChild(successPopup);

        // Remover o popup após 3 segundos
        setTimeout(() => {
            successPopup.remove();
        }, 3000);
    }

    // Adicionando os eventos aos botões
    generateKeysBtn.addEventListener('click', generateKeys);
    encryptBtn.addEventListener('click', encryptMessage);
    decryptBtn.addEventListener('click', decryptMessage);

    // Copiar para o clipboard
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', copyToClipboard);
    });
});

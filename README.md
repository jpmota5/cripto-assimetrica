# Aplicação de Criptografia RSA 🔐

## Descrição 📝

Esta aplicação permite a **cifra** e **decifra** de mensagens utilizando o algoritmo **RSA** com chaves de 2048 bits. O processo de cifragem utiliza a **chave pública** para codificar a mensagem, e a **chave privada** é usada para decifrar a mensagem. A aplicação possui uma interface simples e interativa, ideal para entender e testar a criptografia assimétrica de forma prática.

### Funcionalidades ⚙️:
- **Geração de chaves**: A aplicação gera um par de chaves RSA (pública e privada) com 2048 bits.
- **Cifrar mensagem**: Insira uma mensagem no campo de entrada e utilize a chave pública para cifrá-la.
- **Decifrar mensagem**: Insira a mensagem cifrada e utilize a chave privada para restaurar a mensagem original.
- **Copiar para área de transferência**: Copie facilmente o texto cifrado ou decifrado para colá-lo em outros lugares.

---

## Como Usar 🚀

### Passo 1: Gerar as Chaves 🔑
- Ao clicar no botão **"Gerar Chaves"**, um par de chaves públicas e privadas será gerado automaticamente.
- As chaves não são armazenadas localmente, portanto, sempre que a página for atualizada, as chaves serão perdidas.

### Passo 2: Cifrar uma Mensagem 🔒
- Digite a mensagem que deseja cifrar no campo de entrada **"Mensagem"**.
- Clique no botão **"Cifrar"** para gerar a mensagem cifrada.
- A mensagem cifrada será exibida no campo **"Mensagem Cifrada"** e estará codificada em **Base64**.

### Passo 3: Decifrar uma Mensagem 🔓
- Para decifrar uma mensagem, insira a mensagem cifrada no campo **"Mensagem Cifrada"**.
- Clique no botão **"Decifrar"** para exibir a mensagem original no campo **"Mensagem Decifrada"**.

**⚠️ Nota Importante:** As mensagens cifradas **não podem ser decifradas** sem a chave privada correspondente, e **as chaves não são armazenadas** em nenhum lugar após a geração. Se você recarregar a página, as chaves geradas serão perdidas e a decifra não será possível.

---

## Uso da aplicação 📜

1. **Tela inicial**:
   ![image](https://github.com/user-attachments/assets/58422c1f-35fb-4c3b-862c-5205b8d3a781)
   
2. **Cifrar uma mensagem**:
   ![image](https://github.com/user-attachments/assets/e54dad75-60a2-4929-9b11-c2018f276f75)

3. **Decifrar uma mensagem**:
   ![image](https://github.com/user-attachments/assets/c61cc938-06a9-4a1c-9868-f5252b9329ae)

---

## Considerações Técnicas ⚙️

- **Criptografia RSA**: Utiliza o algoritmo de criptografia assimétrica RSA, onde há duas chaves: a chave pública (usada para cifrar) e a chave privada (usada para decifrar). A segurança da criptografia depende do segredo da chave privada.
  
- **Chaves Não Armazenadas**: As chaves geradas não são armazenadas localmente, o que significa que se a página for atualizada ou fechada, as chaves serão perdidas, e a mensagem não poderá ser decifrada sem a chave privada correspondente.

- **Codificação Base64**: A mensagem cifrada é convertida em uma string Base64 para facilitar o transporte e armazenamento.

---

## Tecnologias Usadas 🖥️

- **HTML**: Para estruturar a interface de usuário.
- **CSS**: Para o estilo e layout da aplicação.
- **JavaScript**: Para a funcionalidade da criptografia e interação com o usuário.
- **Forge**: Uma biblioteca JavaScript que implementa o algoritmo RSA.

---

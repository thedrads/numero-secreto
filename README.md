# Jogo do Número Secreto

Um jogo simples em HTML, CSS e JavaScript onde o usuário tenta adivinhar um número secreto dentro de um intervalo configurável.

## ✨ Sobre
- Projeto didático para praticar Git/GitHub, versionamento e colaboração.
- Traz exemplos de `commit`, `push`, `pull`, `gitignore`, README e boas práticas.
- Inclui síntese de voz para acessibilidade (pode ser desligada facilmente).

## 🧰 Tecnologias
- HTML
- CSS
- JavaScript (DOM, Math.random)
- (Opcional) ResponsiveVoice para leitura de textos em voz alta

## ✅ Requisitos
- Navegador moderno
- Conexão com a internet **apenas** se a síntese de voz estiver ativa (CDN do ResponsiveVoice)

## ▶️ Como executar
**Opção 1 (mais simples)**
1. Baixe/clon e o repositório
2. Abra o arquivo `index.html` no navegador (duplo clique)

**Opção 2 (VS Code + Live Server)**
1. Abra a pasta do projeto no VS Code  
2. Instale a extensão **Live Server**
3. Clique em **Go Live** (ou botão “Abrir com Live Server”) no rodapé do VS Code

> Dica: o Live Server é útil quando você muda arquivos com frequência e quer recarregamento automático.

## 🕹️ Como jogar
1. Leia a mensagem “Escolha um número entre X e Y”
2. Digite seu palpite no campo numérico e clique em **Chutar**
3. O jogo informa se o número secreto é **maior** ou **menor**
4. Ao acertar, aparece a contagem de tentativas e o botão **Novo jogo**

## ⚙️ Configurações importantes
- **Limite do jogo**  
  Defina no `app.js`:
  ```js
  let numeroLimite = 40; // ajuste aqui o limite superior

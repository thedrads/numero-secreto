# Jogo do Número Secreto

Jogo simples em **HTML/CSS/JS** em que o usuário tenta adivinhar um número secreto dentro de um **intervalo configurável**.

## 🔗 Demo

**[https://thedrads.github.io/numero-secreto/](https://thedrads.github.io/numero-secreto/)**

## 📌 Visão geral

* Intervalo padrão: **1–40** (editável).
* Dicas de **maior/menor** a cada tentativa.
* **Contador** de tentativas.
* **Síntese de voz** opcional para acessibilidade.

## 🧰 Tecnologias

* HTML5, CSS3, JavaScript (DOM, `Math.random`)
* (Opcional) ResponsiveVoice via CDN para leitura em voz alta

## ▶️ Executar localmente

```bash
git clone https://github.com/thedrads/numero-secreto.git
cd numero-secreto
# Abra o arquivo index.html no navegador
```

> Alternativa (VS Code): instale a extensão **Live Server** e clique em **Go Live**.

## ⚙️ Configurações rápidas

* **Alterar intervalo**: em `app.js`, ajuste `let numeroLimite = 40;`.
* **Atualizar texto da página**: em `index.html`, ajuste “Escolha um número entre 1 e X”.
* **Desativar voz**:

  * Remova a linha da CDN em `index.html`

    ```html
    <script src="https://code.responsivevoice.org/responsivevoice.js"></script>
    ```
  * Ou comente a chamada `responsiveVoice.speak(...)` em `app.js`.

## 📁 Estrutura

```
numero-secreto/
├─ index.html     # marcação e interface
├─ style.css      # estilos
├─ app.js         # lógica do jogo
└─ img/           # imagens (opcional)
```

## 🚀 Publicação

Publicado via **GitHub Pages** a partir da branch `main`:
**[https://thedrads.github.io/numero-secreto/](https://thedrads.github.io/numero-secreto/)**

## 📝 Licença

Projeto para fins **educacionais** e de estudo.

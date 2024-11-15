document.addEventListener("DOMContentLoaded", function() {
    // Função de fade-in para o texto, com controle de visibilidade
    function fadeIn(element, text, index, callback) {
        element.style.opacity = 0;  // Começar invisível
        element.style.transition = "opacity 1s ease-in-out";
        
        setTimeout(() => {
            element.style.opacity = 1;  // Tornar o texto visível
            let textContent = "";
            let fadeIndex = 0;
            
            function type() {
                if (fadeIndex < text.length) {
                    textContent += text.charAt(fadeIndex);
                    element.textContent = textContent;
                    fadeIndex++;
                    setTimeout(type, 100);  // Delay para efeito de digitação
                } else if (callback) {
                    callback();  // Executa o callback após o texto completo
                }
            }

            type();  // Iniciar a animação de digitação
        }, 500);  // Esperar 0.5s antes de iniciar o fade-in
    }

    // Função para fazer o texto desaparecer
    function fadeOut(element, callback) {
        element.style.opacity = 0;  // Começar invisível
        element.style.transition = "opacity 1s ease-in-out";
        setTimeout(callback, 1000);  // Após 1s, chama o callback para passar para o próximo
    }

    // Selecionar os elementos
    const titleElement = document.querySelector("#hero .text h1");
    const subtitleElement = document.querySelector("#hero .text h4");
    const paragraphElement = document.querySelector("#hero .text p");

    // Definir os textos
    const titleText = "Gabriel Silva Sousa";
    const subtitleText = "Desenvolvedor Web Backend";
    const paragraphText = "Transformo ideias em soluções inteligentes. Especialista em tecnologias como Django e Node.js para criar sistemas eficientes e escaláveis.";

    // Começar as animações em sequência com fade-in
    fadeIn(titleElement, titleText, 0, function() {
        fadeOut(subtitleElement, function() {
            fadeIn(subtitleElement, subtitleText, 0, function() {
                fadeOut(paragraphElement, function() {
                    fadeIn(paragraphElement, paragraphText, 0);
                });
            });
        });
    });

    // Interação do botão com efeito de movimento
    const button = document.querySelector(".button");
    
    button.addEventListener("mouseenter", function() {
        button.style.transform = "scale(1.1) translateY(-5px)";  // Aumenta o botão e move para cima
        button.style.transition = "transform 0.3s ease";  // Suaviza o movimento
    });

    button.addEventListener("mouseleave", function() {
        button.style.transform = "scale(1) translateY(0)";  // Retorna ao normal
    });
});

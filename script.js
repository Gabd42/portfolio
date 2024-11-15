// Mensagem de boas-vindas ao usuário
window.onload = function() {
    alert("Bem-vindo ao meu site! Fique à vontade para explorar.");
};

// Interatividade no botão de envio de mensagem
document.getElementById("contactButton").addEventListener("click", function() {
    const form = document.getElementById("contactForm");
    form.style.display = form.style.display === "none" ? "block" : "none";
});

// Função para tratar o envio do formulário
document.getElementById("formMessage").addEventListener("submit", function(e) {
    e.preventDefault();  // Previne o envio padrão do formulário

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    
    if(name && message) {
        alert("Mensagem enviada com sucesso! Em breve entrarei em contato.");
        document.getElementById("contactForm").style.display = "none";  // Esconde o formulário
        document.getElementById("formMessage").reset();  // Limpa o formulário
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

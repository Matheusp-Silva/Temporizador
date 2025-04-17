function atualizarContagem() {
    const agora = new Date();
  
    const fim = new Date();
    fim.setHours(15, 30, 0, 0); // Hoje às 18h horário local
  
    const diff = fim.getTime() - agora.getTime();
  
    const timer = document.getElementById('timer');
    const msg = document.getElementById('msg');
    const emoji = document.querySelector('.emoji');
  
    if (diff <= 0) {
      timer.textContent = '🎉 LIBERADA!';
      msg.textContent = 'Victoria, você está oficialmente livre da Verhaw IT! Vá brilhar! 💫';
      emoji.textContent = '🎊';
      return;
    }
  
    const horas = Math.floor(diff / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);
  
    timer.textContent =
      `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
  
    if (horas === 0 && minutos < 5) {
      msg.textContent = '🚨 Atenção Verhaw: Victoria prestes a fugir! Sai da frente!';
      emoji.textContent = '🕺';
    } else if (horas === 0 && minutos < 30) {
      msg.textContent = '🍕 Já dá pra esquentar a pizza de despedida, Victoria!';
      emoji.textContent = '🍕';
    } else if (horas === 0 && minutos < 60) {
      msg.textContent = '🕓 Começa agora o “modo fantasma da Victoria” na empresa!';
      emoji.textContent = '👻';
    } else {
      msg.textContent = 'A liberdade está próxima... prepare-se Victoria! 🕺💃';
      emoji.textContent = '🚀';
    }
  }
  
  setInterval(atualizarContagem, 1000);
  atualizarContagem();
  
function placeBet() {
    const team = document.getElementById('teamSelect').value;

    // Rastgele kazanan seçimi
    const randomWinner = Math.random() > 0.5 ? "Takım A" : "Takım B";

    // Sonucu göster
    const resultDiv = document.getElementById('result');
    if (team === randomWinner) {
        resultDiv.textContent = `Tebrikler! ${team} kazandı ve doğru tahmin yaptınız!`;
    } else {
        resultDiv.textContent = `Üzgünüz, ${randomWinner} kazandı. Daha şanslı olabilirsiniz!`;
    }
}

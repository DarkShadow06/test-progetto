document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;

  fetch("https://proxy-google-sheets.vercel.app/", {
      method: "POST",
      body: JSON.stringify({ nome: nome }),
      headers: {
        "Content-Type": "application/json"
    }
  })
  .then(r => r.text())
  .then(data => {
    document.getElementById("stato").innerText = "Risposta: " + data;
  })
  .catch(error => {
    document.getElementById("stato").innerText = "Errore: " + error;
  });
});

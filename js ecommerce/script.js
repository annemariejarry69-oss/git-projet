const btns = document.querySelectorAll(".btnclick");

function ring(fichieraudio) {
  const audio = new Audio();
  // On ajoute "../audio/" pour sortir du dossier js et entrer dans audio
  audio.src = "../song/songclick.mp3";
  audio.play();
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    ring("songclick");
    // Remplace "songclick" par le vrai nom de ton fichier
  });
});

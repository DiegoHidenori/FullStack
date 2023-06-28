const heading = document.getElementById("heading1");
const mainP = document.getElementById("main_paragraph");
const galleryAlert = ['Login ', 'to ', 'view ', 'gallery ', '...'];
console.log(...galleryAlert);
document.getElementById("main_paragraph").innerHTML = galleryAlert.join(' ');
mainP.style.textAlign = "center";
mainP.style.color = "#E5FCC2";
document.getElementById("password_form").addEventListener("submit", function (display_content) {
    event.preventDefault();
    const correct_password = document.getElementById("password").value;
    if (correct_password === "swapandsolve"){
        mainP.style.display = "none";
        document.getElementById("main_gallery").classList.remove("hidden");
        document.getElementById("password_form").style.visibility="hidden";
        document.getElementById("heading1").innerHTML = "Login Successful   :)";
        heading.style.textAlign = "center";
    }
});

const toggle = (popupID) => {
    let blur = document.getElementById('main_gallery');
    blur.classList.toggle('active');
    let popup = document.getElementById(popupID);
    popup.classList.toggle('active');
};

function TVShow(name, release_date, genre, seasons, episodes, description){
    this.show_name = name;
    this.show_release = release_date;
    this.show_genre = genre;
    this.show_seasons = seasons;
    this.show_episodes = episodes;
    this.show_description = description;
}

const attackOnTitan = new TVShow(
    "Attack on Titan",
    "2023",
    "Action, Adventure",
    "4",
    "98",
    "Humans against titans..."
);

const jujutsuKaisen = new TVShow(
    "Jujutsu Kaisen",
    "2020",
    "Action, Adventure",
    "1",
    "25",
    "Curses and sorcerers..."
);

const demonSlayer = new TVShow(
    "Demon Slayer",
    "2019",
    "Action, Adventure",
    "3",
    "55",
    "Demons and samurai-adjacent..."
);

const narutoShippuden = new TVShow(
    "Naruto Shippuden",
    "2007",
    "Action, Adventure",
    "21",
    "500",
    "Ninjas..."
);

const haikyuu = new TVShow(
    "Haikyuu",
    "2014",
    "Drama, Sports",
    "4",
    "89",
    "Volleyball drama..."
);

const onePiece = new TVShow(
    "One Piece",
    "1999",
    "Action, Adventure",
    "20",
    "1074",
    "Pirate adventures..."
);

function popupContent(popupContentID, popupContent){
    const line = document.getElementById(popupContentID);
    if(line){
        line.textContent = popupContent;
    }
}
popupContent("attack_name", "TV Show Name: " + attackOnTitan.show_name);
popupContent("attack_releasedate", "TV Show Release Date: " + attackOnTitan.show_release);
popupContent("attack_genre", "TV Show Genre(s): " + attackOnTitan.show_genre);
popupContent("attack_seasons", "TV Show # of Seasons: " + attackOnTitan.show_seasons);
popupContent("attack_episodes", "TV Show # of Episodes: " + attackOnTitan.show_episodes);

popupContent("jujutsu_name", "TV Show Name: " + jujutsuKaisen.show_name);
popupContent("jujutsu_releasedate", "TV Show Release Date: " + jujutsuKaisen.show_release);
popupContent("jujutsu_genre", "TV Show Genre(s): " + jujutsuKaisen.show_genre);
popupContent("jujutsu_seasons", "TV Show # of Seasons: " + jujutsuKaisen.show_seasons);
popupContent("jujutsu_episodes", "TV Show # of Episodes: " + jujutsuKaisen.show_episodes);

popupContent("demon_name", "TV Show Name: " + demonSlayer.show_name);
popupContent("demon_releasedate", "TV Show Release Date: " + demonSlayer.show_release);
popupContent("demon_genre", "TV Show Genre(s): " + demonSlayer.show_genre);
popupContent("demon_seasons", "TV Show # of Seasons: " + demonSlayer.show_seasons);
popupContent("demon_episodes", "TV Show # of Episodes: " + demonSlayer.show_episodes);

popupContent("ns_name", "TV Show Name: " + narutoShippuden.show_name);
popupContent("ns_releasedate", "TV Show Release Date: " + narutoShippuden.show_release);
popupContent("ns_genre", "TV Show Genre(s): " + narutoShippuden.show_genre);
popupContent("ns_seasons", "TV Show # of Seasons: " + narutoShippuden.show_seasons);
popupContent("ns_episodes", "TV Show # of Episodes: " + narutoShippuden.show_episodes);

popupContent("haikyuu_name", "TV Show Name: " + haikyuu.show_name);
popupContent("haikyuu_releasedate", "TV Show Release Date: " + haikyuu.show_release);
popupContent("haikyuu_genre", "TV Show Genre(s): " + haikyuu.show_genre);
popupContent("haikyuu_seasons", "TV Show # of Seasons: " + haikyuu.show_seasons);
popupContent("haikyuu_episodes", "TV Show # of Episodes: " + haikyuu.show_episodes);

popupContent("onepiece_name", "TV Show Name: " + onePiece.show_name);
popupContent("onepiece_releasedate", "TV Show Release Date: " + onePiece.show_release);
popupContent("onepiece_genre", "TV Show Genre(s): " + onePiece.show_genre);
popupContent("onepiece_seasons", "TV Show # of Seasons: " + onePiece.show_seasons);
popupContent("onepiece_episodes", "TV Show # of Episodes: " + onePiece.show_episodes);

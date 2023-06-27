const heading = document.getElementById("heading1");
const mainP = document.getElementById("main_paragraph");
document.getElementById("main_paragraph").innerHTML = "Login to view gallery...";
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

function toggle(popupID){
    // this.popup = document.getElementById('')
    let blur = document.getElementById('main_gallery');
    blur.classList.toggle('active')
    let popup = document.getElementById(popupID);
    popup.classList.toggle('active')
}

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
document.getElementById("attack_name").textContent = "TV Show Name: \n" + attackOnTitan.show_name;
document.getElementById("attack_releasedate").textContent = "TV Show Release Date: \n" + attackOnTitan.show_release;
document.getElementById("attack_genre").textContent = "TV Show Genre(s): \n" + attackOnTitan.show_genre;
document.getElementById("attack_seasons").textContent = "TV Show # of Seasons: " + attackOnTitan.show_seasons;
document.getElementById("attack_episodes").textContent = "TV Show # of Episodes: " + attackOnTitan.show_episodes;

document.getElementById("jujutsu_name").textContent = "TV Show Name: " + jujutsuKaisen.show_name;
document.getElementById("jujutsu_releasedate").textContent = "TV Show Release Date: " + jujutsuKaisen.show_release;
document.getElementById("jujutsu_genre").textContent = "TV Show Genre(s): " + jujutsuKaisen.show_genre;
document.getElementById("jujutsu_seasons").textContent = "TV Show # of Seasons: " + jujutsuKaisen.show_seasons;
document.getElementById("jujutsu_episodes").textContent = "TV Show # of Episodes: " + jujutsuKaisen.show_episodes;

document.getElementById("demon_name").textContent = "TV Show Name: " + demonSlayer.show_name;
document.getElementById("demon_releasedate").textContent = "TV Show Release Date: " + demonSlayer.show_release;
document.getElementById("demon_genre").textContent = "TV Show Genre(s): " + demonSlayer.show_genre;
document.getElementById("demon_seasons").textContent = "TV Show # of Seasons: " + demonSlayer.show_seasons;
document.getElementById("demon_episodes").textContent = "TV Show # of Episodes: " + demonSlayer.show_episodes;

document.getElementById("ns_name").textContent = "TV Show Name: " + narutoShippuden.show_name;
document.getElementById("ns_releasedate").textContent = "TV Show Release Date: " + narutoShippuden.show_release;
document.getElementById("ns_genre").textContent = "TV Show Genre(s): " + narutoShippuden.show_genre;
document.getElementById("ns_seasons").textContent = "TV Show # of Seasons: " + narutoShippuden.show_seasons;
document.getElementById("ns_episodes").textContent = "TV Show # of Episodes: " + narutoShippuden.show_episodes;

document.getElementById("haikyuu_name").textContent = "TV Show Name: " + haikyuu.show_name;
document.getElementById("haikyuu_releasedate").textContent = "TV Show Release Date: " + haikyuu.show_release;
document.getElementById("haikyuu_genre").textContent = "TV Show Genre(s): " + haikyuu.show_genre;
document.getElementById("haikyuu_seasons").textContent = "TV Show # of Seasons: " + haikyuu.show_seasons;
document.getElementById("haikyuu_episodes").textContent = "TV Show # of Episodes: " + haikyuu.show_episodes;

document.getElementById("onepiece_name").textContent = "TV Show Name: " + onePiece.show_name;
document.getElementById("onepiece_releasedate").textContent = "TV Show Release Date: " + onePiece.show_release;
document.getElementById("onepiece_genre").textContent = "TV Show Genre(s): " + onePiece.show_genre;
document.getElementById("onepiece_seasons").textContent = "TV Show # of Seasons: " + onePiece.show_seasons;
document.getElementById("onepiece_episodes").textContent = "TV Show # of Episodes: " + onePiece.show_episodes;

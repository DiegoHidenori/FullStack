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
document.getElementById("attack_title").textContent = attackOnTitan.show_name;
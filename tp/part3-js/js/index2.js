
// sauvegarde des éléments
function save() {
    if (typeof(Storage) !== "undefined") {
        const local = document.getElementById("local").value;
        const session = document.getElementById("session").value;
        localStorage.setItem("local", local);
        sessionStorage.setItem("session", session)
    }
}

// affiche les élements sauvegardés précedant
function getSession() {
    if (typeof(Storage) !== "undefined") {
        const local = localStorage.getItem("local");
        const session = sessionStorage.getItem("session");
        document.getElementById("result").innerHTML = "<p>Local: " + local + "</p><br/><p>Session: " + session + "</p>";
    }
}

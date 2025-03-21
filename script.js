

// existe-t-il un localStorage qui s'appelle "theme" ?
if (localStorage.getItem("theme")) { 
    // si oui, quel est sa valeur ?
    if (localStorage.getItem("theme") === "dark") {
        // si sa valeur est "dark", on active le mode sombre
        modeSombre();
    }
}

// 1. Récupérer le bouton
let bouton = document.querySelector("#mode");
let txtBouton = document.querySelector("span");

// 2. Ajouter un écouteur d'événement sur le bouton
bouton.addEventListener("click", function() {
    // 3. Si le body a la classe "dark"
    if (document.body.classList.contains("dark")) {

        txtBouton.textContent = "Thème sombre";

        // 4. Supprimer la classe
        document.body.classList.remove("dark");
        
        localStorage.setItem("theme", "light");
    }
    else {
        modeSombre();
    }
});


function modeSombre() {
    // 1. Ajouter la classe "dark" au body
    document.body.classList.add("dark");

    // 2. Modifier le texte du bouton
    txtBouton.textContent = "Thème clair";
    
    // 3. Ajouter le thème "dark" dans le localStorage
    localStorage.setItem("theme", "dark");
}
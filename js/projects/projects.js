function susdle(boolean) {
    if (boolean == true) {
        document.getElementById("projectName").innerHTML = "susdle";
        document.getElementById("projectDesc").innerHTML = "A sus version of popular word guessing game Wordle.";
    } else if (boolean == false) {
        document.getElementById("projectName").innerHTML = "projects";
        document.getElementById("projectDesc").innerHTML = "Here's a list of all my projects";
    }
}

function gtf(boolean) {
    if (boolean == true) {
        document.getElementById("projectName").innerHTML = "guess the flag";
        document.getElementById("projectDesc").innerHTML = "A game that gives you a random flag to guess.";
    } else if (boolean == false) {
        document.getElementById("projectName").innerHTML = "projects";
        document.getElementById("projectDesc").innerHTML = "Here's a list of all my projects";
    }
}

function website(boolean) {
    if (boolean == true) {
        document.getElementById("projectName").innerHTML = "portfolio website";
        document.getElementById("projectDesc").innerHTML = "My website to showcase all my projects and experience.";
    } else if (boolean == false) {
        document.getElementById("projectName").innerHTML = "projects";
        document.getElementById("projectDesc").innerHTML = "Here's a list of all my projects";
    }
}

function lc(boolean) {
    if (boolean == true) {
        document.getElementById("projectName").innerHTML = "lc-solver";
        document.getElementById("projectDesc").innerHTML = "A Discord Bot that solves Lunarclient discord's server minigames";
    } else if (boolean == false) {
        document.getElementById("projectName").innerHTML = "projects";
        document.getElementById("projectDesc").innerHTML = "Here's a list of all my projects";
    }
}
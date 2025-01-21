
/*jslint browser*/

// Current state of the playable character (pc)
var pc_state = {};

// Game language
var lang = "en";

// language dependent contents
var contents = {}

function start_game(evt) {
    pc_state.loc = "config";
    pc_state.hints = [];
    pc_state.items = [];


    update_view();
}

function update_view() {
    document.getElementsByTagName("article")[0].innerHTML = contents.loc_desc.config;
}

async function init_site() {
    let lang = document.documentElement.getAttribute("lang");
    let contents_url = "contents_" + lang + ".json";
    try {
        const response = await fetch(contents_url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        contents = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }

    update_view();
}


window.addEventListener("load", init_site);

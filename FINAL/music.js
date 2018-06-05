// let url = "https://itunes.apple.com/search?term=deadmau5&media=music&limit=200";
let url = "https://itunes.apple.com/search?term=slip+deadmau5&media=music&entity=song&limit=1";

let addResult = document.querySelector('#music');
getMusic(url);

// async function
async function getMusic(url) {
  // await response of fetch call
  let response = await fetch(url);
  // only proceed once promise is resolved
  let data = await response.json();
  let stuff = '';

  // only proceed once second promise is resolved

    // complete for loop to iterate through data.results
    for (let i = 0; i < data.results.length; i++) {
            stuff +=  "</a><br><img class='space' src=" + data.results[i].artworkUrl100 +
            "><audio controls preload='none' style='width: 200px'><source src=" + data.results[i].previewUrl + " type= 'audio/mp4'/></audio>";
    }

    addResult.innerHTML = stuff
}
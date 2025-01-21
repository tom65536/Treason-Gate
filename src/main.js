/* jslint browser */

// language dependent contents
let contents = {}

function updateView () {
  document.getElementsByTagName('article')[0].innerHTML = contents.loc_desc.config
}

async function initSite () {
  const lang = document.documentElement.getAttribute('lang')
  const contentsUrl = 'contents_' + lang + '.json'
  try {
    const response = await fetch(contentsUrl)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    contents = await response.json()
    console.log(contents)
  } catch (error) {
    console.error(error.message)
  }

  updateView()
}

window.addEventListener('load', initSite)

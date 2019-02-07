var convertBtn = document.querySelector('.convert-button')
var URLinput = document.querySelector('.URL-input')
var typeSelect = document.querySelector('.type-select')

convertBtn.addEventListener('click', () => {
  if (!URLinput.value || !typeSelect.value) return
  const videoURL = URLinput.value
  const type = typeSelect.value
  let id = getIDFromURL(videoURL)

  // console.log(`video id is： ${id}`)
  sendURL(id, type)
})

function sendURL(id, type) {
  let url = 'http://localhost:4000/'
  if (type === 'mp3') {
    url += 'mp3_download'
  } else if (type === 'mp4') {
    url += 'mp4_download'
  }
  url += `?id=${id}`
  window.location.href = url
}

function getIDFromURL(URL) {
  let temp
  if (URL.indexOf('youtu.be') !== -1) {
    temp = URL.slice(URL.indexOf('youtu.be/') + 9)
    if (temp.indexOf('?') !== -1) {
      temp = temp.slice(0, temp.indexOf('?'))
    }
  } else {
    temp = URL.slice(URL.indexOf('v=') + 2)
    if (temp.indexOf('&') !== -1) {
      temp = temp.slice(0, temp.indexOf('&'))
    }
  }
  return temp
}
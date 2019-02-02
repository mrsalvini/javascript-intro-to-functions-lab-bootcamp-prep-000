function shout(string) {
  string = string.toUpperCase()
  return string
}

function whisper(string) {
  string = string.toLowerCase()
  return string
}

function logShout(string) {
  console.log(shout(string))
}


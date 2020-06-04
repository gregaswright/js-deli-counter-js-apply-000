
function takeANumber(line, array) {
    line.push(array)
    return `Welcome, ${array}. You are number ${line.length} in line.`
}

function nowServing(line) {
  let array = line.shift()
  if (array > line) {
    return `Currently serving ${array}.`
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(line) {
  let array = []
  for (var i = 0; i < line.length; i++) {
    array.push(` ${i + 1}. ${line[i]}`)
  }
  if (line.length > 0) {
    return `The line is currently:${array}`
  } else {
    return 'The line is currently empty.'
  }
}

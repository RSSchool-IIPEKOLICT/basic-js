/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (options === undefined || !options.repeatTimes) {
    if (options.addition) return str + options.addition
    else if (options.addition === null) return str + 'null'
    else if (options.addition === false) return str + 'false'
  }

  const stock = str

  for (let i = 0; i < options.repeatTimes; i++) {
    if (options.additionRepeatTimes) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        str += (options.addition) ? options.addition : ''
        if (options.addition === null) str += 'null'
        if (options.addition === false) str += 'false'

        if (j < options.additionRepeatTimes - 1) {
          str += (options.additionSeparator) ? options.additionSeparator : '|'
        }
      }
    } else {
      str += (options.addition) ? options.addition : ''
      if (options.addition === null) str += 'null'
      if (options.addition === false) str += 'false'
    }

    if (i < options.repeatTimes - 1) {
      str += (options.separator) ? options.separator : '+'
      str += stock
    }
  }

  return str
}

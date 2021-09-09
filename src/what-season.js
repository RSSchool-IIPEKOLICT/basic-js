// import { NotImplementedError } from '../extensions/index.js';

const m = [31,28,31,30,31,30,31,31,30,31,30,31]
const error = new Error('Invalid date!')
const getClass = arg => { return {}.toString.call(arg).slice(8, -1) }

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  return solution(date)
}

function solution(d) {
  if (d === undefined) return 'Unable to determine the time of year!'
  if (getClass(d) !== 'Date') throw error
  if (d[Symbol.toStringTag]) throw error

  let y = d.getFullYear()
  let mon = d.getMonth()
  let day = d.getDay()

  for (let i = 0; i < m.length; i++) {
    if (mon !== 12 && mon === i + 1 && day > m[i]) {
      mon++
    } else if (mon === 12 && mon === i + 1 && day > m[i]) {
      y++
      mon = 1
    }
  }

  if (!((y % 4) || (!(y % 100) && (y % 400))) && mon === 2 && day === 28) mon++

  if (mon === 11 || mon < 2) return 'winter'
  else if (mon < 5) return 'spring'
  else if (mon < 8) return 'summer'

  return 'autumn'
}

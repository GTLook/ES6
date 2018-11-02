
const perimeter = (n) => {
    return 4 * fib(n+1)
}

const fib = (n, current = 1, previous = 0) => {
  if( n == 0 ) return 0 
  if( n !== 0 ) return current + fib(n-1, previous + current, current)
}

perimeter(5)


const perimiter = (n) => 4 * fibSum(n+1)

const fibSum = ( n , current = 1, previous = 0) => {
  console.log('n',n)
  console.log('current',current)
   console.log('previous',previous)
  if( n == 0 ) return 0
  if( n !== 0 ) return current + fibSum(--n, previous + current, current)
}

perimiter(5)

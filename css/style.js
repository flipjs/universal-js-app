import css from 'next/css'

export default css({
  color: 'red',
  ':hover': {
    color: 'blue',
    cursor: 'pointer'
  },
  '@media (max-width: 500px)': {
    color: 'rebeccapurple'
  }
})


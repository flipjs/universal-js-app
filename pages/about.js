import React from 'react'
import css from 'next/css'

export default () => <h1 className={style}>About Page</h1>

const style = css({
  color: 'red',
  ':hover': {
    color: 'blue',
    cursor: 'pointer'
  },
  '@media (max-width: 500px)': {
    color: 'rebeccapurple'
  }
})

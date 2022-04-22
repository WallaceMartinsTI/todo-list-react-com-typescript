import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <div>
      <header className={styles.header}>
        <h1>React + TS ToDo</h1>
      </header>
    </div>
  )
}

export default Header
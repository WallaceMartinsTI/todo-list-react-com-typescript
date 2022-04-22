import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p>
          <span>React + TS ToDo</span> @ 2022
        </p>
      </footer>
    </div>
  )
}

export default Footer
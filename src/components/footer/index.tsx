import React from 'react'
import './style.less'

export default function Footer() {
  return (
    <div className="footer">
      <div className="copyright">
        <span>© Rights Reserved 2020-{new Date().getFullYear()}</span>
        <a href="https://blog.marryto.me" target="_blank">Koya</a>
        <span>🚀</span>
      </div>
    </div>
  )
}

import React from 'react'
import Footer from '@/components/footer'
import FilePond from './components/filepond'

import './style.less'

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="home-page">
        <FilePond />
        <Footer />
      </div>
    )
  }
}

import React from 'react'
import Link from 'gatsby-link'
import '../assets/css/style.css';

import pic05 from '../images/pic05.jpg'
import pic02 from '../images/matkot.gif'
import pic03 from '../images/traveling.gif'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">My Dog - Angie</h2>
          <span className="image main"><img src={pic05} alt="" /></span>
          <p className="desc">Angie is my 3-year-old Beagle dog<br />
          She has been living with me and Yarden in the past 2 years</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">My Favorite Sport</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p className="desc">I Love Matkot!</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Traveling</h2>
          <span className="image main"><img src={pic03} alt="" /></span> 
          <p className="desc">Some photos from travels around the world</p>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main
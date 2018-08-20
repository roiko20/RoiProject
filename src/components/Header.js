import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-code"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Roi's Project</h1>
                <h3>Welcome to my Gatsby&React project</h3>
                <h4>Here you will be able to find some information and images from my life :)</h4>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Angie</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Sport</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Traveling</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header

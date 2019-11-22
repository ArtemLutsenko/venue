import React from 'react'
import Fade from 'react-reveal/Fade'

const Footer = () => {
    return (
        <footer className = "bck_red">
            <Fade delay = {500}>
                <div className="font_righteous footer_logo_venue">
                    <div className="footer_capyright">
                        The venue 2019
                    </div>
                </div>
            </Fade>
        </footer>
    )
}

export default Footer

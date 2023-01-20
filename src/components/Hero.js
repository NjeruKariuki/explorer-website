import '../style.css';


export default function Hero() {
    return (
        <div className="hero">
            <img src="https://source.unsplash.com/random/1600x900" alt='hero' />
            <div className="hero-content">
                <h1 className="hero-text">
                    The Best Way To Have Fun, Your Way To Have Fun
                </h1>
                <div className="hero-buttons">
                <button className="button">SIGN IN</button>
                <button className="outline-button">EXPLORE</button>

                </div>
                
            </div>

        </div>
    )
}
import '../styles/introduction.css'

const introText = "Welcome to the ultimate destination for Mac enthusiasts and users seeking to optimize their computing experience. This website provides a comprehensive guide to all things Mac setup and configuration. Whether you are a seasoned Mac aficionado looking to fine-tune your existing setup or a newcomer eager to embark on your Mac journey, we've got you covered. Explore a wealth of tools, insights, tips, and tricks that will improve your workflow and Mac experience. Dive into the world of macOS and discover the art of configuring your Mac to perfection.";

const Introduction = () => {
    return (
        <div className={"general"}>
            <div className={"general__div"}>
                <h1>Welcome to my Mac setup and Configuration Guide!</h1>
                <p>{introText}</p>

                <h2>Contributing to the guide</h2>
                <p>
                    If you've found this page helpful and have additional insights or suggestions to enhance its
                    content, I warmly welcome your contributions. Don't hesitate to open a pull request!
                </p>
                <hr className={"line"}></hr>
            </div>
        </div>
    )
}

export default Introduction;

import '../styles/introduction.css'

const introText = "Welcome to the ultimate destination for Mac enthusiasts and users seeking to optimize their computing experience. Our website is your comprehensive guide to all things Mac setup and configuration. Whether you're a seasoned Mac aficionado looking to fine-tune your existing setup or a newcomer eager to embark on your Apple journey, we've got you covered. Explore a wealth of expert insights, tips, and tutorials that will empower you to unlock the full potential of your Mac, creating a customized, efficient, and seamless computing environment tailored to your unique needs. Dive into the world of macOS and discover the art of configuring your Mac to perfection, all right here on our website.";

const Introduction = () => {
    return (
        <div className={"intro"}>
            <div className={"intro__div"}>
                <h1>Welcome to the Ultimate Mac Setup and Configuration Guide!</h1>
                <p>{introText}</p>
            </div>
        </div>
    )
}

export default Introduction;

import classes from "./Footer.module.css";

function Footer() {
    return (
        <footer>
            <div className={classes.wrapers}>
                <div className={classes.slider}>
                    <div className={classes.wraper__item}>
                        Created with ❤️ by
                    </div>
                    <div className={classes.wraper__item}>
                        <a
                            className="website-link"
                            href="https://linktr.ee/hmjatt"
                        >
                            Harmeet Matharoo,
                        </a>
                    </div>
                    <div className={classes.wraper__item}>
                        <a
                            className="website-link"
                            href="https://github.com/HabibUrRehmanBhattii"
                        >
                            Habib ur rehman Bhatti.{" "}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

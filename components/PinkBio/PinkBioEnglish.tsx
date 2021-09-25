import type { NextPage } from "next";
import { Zoom } from "react-awesome-reveal";
import styles from "../../styles/Projects.module.scss";

const PinkBioEnglish: NextPage = () => {

    return (
        <main className={styles.containerPinkBio}>
            <Zoom className={styles.slide}>
                <div className={styles.alignButton}>
                    <a
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                        href="https://pinkbio.netlify.app/"
                        className={styles.buttonLink}>
                        Go to the page
                    </a>
                </div>
            </Zoom>
        </main>
    )
}

export default PinkBioEnglish;
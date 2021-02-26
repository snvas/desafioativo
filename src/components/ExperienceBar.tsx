import styles from '../styles/components/ExperienceBar.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';

export function ExperienceBar() {
    const { currentExperience, expererienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / expererienceToNextLevel;


    return (
        <header className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} xp</span>

            </div>
            <span>{expererienceToNextLevel} px</span>


        </header>

    )


}

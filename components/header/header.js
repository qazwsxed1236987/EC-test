import { useContext } from "react";
import { AllContext } from '@/context/Allprovider'

import styles from './head.module.css'

import { BellLogo, AddLogo, SearchLogo, AlbumLogo } from '@/components/svgicon/'

export default function Head() {
    const { screen } = useContext(AllContext)
    return (
        <>

            < section className={styles.head}>
                <div className={styles.nav}>
                    {screen > 800 ? (
                        <>
                            <div>
                                <button className={styles.search}><SearchLogo /></button>
                            </div>
                            <div className={styles.right}>
                                <button className={styles.add}><p>Submit a photo</p><AddLogo /></button>
                                <button className={styles.bell}><BellLogo /></button>
                            </div>
                        </>
                    ) : (
                        <>
                            <button className={styles.album}><AlbumLogo /></button>
                            <button className={styles.search}><SearchLogo /></button>
                            <button className={styles.bell}><BellLogo /></button>
                        </>
                    )
                    }
                </div>
            </section >
        </>
    )
}
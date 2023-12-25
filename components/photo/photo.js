import { useState, useEffect } from "react";

import Image from "next/image"
import Head from "../header/header";
import styles from './photo.module.css'

import { DownloadLogo, ShareLogo, InfoLogo, LikeLogo, FlagLogo, CloseLogo } from "../svgicon/";

export default function Photo({
    albumId = 1,
    id = 1,
    title = "accusamus beatae ad facilis cum similique qui sunt",
    url = "https://via.placeholder.com/600/92c952",
    thumbnailUrl = "https://via.placeholder.com/150/92c952"
}) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                togglefalse()
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    const toggletrue = () => {
        setShow(true);
    }
    const togglefalse = () => {
        setShow(false);
    }


    return (
        <>
            <Image
                src={thumbnailUrl}
                alt={title}
                width={100}
                height={100}
                onClick={toggletrue}
                className={styles.img}
            />
            <div className={styles.modal} style={{ display: show ? 'flex' : 'none' }}>
                <Head />
                <div className={styles.photomodal}>
                    <div className={styles.top}>
                        <button className={styles.btn}><p className={styles.p}>Download</p><DownloadLogo /></button>
                        <button className={styles.btn}><p className={styles.p}>Share</p><ShareLogo /></button>
                        <button className={styles.btn}><p className={styles.p}>Info</p><InfoLogo /></button>
                    </div>
                    <div className={styles.photo}>
                        <Image
                            src={url}
                            alt={title}
                            width={100}
                            height={100}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className={styles.down}>
                        <div>
                            <p className={styles.title}>Title</p>
                            <p className={styles.p}>{title}</p>
                        </div>
                        <div className={styles.btnbox}>
                            <button className={styles.btnborder}><p className={styles.p}>Like</p><LikeLogo /></button>
                            <button className={styles.btnborder}><p className={styles.p}>Save</p><FlagLogo /></button>
                        </div>
                    </div>
                </div >
                < button className={styles.close} onClick={togglefalse} > <CloseLogo /></button >
            </div >

        </>
    )
}
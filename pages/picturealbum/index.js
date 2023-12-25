import { useContext } from "react"
import { useRouter } from 'next/router'
import { AllContext } from '@/context/Allprovider'

import Photo from '@/components/photo/photo'
import Head from "@/components/header/header"

import { FlagLogo, ShareLogo } from "@/components/svgicon/"

export default function Picturealbum() {

    const router = useRouter()
    const routerjump = (url) => {
        router.push({
            pathname: `/${url}`,
        })
    }
    const { member, photo, albumList, screen } = useContext(AllContext)

    const filterdatalist = (photo) => {
        if (photo) {
            return (
                photo.map((v) => (
                    <div key={v.id} className='image'>
                        <Photo
                            albumId={v.albumId}
                            id={v.id}
                            title={v.title}
                            url={v.url}
                            thumbnailUrl={v.thumbnailUrl}
                        />
                    </div>
                )))
        }
    }
    const moibledatalist = (photo) => {
        if (photo) {
            const one_photo = photo[0]
            return (
                <div key={one_photo.title} className='image'>
                    <Photo
                        albumId={one_photo.albumId}
                        id={one_photo.id}
                        title={one_photo.title}
                        url={one_photo.url}
                        thumbnailUrl={one_photo.thumbnailUrl}
                    />
                </div>
            )
        }
    }

    return (
        <>
            <main className="picturealbum">
                <Head />
                {member.id ? (
                    <>
                        <div className='body'>
                            <section className='user'>
                                <h1>{member.name}</h1>
                                <div className='useremail'>
                                    <ShareLogo />
                                    <p className='p'>{member.email}</p>
                                </div>
                            </section>
                            {albumList.map((albumList, i) => (
                                <section key={i}>
                                    <div className="title">
                                        <FlagLogo />
                                        <p className='p' onClick={() => { routerjump(`picturealbum/${albumList.id}`) }}>{albumList.title}</p>
                                    </div>
                                    {screen > 800 ?
                                        <div className='albumlist' key={albumList.id}>
                                            {filterdatalist(photo[i])}
                                        </div> :
                                        <div className='albumlist' key={albumList.id}>
                                            {moibledatalist(photo[i])}
                                        </div>
                                    }
                                </section>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className='body'>請登入帳號</div>
                )}
            </main>
        </>
    )
}
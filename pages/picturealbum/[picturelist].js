import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { AllContext } from '@/context/Allprovider'

import Head from '@/components/header/header'
import Photo from '@/components/photo/photo'

export default function PictureAlbum() {
    const router = useRouter()

    const { member, albumList } = useContext(AllContext)

    const [album, setAlbum] = useState({})
    const [photoList, setPhotoList] = useState([])

    useEffect(() => {
        if (router.isReady) {
            const { picturelist } = router.query
            if (picturelist) {
                const [album] = albumList.filter((data) => (String(data.id) === picturelist))
                setAlbum(album)
                getphoto(picturelist)
            }
        }
    }, [router.isReady, router, member])

    // get photo
    const getphoto = async (id) => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
                .then(res => res.json())
                .then(res => {
                    setPhotoList(res)
                    // console.log(res);
                })
        } catch (error) {
            console.error('Error fetching photo:', error);
        }
    }
    // export photo
    function photolist(photoList) {
        return (
            <div className='photolist'>
                {photoList.map((v) => (
                    <div key={v.id} >
                        <Photo
                            albumId={v.albumId}
                            id={v.id}
                            title={v.title}
                            url={v.url}
                            thumbnailUrl={v.thumbnailUrl}
                        />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <>
            {member.id ? (
                <main className="picturelist">
                    <Head />
                    <section className='body'>
                        <h1 className='title'>{album.title}</h1>
                        {photolist(photoList)}
                    </section>
                </main>
            ) : (
                <div className='body'>請登入帳號</div>
            )}
        </>
    )


}
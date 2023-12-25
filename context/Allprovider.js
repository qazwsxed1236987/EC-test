import React, { createContext, useState, useEffect } from 'react'

const AllContext = createContext()

const AllProvider = ({ children }) => {

    // member data
    const [member, setMember] = useState({})
    // all photo(前四)
    const [photo, setPhoto] = useState([])
    // album List
    const [albumList, setAlbumList] = useState([])
    // window sreen
    const [screen, setScreen] = useState('')

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setScreen(windowWidth)
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (member.id) {
            getphotoalbums(member)
        }
    }, [member])

    useEffect(() => {
        getphoto(albumList)
    }, [albumList])
    useEffect(() => {
    }, [photo])

    const getphotoalbums = async (member) => {
        try {
            fetch(`https://jsonplaceholder.typicode.com/albums?userId=${member.id}`)
                .then(res => res.json())
                .then(res => {
                    setAlbumList(res)
                })
        } catch (error) {
            console.error('Error fetching photo:', error);
        }
    }

    const getphoto = async (albumList) => {
        try {
            const allphoto = []
            for (let i = 0; i < albumList.length; i++) {
                try {
                    await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumList[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            allphoto.push(res.slice(0, 4))
                        })
                } catch (error) {
                    console.error('Error fetching photo:', error);
                }
            }
            setPhoto(allphoto)
        } catch (error) {
            console.error('Error fetching photo:', error);
        }
    }

    return (
        <AllContext.Provider value={{ member, setMember, photo, albumList, screen }}>
            {children}
        </AllContext.Provider>
    )
}
export { AllProvider, AllContext }
import Head from 'next/head'
import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { AllContext } from '@/context/Allprovider'

export default function Home() {

  const router = useRouter()
  const routerjump = (url) => {
    router.push({
      pathname: `/${url}`,
    })
  }

  const { setMember, screen } = useContext(AllContext)
  const [loginid, setLoginid] = useState('')

  useEffect(() => {
  }, [loginid, screen])

  const checkandrouter = (loginid, url) => {

    fetch(`https://jsonplaceholder.typicode.com/users/${loginid}`)
      .then(res => res.json())
      .then(res => {
        if (res.id) {
          setMember(res)
          routerjump(url)
        } else {
          alert('ID不存在')
        }
      })
  }

  return (
    <>
      <Head>
        <title>登入介面</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className='login'>
        <section className='topsection'>
          <input type='text'
            className='H50 input'
            placeholder='User ID'
            value={loginid}
            onChange={(e) => { setLoginid(e.target.value) }}
          />
          {/* login點選跳轉 */}
          <button
            className='downbtn H50 font18'
            onClick={() => {
              checkandrouter(loginid, 'picturealbum')
            }}>Login In</button>
          <div className='text'>Don’t have an account?</div>
        </section>

        <section className='downsection'>
          <button className='downbtn H50 font18' style={{ marginRight: "20px" }}>Register</button>
          <button className='downbtn H50 font18'>{screen > 800 ? 'Contiue with Google' : 'Google'}</button>
        </section>
        <section className='slogan'>
          <p className='p'>All rights reserved. content privacy</p>
        </section >
      </main >
    </>
  )
}
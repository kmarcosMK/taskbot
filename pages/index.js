import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsMeta } from '../lib/posts'

export async function getStaticProps(){
  const posts = getSortedPostsMeta()
  return { props: { posts } }
}

export default function Home({posts}){
  return (
    <div className="page">
      <Head><title>TaskAI – AI w zadaniach i produktywności</title></Head>
      <header className="header">
        <div className="container">
          <h1 className="logo">TaskAI</h1>
          <nav className="nav">
            <a href="/">Start</a>
            <a href="/blog">Blog</a>
            <a href="/about">O nas</a>
            <a href="/contact">Kontakt</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2 style={{fontSize:28}}>AI, które pomaga wykonać pracę lepiej.</h2>
          <p className="subtitle">Praktyczne artykuły i narzędzia dla osób i firm, które chcą automatyzować zadania i podnosić produktywność bez nadmiernego ryzyka.</p>
          <div>
            <a className="btn primary" href="/blog">Wejdź na Blog</a>
            <a className="btn" href="/about">Dowiedz się więcej</a>
          </div>
        </div>
      </section>

      <main>
        <section className="section alt">
          <div className="container">
            <h3>Wybór redakcji</h3>
            <div className="grid">
              {posts.slice(0,3).map(p=> (
                <article key={p.slug} className="card">
                  <h4><Link href={'/blog/'+p.slug}><a style={{color:'#00ffe7'}}>{p.title}</a></Link></h4>
                  <p style={{color:'#bbb'}}>{p.description}</p>
                  <p style={{fontSize:12,color:'#999'}}>{p.date}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2025 TaskAI.pl · Treści informacyjne. Częściowo generowane przy użyciu narzędzi AI.</p>
          <div className="partner-links">
            <a href="https://taskbot.pl" target="_blank" rel="noopener noreferrer">taskbot.pl</a>
            <a href="https://ejep.pl" target="_blank" rel="noopener noreferrer">ejep.pl</a>
            <a href="https://irobo.pl" target="_blank" rel="noopener noreferrer">irobo.pl</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

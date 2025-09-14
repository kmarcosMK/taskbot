import Link from 'next/link'
import { getSortedPostsMeta } from '../../lib/posts'

export async function getStaticProps(){
  const posts = getSortedPostsMeta()
  return { props: { posts } }
}

export default function Blog({posts}){
  return (
    <div className="page">
      <main className="container section">
        <h1>Blog — Analizy i inspiracje</h1>
        <div style={{display:'grid',gap:18}}>
          {posts.map(p=> (
            <article key={p.slug} style={{padding:18,background:'rgba(255,255,255,0.03)',borderRadius:10}}>
              <h3><Link href={'/blog/'+p.slug}><a style={{color:'#00ffe7'}}>{p.title}</a></Link></h3>
              <p style={{color:'#bbb'}}>{p.description}</p>
              <p style={{fontSize:13,color:'#999'}}>{p.date}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}

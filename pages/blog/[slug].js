import { getPostBySlug, getSortedPostsMeta } from '../../lib/posts'

export async function getStaticPaths(){
  const posts = getSortedPostsMeta()
  return {
    paths: posts.map(p=>({ params: { slug: p.slug } })),
    fallback: false
  }
}

export async function getStaticProps({params}){
  const post = await getPostBySlug(params.slug)
  return { props:{ post } }
}

export default function Post({post}){
  return (
    <div className="page">
      <main className="container section">
        <h1>{post.title}</h1>
        <p style={{color:'#999'}}>{post.date}</p>
        <article className="article" dangerouslySetInnerHTML={{__html: post.contentHtml}} />
      </main>
    </div>
  )
}

import React from 'react';
import styles from './styles.module.scss';
import { client } from '../../lib/client';
import { Article, Title, Content } from '../../components';
import { format } from 'date-fns';
import Head from 'next/head';


const Post = ({ post }) => {
  const { title, body, publishedDate, meta_title } = post;
  const date = format(new Date(publishedDate), 'MMMM dd, yyyy');
  return (
    <div className={styles.post}>
      <Article backUrl='/' className={styles.post}>
      <Head>
        <title>{meta_title}</title>
      </Head>
        <Title className={styles.postTitle}>{title}</Title>
        <p className={styles.postDate}>{date}</p>
        <Content body={body} />
      </Article>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  const query = `*[_type == 'post']{
    slug {
      current
    }
  }`;
  const posts = await client.fetch(query);
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
}
// export async function getStaticProps({ params: { slug } }) {
//   const query = `*[_type == 'post' && slug.current == '${slug}'][0]`;
//   const post = await client.fetch(query);
//   return {
//     props: {
//       post,
//     },
//   };
// }

export async function getStaticProps(context) {
  const { slug } = context.params;
  const query = `*[_type == 'post' && slug.current == '${slug}'][0]`;
  const post = await client.fetch(query);
  return {
    props: {
      post,
    },
  };
}
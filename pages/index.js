import React, { useState } from 'react';
import {
  Section,
  Cover,
  SocialNetworks,
  BuyMeCoffee,
  Title,
  PostGrid,
  Post,
  Button,
} from '../components';

import { loadPosts } from './api/posts';

const LOAD_MORE_STEP = 2;

export default function Home({ initialPosts, total }) {
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const isLoadButton = total > loadedAmount;

  const getMorePosts = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `/api/posts?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`,
      ).then((response) => response.json());
      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setLoading(false);
      setPosts([...posts, ...data.posts]);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  return (
    <div>
      <Section>
        <Cover title='Elena<br/> Cherpakova' />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>My New Post</Title>
        <PostGrid>
          {posts.map((post) => (
            <Post key={post.slug.current} {...post} />
          ))}
        </PostGrid>
        {isLoadButton && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={getMorePosts} disabled={loading}>
              Loading More Posts...
            </Button>
          </div>
        )}
      </Section>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP);
  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
};

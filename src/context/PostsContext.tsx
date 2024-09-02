"use client";

import React, { createContext, useContext, ReactNode } from 'react';

type Post = {
  ID: number;
  title: { rendered: string };
  content: { rendered: string };
};

type PostsContextType = {
  posts: Post[];
};

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
};

type PostsProviderProps = {
  posts: Post[];
  children: ReactNode;
};

export const PostsProvider: React.FC<PostsProviderProps> = ({ posts, children }) => {
  return (
    <PostsContext.Provider value={{ posts }}>
      {children}
    </PostsContext.Provider>
  );
};
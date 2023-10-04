
import axios from 'axios';

export interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
}

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get('http://localhost/cochesdelujo/wp-json/wp/v2/posts?_embed');
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the blog posts:", error);
    return [];
  }
};

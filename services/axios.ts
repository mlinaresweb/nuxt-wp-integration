import axios from 'axios';


export interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
}

export const fetchPosts = async (lang: string): Promise<Post[]> => {
  try {
    const response = await axios.get(`https://wordpress-1123256-3934790.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&lang=${lang}`);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the blog posts:", error);
    return [];
  }
};


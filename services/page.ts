// page.ts
import axios from 'axios';

export interface Page {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  yoast_head_json: any;
}

export const fetchPage = async (slug: string, lang: string): Promise<Page[]> => {
  try {
    const response = await axios.get(`https://wordpress-1123256-3934790.cloudwaysapps.com/wp-json/wp/v2/pages?_embed&slug=${slug}&lang=${lang}`);    
    return response.data[0];
  } catch (error) {
    console.error("There was an error fetching the page:", error);
    return [];
  }
};

export interface NewsData {
    id: number;
    title: string;
    description: string;
    category: string;
    date: string;
  }
  
  export interface NewsState {
    news: NewsData[];
  }
  
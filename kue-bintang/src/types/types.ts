export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}
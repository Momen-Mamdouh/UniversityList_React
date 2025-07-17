export interface IBlogResponse {
  totalArticles: number
  articles: IBlogCard[]
}

export interface IBlogCard {
  id: string
  title: string
  description: string
  content: string
  url: string
  image: string
  publishedAt: string
  source: Source
}

export interface Source {
  id: string
  name: string
  url: string
}

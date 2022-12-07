export type SearchedData = {
    results: Array<ItemType>
    total: number
    total_pages: number
}

export type ItemType = {
    id: string
    created_at: string
    updated_at: string
    width: number
    height: number
    color: string
    blur_hash: string
    likes: number
    liked_by_user: boolean
    description: string
    user: Object
    current_user_collections: Array<any>
    urls: {
        "raw": string
        "full": string
        "regular": string
        "small": string
        "thumb": string
    }
    links: Object
}

export type UserType = {
    name: string
    email: string
    password: string
}

export type FilmType = {
    "id": number,
    "image": string,
    "title": string,
    "genre": string,
    "director": string,
    "year": number,
    "plot": string,
    "writer": string,
    "actors": Array<string>,
    "imdb_rating": number
}
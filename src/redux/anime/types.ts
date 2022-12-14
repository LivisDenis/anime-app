
export type AnimeAttributesType = {
    ageRatingGuide: string
    averageRating: string
    canonicalTitle: string
    coverImage: AnimeCoverImageType
    startDate: string
    description: string
    endDate: string
    episodeCount: number
    posterImage: AnimePosterImageType
    slug: string
    status: string
    synopsis: string
    titles: AnimeTitlesType
    youtubeVideoId: string
}
type AnimeTitlesType = {
    en: string
    en_jp: string
    ja_jp: string
}
type AnimePosterImageType = {
    large: string
    medium: string
    original: string
    small: string
    tiny: string
}
type AnimeCoverImageType = {
    large: string
    original: string
    small: string
    tiny: string
}

export type AnimeType = {
    _id?: string | undefined
    id: string
    attributes: AnimeAttributesType
    favRemove?: boolean
    user?: {_id: string}
}

export type fetchParamsType = {
    queryOffset: string
    querySearch: string
    rating: string
}

export type SearchAnimeParams = {
    page: number
    filter: string
    search: string
}

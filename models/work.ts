export interface Work {
    id: number | string
    title: string
    tagList: string []
    shortDescription: string
    fullDescription: string
    createdAt: string
    updatedAt: string
    thumbnailUrl: string
}

export interface WorkPayload extends Work {
	// ...
}


export interface WorkFiltersPayload {
	search: string
	tagList_like?: string
	selectedTagList?: string[] // temp value to store autocomplete value, not send to API
}
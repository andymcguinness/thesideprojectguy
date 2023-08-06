// Generating my types
export interface Ideas {
    "allIdeas": [
        Idea
    ];
}

export interface Idea {
    "title": string;
    "description": string;
    "tags": [ IdeaTag ];
}

export interface IdeaTags {
    "allIdeaTags": [
        IdeaTag
    ];
}

export interface IdeaTag {
    "name": string;
    "slug": string;
    "id": number;
}
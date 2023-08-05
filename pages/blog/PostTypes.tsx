import { StructuredTextDocument } from "react-datocms"

// Generating my types
export interface Posts {
    "allPosts": [
        Post
    ];
}

export interface Post {
    "author": Author;
    "body": {
        "value": StructuredTextDocument
    };
    "categories": [ Category ];
    "excerpt": {
        "value": StructuredTextDocument
    };
    "image": {
        "url": string;
        'blurHash': string;
    };
    "subtitle": string;
    "tags": [ Tag ];
    "title": string;
    "slug": string;
}

export interface Author {
    "name": string;
    "image": {
        "url": string;
        "blurHash": string;
    };
    "excerpt": {
        "value": StructuredTextDocument
    };
}

export interface Category {
    "name": string;
    "slug": string;
    "id": number;
}

export interface Tag {
    "name": string;
    "slug": string;
    "id": number;
}
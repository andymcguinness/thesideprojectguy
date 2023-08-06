// Generating my types
export interface Projects {
    "allProjects": [
        Project
    ];
}

export interface Project {
    "title": string;
    "description": string;
    "tags": [ ProjectTag ];
    "link": string;
}

export interface ProjectTags {
    "allProjectTags": [
        ProjectTag
    ];
}

export interface ProjectTag {
    "name": string;
    "slug": string;
    "id": number;
}
export interface Project {
    difficulty: number;
    edited: string;
    github: string;
    id: number;
    image: string;
    likes: number;
    published: string;
    status: boolean;
    summary: string;
    technology: string[];
    title: string;
    valoration: number;
}

export interface ProjectList {
    projects?: Project[]
}
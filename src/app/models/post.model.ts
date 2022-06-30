import { UserPreview, List } from "./user.model";
export interface PostCreate {
    text: string;
    image: string;
    likes: number;
    tags: Array<string>;
    owner: string;
}
export interface PostPreview {
    id: string;
    text: string;
    image: string;
    likes: number;
    tags: Array<string>;
    publishDate: string;
    owner: UserPreview;
}
export interface Post {
    id: string;
    text: string;
    image: string;
    likes: number;
    link: string;
    tags: Array<string>;
    publishDate: string;
    owner: UserPreview;
}
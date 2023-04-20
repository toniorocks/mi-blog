import { Author } from "./author";

export class Item {
    author: Author | undefined;
    blog: { id:string | undefined } | undefined;
    content: string | undefined;
    etag: string | undefined;
    id: string | undefined;
    kind: string | undefined;
    published: string | undefined;
    replies: { selfLink:string | undefined; totalItems:string | undefined } | undefined;
    selfLink:string | undefined;
    title: string | undefined;
    updated: string | undefined;
    url: string | undefined;
}

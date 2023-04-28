export class Blog {
    kind: string | undefined;
    id: string | undefined;
    name: string | undefined;
    description: string | undefined;
    published: string | undefined;
    updated: string | undefined;
    url: string | undefined;
    selfLink: string | undefined;
    posts: {
        totalItems: number | undefined;
        selfLink: string | undefined;
    } | undefined
    pages: {
        totalItems: number | undefined;
        selfLink: string | undefined;
    } | undefined
    locale: {
        language: string | undefined;
        country: string | undefined;
        variant: string | undefined;
    } | undefined
}

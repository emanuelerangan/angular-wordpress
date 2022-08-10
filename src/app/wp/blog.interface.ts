export interface WpmlTranslation {
    locale: string;
    id: number;
    post_title: string;
    href: string;
    slug: string;
}

export interface Post {
    id: number;
    date: Date;
    date_gmt: Date;
    guid: any;
    modified: Date;
    modified_gmt: Date;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: any;
    content: any;
    excerpt: any;
    author: string;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: any[];
    categories: number[];
    tags: any[];
    yst_prominent_words: any[];
    featured_image_url_medium: string;
    featured_image_type: string;
    categories_names: string[];
    tags_names: any[];
    wpml_current_locale: string;
    wpml_translations: WpmlTranslation[];
    _links: any;
}


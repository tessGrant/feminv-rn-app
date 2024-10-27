export interface PostProps {
    id: string;
    author: {
        name: string;
        initials: string;
    };
    content: string;
    timestamp: Date;
}
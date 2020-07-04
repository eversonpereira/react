import { configs } from './../configs';
import axios from 'axios';

const baseURL = configs.apis.github;

export interface GetGithub {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name?: any;
    company?: any;
    blog: string;
    location?: any;
    email?: any;
    hireable?: any;
    bio?: any;
    twitter_username?: any;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
}


// aqui não usa await pq não preciso esperar para tratar, como no do CEP. Nesse caso (github) o await ficará no index.
export const getUser = (userName: string) => {
    return axios.request<GetGithub>({ baseURL, url: `users/${userName}` })
}


export interface FetchType {
    loading: 'idle' | 'pending' | 'failed' | 'succeeded';
    error: string | null;
}

export const fetchObject: FetchType = {
    loading: 'idle',
    error: null,
}

export interface UserType {
    username: string;
    email: string;
    id: number;
    timeCreated: number;
}

export interface ProductType {
    name: string;
    price: number;
    quantity?: number;
    description?: string;
    category? : string;
}
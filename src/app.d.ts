// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface Platform {}
    }
}

declare interface LoginFormData {
    email: string;
    password: string;
    remember_me: boolean;
}

declare interface RegisterFormData {
    first_name: string;
    last_name: string;
    gender: string;
    birth_date: Date;
    email: string;
    password: string;
}


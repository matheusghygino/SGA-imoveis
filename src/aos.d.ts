// aos.d.ts
declare module 'aos' {
    const aos: {
        init: (config?: { duration?: number; once?: boolean }) => void;
        refresh: () => void;
    };
    export default aos;
}
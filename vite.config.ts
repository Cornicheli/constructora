import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { imagetools } from 'vite-imagetools';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), imagetools()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@assets': path.resolve(__dirname, './src/assets'),
        },
    },
});

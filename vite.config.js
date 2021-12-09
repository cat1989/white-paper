import { defineConfig } from 'vite'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.npm_config_port || process.env.PORT

export default defineConfig({
    server: {
        port,
    },
    resolve: {
        extensions: [
            ".ts", ".js", ".mjs"
        ]
    },
})

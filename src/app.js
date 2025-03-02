import { envs } from './config/env.js'
import { startServer } from './server/server.js'
//funcion agnostica autoconvocada
const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

(async () => {
    main()
})()


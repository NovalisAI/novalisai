import 'dotenv/config'

import env from 'env-var'

const envVars = {
    EMAIL_USER: env.get('EMAIL_USER')
        .default('your_email_user')
        .asString(),
    EMAIL_PASS: env.get('EMAIL_PASS')
        .default('your_email_pass')
        .asString(),
    EMAIL_HOST: env.get('EMAIL_HOST')
        .default('your_email_host')
        .asString(),
}

export { envVars as env }
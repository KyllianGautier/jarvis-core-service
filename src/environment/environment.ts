import * as process from 'process';

export const environment = {
	port: process.env.PORT ?? 3000,
	globalPrefix: 'api/v1',
}
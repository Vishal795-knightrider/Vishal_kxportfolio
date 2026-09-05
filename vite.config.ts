import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  if (env.UPSTASH_REDIS_REST_URL) process.env.UPSTASH_REDIS_REST_URL = env.UPSTASH_REDIS_REST_URL;
  if (env.UPSTASH_REDIS_REST_TOKEN) process.env.UPSTASH_REDIS_REST_TOKEN = env.UPSTASH_REDIS_REST_TOKEN;
  if (env.INITIAL_VISITOR_COUNT) process.env.INITIAL_VISITOR_COUNT = env.INITIAL_VISITOR_COUNT;

  return {
    plugins: [
      react(),
      {
        name: 'dev-api-visitor',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url && (req.url === '/api/visitor' || req.url.startsWith('/api/visitor?'))) {
              try {
                const handler = (await server.ssrLoadModule('/api/visitor.ts')).default;
                const vercelRes: any = {
                  statusCode: 200,
                  setHeader(k: string, v: string) {
                    res.setHeader(k, v);
                  },
                  status(code: number) {
                    this.statusCode = code;
                    return this;
                  },
                  json(data: any) {
                    res.statusCode = this.statusCode;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(data));
                  },
                  end(data?: any) {
                    res.statusCode = this.statusCode;
                    res.end(data);
                  },
                };
                return await handler(req as any, vercelRes);
              } catch (err) {
                console.error('Local /api/visitor error:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Local visitor API error' }));
                return;
              }
            }
            next();
          });
        },
      },
    ],
  };
});

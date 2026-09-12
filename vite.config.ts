import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 5173,
    host: true,
    // Locale is decided by the request host (rbx.ia.br = pt-BR, rbxsystems.ch
    // = en), so local checks of the en site need the dev server to accept
    // that host header: `curl -H 'Host: rbxsystems.ch' http://localhost:5173/`
    // or an /etc/hosts entry. Production never runs the Vite server.
    allowedHosts: ['rbx.ia.br', 'rbxsystems.ch']
  }
});

Guía rápida para desplegar en Cloudflare (temporal)

1) Requisitos
- Tener una cuenta de Cloudflare y `ACCOUNT_ID`.
- Tener instalado `npm` (v9+).
- (Opcional) Instalar `wrangler` globalmente: `npm i -g wrangler`

2) Instalación local
```bash
npm install
```

3) Build y export estático (si tu proyecto puede ser exportado)
```bash
npm run build
npm run export
# Esto generará la carpeta `out/` con la versión estática.
```

4) Deploy con `@cloudflare/next-on-pages` (recomendado para Next.js completo)
- Rellena `account_id` en `wrangler.toml`.
- Ejecuta:
```bash
npm run cf:build
npm run cf:deploy
```

Si prefieres publicar la carpeta estática `out/` en Pages directamente:
```bash
npx wrangler pages publish out --project-name=sebas_project
```

Notas:
- `@cloudflare/next-on-pages` intenta ofrecer compatibilidad más completa con las características de Next.js. Si tu sitio usa funciones de servidor complejas, sigue la guía oficial de Cloudflare Next.js.
- Completa `wrangler.toml` con tu `account_id` antes de desplegar.
Opciones resumidas

- Opción rápida (estática):
	1) `npm run build`
	2) `npm run export`  # crea `out/`
	3) `npm run cf:deploy:pages:static`  # publica `out/` en Cloudflare Pages

- Opción completa (Next.js con worker):
	- Requiere `pnpm` o que la herramienta `@cloudflare/next-on-pages` pueda instalar dependencias con el gestor detectado.
	- Ejecuta `npm run cf:build` para generar `.vercel/output` y el worker.
	- Publica estáticos con `npm run cf:deploy:pages` y publica el worker con `npm run cf:deploy:worker` (completa `wrangler.toml` con `account_id`).

Si necesitas, puedo ayudarte a adaptar el proyecto para usar `pnpm` en lugar de `npm` (recomendado por `next-on-pages`) o a configurar `OpenNext` para Cloudflare.

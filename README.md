# Integrale VG - Panadería Artesanal

Sitio comercial de **Integrale VG**, panadería artesanal de Gualeguaychú (Entre Ríos, Argentina). Web estática con Home + Catálogo, productos integrales y keto, y conversión por WhatsApp.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS v3** (sin binarios nativos)
- **Radix UI** (shadcn/ui) + **Framer Motion** + **wouter**

Sin monorepo, sin pnpm, sin `lightningcss`. Funciona con **npm** y Node LTS (18+).

## Cómo correr el proyecto

Necesitás Node.js 18 o superior instalado.

```bash
npm install
npm run dev
```

Abrí http://localhost:5173

### Scripts disponibles

- `npm run dev` — servidor de desarrollo con hot reload
- `npm run build` — genera la versión optimizada en `dist/`
- `npm run start` — sirve localmente la build de producción

## Estructura

```
integrale-vg/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── public/                  # imágenes, favicon, opengraph
└── src/
    ├── App.tsx              # rutas
    ├── main.tsx             # entrada
    ├── index.css            # estilos globales + tema (warm bakery)
    ├── components/
    │   ├── Navbar.tsx
    │   ├── Footer.tsx
    │   ├── ProductCard.tsx
    │   ├── WhatsAppButton.tsx
    │   ├── sections/        # Hero, About, Values, ProductHighlight, FinalCTA
    │   └── ui/              # primitivos shadcn (Button, Dialog, etc.)
    ├── hooks/
    ├── lib/
    │   ├── constants.ts     # WhatsApp, redes, datos del negocio
    │   ├── products.ts      # 62 productos con precios en ARS
    │   └── utils.ts         # helpers (cn, formatARS)
    └── pages/
        ├── HomePage.tsx
        ├── CatalogoPage.tsx
        └── not-found.tsx
```

## Personalización rápida

- **Número de WhatsApp**, redes y URL de pedido: `src/lib/constants.ts`
- **Productos y precios**: `src/lib/products.ts`
- **Colores y tipografías**: variables CSS en `src/index.css` y `tailwind.config.js`
- **Imágenes de productos**: `public/images/`

## Deploy

La build (`npm run build`) genera una carpeta `dist/` 100% estática. Podés subirla a Vercel, Netlify, Cloudflare Pages, GitHub Pages o cualquier hosting estático.

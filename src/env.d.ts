
/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_ADMIN_PASSWORD: string
  readonly VITE_SITE_DOMAIN: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}

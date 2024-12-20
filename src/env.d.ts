/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_URL: string;
  readonly VITE_APP_DATABASES: string;
  readonly VITE_APP_COLLECTION: string;
  readonly VITE_APP_APPWRITE_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

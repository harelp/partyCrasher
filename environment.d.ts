export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DATABASE_PASSWORD: string;
      DATABASE_URL?: string; 
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}

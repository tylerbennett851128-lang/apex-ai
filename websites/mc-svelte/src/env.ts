import { env } from '$env/dynamic/public';

export type AppConfig = {
  baseUrl: string;
  readerBaseUrl: string;
  writerBaseUrl: string;
  appId: string;
  tenantId: string;
  lbEnvironment: string;
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  firebaseAppId: string;
  measurementId: string;
  version: string;
};

export const varEnv: AppConfig = {
  baseUrl: env.PUBLIC_BASE_URL,
  readerBaseUrl: env.PUBLIC_COCOA_READER_BASE_URL,
  writerBaseUrl: env.PUBLIC_COCOA_WRITER_BASE_URL,
  appId: env.PUBLIC_APP_ID,
  tenantId: env.PUBLIC_TENANT_ID,
  lbEnvironment: env.PUBLIC_LB_ENVIRONMENT,
  apiKey: env.PUBLIC_API_KEY,
  authDomain: env.PUBLIC_AUTH_DOMAIN,
  projectId: env.PUBLIC_PROJECT_ID,
  storageBucket: env.PUBLIC_STORAGE_BUCKET,
  messagingSenderId: env.PUBLIC_MESSAGE_SENDDER_ID,
  firebaseAppId: env.PUBLIC_FIREBASE_APP_ID,
  measurementId: env.PUBLIC_MEASUREMENT_ID,
  version: '2.0.8'
};

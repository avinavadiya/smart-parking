import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "auth-domain",
  databaseURL: "DB_URL",
  projectId: "project-id",
  storageBucket: "storage-bucket",
  messagingSenderId: "message-sender-id",
  appId: "appId",
}
const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)

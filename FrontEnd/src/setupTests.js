// Fichier exécuté avant chaque fichier de test (déclaré dans setupFiles, dans vite.config.js)
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react"; 
// Ajoute les vérifications de jest-dom 
import "@testing-library/jest-dom/vitest";

// Après chaque test, on vide la page simulée, pour que chaque test parte de zéro
afterEach(() => {
  cleanup();
});
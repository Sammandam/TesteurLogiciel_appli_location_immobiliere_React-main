import { describe, test, expect } from "vitest"; // outils de test
import { render, screen } from "@testing-library/react"; // affiche le composant
import Banner from "./Banner"; // le composant à tester

// Tests du composant Banner (composant sans state)
describe("Banner", () => { // regroupe les tests du composant Banner
  test("affiche l'image reçue en props", () => { // test qui vérifie que l'image est  bien  affichée
    render(<Banner image="banniere.png" alt="Falaises au bord de la mer" />); // on affiche le composant  avec l'image et le texte alternatif
    expect(screen.getByRole("img")).toHaveAttribute("src", "banniere.png"); // on vérifie que l'image affichée a bien l'attribut src avec la valeur "banniere.png"
  });

  test("utilise le texte alternatif reçu en props", () => { // test qui vérifie que le texte alternatif est bien utilisé
    render(<Banner image="banniere.png" alt="Falaises au bord de la mer" />); // on affiche le composant  avec l'image et le texte alternatif
    expect(screen.getByAltText("Falaises au bord de la mer")).toBeInTheDocument(); // on vérifie que le texte alternatif est bien présent dans le document
  });

  test("utilise un texte alternatif vide si aucun alt n'est transmis", () => { // test qui vérifie que le texte alternatif est vide si aucun alt n'est transmis
    const { container } = render(<Banner image="banniere.png" />); // on affiche le composant  avec l'image et sans texte alternatif
    expect(container.querySelector("img")).toHaveAttribute("alt", ""); // on vérifie que l'image affichée a bien l'attribut alt avec la valeur vide
  });

  test("affiche le titre quand il est transmis", () => { // test qui vérifie que le titre est bien affiché quand il est transmis
    render(<Banner image="banniere.png" titre="Chez vous, partout et ailleurs" />);  // on affiche le composant  avec l'image et le titre
    expect( 
        screen.getByRole("heading", { name: "Chez vous, partout et ailleurs" })// on récupère le titre par son rôle et son nom
    ).toBeInTheDocument(); // on vérifie que le titre est bien présent dans le document
  });

  test("n'affiche aucun titre quand il n'est pas transmis", () => { // test qui vérifie que le titre n'est pas affiché quand il n'est pas transmis
    render(<Banner image="banniere.png" />); // on affiche le composant  avec l'image et sans titre
    expect(screen.queryByRole("heading")).not.toBeInTheDocument(); // on vérifie que le titre n'est pas présent dans le document
  });
});
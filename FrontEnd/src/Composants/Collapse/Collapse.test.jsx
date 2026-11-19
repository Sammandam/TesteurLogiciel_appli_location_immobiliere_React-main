import { describe, test, expect } from "vitest"; // outils de test : regrouper, décrire et vérifier
import { render, screen } from "@testing-library/react"; // render affiche le composant, screen cherche ses éléments
import userEvent from "@testing-library/user-event"; // simule les actions de l'utilisateur (clics)
import Collapse from "./Collapse"; // le composant à tester

// Tests du composant Collapse (composant avec state)
// On vérifie son état initial, puis chaque changement d'état au clic
describe("Collapse", () => {
  // Prop "title"
  test("affiche le titre reçu en props", () => {
    // Préparer : on affiche le Collapse avec un titre
    render(<Collapse title="Fiabilité">Texte</Collapse>);
    // Vérifier : le bouton porte bien ce titre
    expect(screen.getByRole("button", { name: "Fiabilité" })).toBeInTheDocument();
  });

  // Prop "children"
  test("affiche le contenu reçu en children", () => {
    // Préparer : on place un paragraphe entre les balises du Collapse
    render(
      <Collapse title="Fiabilité">
        <p>Mon contenu</p>
      </Collapse>
    );
    // Vérifier : le contenu est bien présent dans le composant
    expect(screen.getByText("Mon contenu")).toBeInTheDocument();
  });

  // État initial : fermé
  test("est fermé au départ", () => {
    // Préparer : on affiche le Collapse, sans cliquer
    const { container } = render(<Collapse title="Fiabilité">Texte</Collapse>);
    // Vérifier : le bouton indique que le Collapse est fermé
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");
    // Vérifier : le volet n'a pas la classe d'ouverture
    expect(container.querySelector(".collapse__wrapper")).not.toHaveClass("collapse__wrapper--open");
  });

  // Changement d'état : fermé → ouvert
  test("s'ouvre au premier clic", async () => {
    // Préparer : on crée un utilisateur virtuel, puis on affiche le Collapse
    const user = userEvent.setup();
    const { container } = render(<Collapse title="Fiabilité">Texte</Collapse>);
    // Agir : on clique une fois sur la barre (await : on attend la fin du clic)
    await user.click(screen.getByRole("button"));
    // Vérifier : le bouton indique que le Collapse est ouvert
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
    // Vérifier : le volet et la flèche ont la classe d'ouverture
    expect(container.querySelector(".collapse__wrapper")).toHaveClass("collapse__wrapper--open");
    expect(container.querySelector(".collapse__arrow")).toHaveClass("collapse__arrow--open");
  });

  // Changement d'état : ouvert → fermé
  test("se referme au deuxième clic", async () => {
    // Préparer : on crée un utilisateur virtuel, puis on affiche le Collapse
    const user = userEvent.setup();
    const { container } = render(<Collapse title="Fiabilité">Texte</Collapse>);
    // Agir : on clique deux fois (ouverture, puis fermeture)
    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("button"));
    // Vérifier : le bouton indique que le Collapse est de nouveau fermé
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");
    // Vérifier : le volet et la flèche n'ont plus la classe d'ouverture
    expect(container.querySelector(".collapse__wrapper")).not.toHaveClass("collapse__wrapper--open");
    expect(container.querySelector(".collapse__arrow")).not.toHaveClass("collapse__arrow--open");
  });
});
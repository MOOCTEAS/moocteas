describe("Layout", function() {
  beforeEach(() => {
    cy.server();
    cy.visit("/");
    cy.route("GET", "/api/search", "fixture:isLoggedInFalse").as("load");
  });

  const Layout = "[data-cy=Layout]";
  const AppBar = "[data-cy=AppBar]";
  const Page = "[data-cy=Page]";
  const Shelves = "[data-cy=Shelves]";
  const UserInputShelf = "[data-cy=UserInputShelf]";
  const HomeShelf = "[data-cy=HomeShelf]";
  const BurgerButton = "[data-cy=BurgerButton]";

  describe("when the user loads the home route", function() {
    it("should load the layout correctly", function() {
      cy.get(Layout);
      cy.get(AppBar);
      cy.get(Page);
      cy.get(Shelves);
      cy.get(UserInputShelf);
    });
    //
    it("the hidden drawer toggles when the menu icon is clicked", function() {
      const HiddenDrawer = "[data-cy=HiddenDrawer]";
      cy.viewport("iphone-6"); // Set viewport to 357px x 667px
      cy.get(BurgerButton).click();
      cy.get(HiddenDrawer);
      cy.get(Shelves);
      cy.get(UserInputShelf);
    });
  });
});

// @ts-check
const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("http://127.0.0.1:5500");
});

test("add one todo", async ({ page }) => {
  const todoInput = page.locator("#todo-textbox");
  await todoInput.fill("Buy milk");
  await todoInput.press("Enter");

  await expect(page.getByText("Buy milk")).toBeVisible();
});

test("zero items left", async ({ page }) => {
  const todoInput = page.locator("#todo-textbox");
  await todoInput.fill("Buy milk");
  await todoInput.press("Enter");

  await expect(page.getByText("1 items left")).toBeVisible();

  const todoToggle = page.locator(".unchecked");
  todoToggle.click();

  await expect(page.getByText("0 items left")).toBeVisible();
});

test("two items left", async ({ page }) => {
  const todoInput = page.locator("#todo-textbox");
  await todoInput.fill("Buy milk");
  await todoInput.press("Enter");
  await todoInput.fill("Buy peanuts");
  await todoInput.press("Enter");
  await todoInput.fill("Feed red panda");
  await todoInput.press("Enter");

  //const addPeanutsToggle = page.getByText("Buy peanuts");
  const todoToggle = page.locator(".unchecked").nth(1);
  todoToggle.click();

  await expect(page.getByText("2 items left")).toBeVisible();
});

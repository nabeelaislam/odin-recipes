// 1. Get recipe ID from URL
const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");

// 2. Get container
const container = document.getElementById("recipe-detail");

// 3. Fetch recipes
fetch("data/recipes.json")
  .then(res => res.json())
  .then(recipes => {
    const recipe = recipes.find(r => r.id === recipeId);

    if (!recipe) {
      container.innerHTML = "<p>Recipe not found.</p>";
      return;
    }

    // 4. Render recipe
    container.innerHTML = `
      <article class="recipe-page">
        <h1>${recipe.title}</h1>

        <span class="recipe-origin">${recipe.origin}</span>

        <img 
          src="${recipe.image || 'images/placeholder.jpg'}" 
          alt="${recipe.title}"
          class="recipe-image"
        />

        <p class="recipe-description">${recipe.description}</p>

        <section>
          <h2>Ingredients</h2>
          <ul>
            ${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </section>

        <section>
          <h2>Instructions</h2>
          <ol>
            ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
          </ol>
        </section>

        ${
            recipe.notes
              ? `<section class="recipe-notes">
                  <h2>Notes</h2>
                  ${
                    typeof recipe.notes === "string"
                      ? `<p>${recipe.notes}</p>`
                      : `
                        ${recipe.notes.text ? `<p>${recipe.notes.text}</p>` : ""}
                        ${
                          recipe.notes.link
                            ? `<p>
                                <a href="${recipe.notes.link.url}" target="_blank" rel="noopener">
                                  ${recipe.notes.link.label}
                                </a>
                              </p>`
                            : ""
                        }
                        ${
                          recipe.notes.links
                            ? recipe.notes.links
                                .map(
                                  link => `
                                    <p>
                                      <a href="${link.url}" target="_blank" rel="noopener">
                                        ${link.label}
                                      </a>
                                    </p>
                                  `
                                )
                                .join("")
                            : ""
                        }
                      `
                  }
                </section>`
              : ""
          }
          
      </article>
    `;
  })
  .catch(err => {
    console.error(err);
    container.innerHTML = "<p>Error loading recipe.</p>";
  });

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("recipe-grid");
    const searchInput = document.getElementById("searchInput");
    const originCheckboxes = document.querySelectorAll(".filter-origin");
    const categoryCheckboxes = document.querySelectorAll(".filter-category");
  
    let allRecipes = [];
  
    function renderRecipes(recipes) {
      grid.innerHTML = "";
      recipes.forEach(recipe => {
        const card = document.createElement("a");
        card.className = "recipe-card";
        card.href = `recipe.html?id=${recipe.id}`;
  
        card.innerHTML = `
          <img src="${recipe.image}" alt="${recipe.title}">
          <h3>${recipe.title}</h3>
          <p>${recipe.description || ""}</p>
          <span>${recipe.origin}</span>
        `;
  
        grid.appendChild(card);
      });
    }
  
    function getCheckedValues(checkboxes) {
      return Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    }
  
    function applyFilters() {
      const query = searchInput.value.toLowerCase();
      const selectedOrigins = getCheckedValues(originCheckboxes);
      const selectedCategories = getCheckedValues(categoryCheckboxes);
  
      const filtered = allRecipes.filter(recipe => {
        const matchesSearch =
          recipe.title.toLowerCase().includes(query) ||
          recipe.origin.toLowerCase().includes(query);
  
        const matchesOrigin =
          selectedOrigins.length === 0 ||
          selectedOrigins.includes(recipe.origin);
  
        const matchesCategory =
          selectedCategories.length === 0 ||
          (recipe.category &&
            recipe.category.some(cat =>
              selectedCategories.includes(cat)
            ));
  
        return matchesSearch && matchesOrigin && matchesCategory;
      });
  
      renderRecipes(filtered);
    }
  
    fetch("data/recipes.json")
      .then(res => res.json())
      .then(recipes => {
        allRecipes = recipes;
        renderRecipes(allRecipes);
      })
      .catch(err => console.error(err));
  
    searchInput.addEventListener("input", applyFilters);
    originCheckboxes.forEach(cb => cb.addEventListener("change", applyFilters));
    categoryCheckboxes.forEach(cb => cb.addEventListener("change", applyFilters));
  });
  
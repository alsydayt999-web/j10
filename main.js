
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

async function fetchRecipes() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.meals) {
            displayRecipes(data.meals);
        } else {
            document.getElementById('recipeGrid').innerHTML = '<p>No recipes found.</p>';
        }
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

function displayRecipes(recipes) {
    const grid = document.getElementById('recipeGrid');
    grid.innerHTML = ''; 

    recipes.forEach(recipe => {
        // 
        const card = document.createElement('div');
        card.classList.add('recipe-card');

        card.innerHTML = `
            <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
            <div class="recipe-info">
                <h3>${recipe.strMeal}</h3>
                <p><strong>Category:</strong> ${recipe.strCategory}</p>
                <p><strong>Country:</strong> ${recipe.strArea}</p>
                <a href="${recipe.strYoutube || '#'}" target="_blank" class="recipe-btn">View Details</a>
            </div>
        `;

        grid.appendChild(card);
    });
}

// 
fetchRecipes();
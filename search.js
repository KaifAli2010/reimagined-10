


  function searchAnime() {
      const input = document.getElementById("searchInput").value.toLowerCase();
      const cards = document.querySelectorAll(".anime-card");
      
      let hasMatches = false;
      
      cards.forEach(function(card) {
          const titleElement = card.querySelector(".anime-title");
          const title = titleElement ? titleElement.textContent.toLowerCase() : "";
          
          if (input === "" || title.includes(input)) {
              card.style.display = "block";
              hasMatches = true;
          } else {
              card.style.display = "none";
          }
      });
  
      // If no matches found, you could show a message
      if (!hasMatches && input !== "") {
          // Optional: Display "No results found" message
          const noResults = document.getElementById("no-results");
          if (noResults) noResults.style.display = "block";
      } else {
          const noResults = document.getElementById("no-results");
          if (noResults) noResults.style.display = "none";
      }
  }
  
  document.getElementById("searchInput").addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
          searchAnime();
      }
  });
  
  // Optional: Clear search when input is empty
  document.getElementById("searchInput").addEventListener("input", function(e) {
      if (e.target.value === "") {
          searchAnime();
      }
  });
  





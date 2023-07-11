const skillsGrid = document.querySelector(".skills-grid");

      fetch("skills.json")
        .then((response) => response.json())
        .then((data) => {
          data.forEach((skill) => {
            const skillDiv = document.createElement("div");
            skillDiv.classList.add("skill");

            const skillImg = document.createElement("img");
            skillImg.src = skill.icon;

            const skillName = document.createElement("h2");
            skillName.textContent = skill.name;

            skillDiv.appendChild(skillImg);
            skillDiv.appendChild(skillName);
            skillsGrid.appendChild(skillDiv);
          });
        })
        .catch((error) => console.error(error));
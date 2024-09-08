"use strict";
const toggleSkillsButton = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', () => {
    if (skillsSection) {
        const isHidden = skillsSection.style.display === 'none';
        skillsSection.style.display = isHidden ? 'block' : 'none';
        toggleSkillsButton.textContent = isHidden ? 'Hide Skills' : 'Show Skills';
    }
});

function updateProfileData(data) {
    const { job, location, phone, email, name, photo } = data;
    document.getElementById('name').textContent = name;
    document.getElementById('position.job').textContent = job;
    document.getElementById('adress.location').textContent = location;
    document.getElementById('number.phone').textContent = phone;
    document.getElementById('mail.email').textContent = email;
    document.getElementById('photo.profile').src = photo;
    document.getElementById('photo.profile').alt = 'Foto de perfil DanielCosta';
}

function upadateSoftsSkills(data) {
    const softsSkillsList = document.getElementById('softs-skills-list');
    softsSkillsList.innerHTML = data.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

function  upadateHardSkills(data) {
    const hardSkillsList = document.getElementById('hard-skills-list');
    hardSkillsList.innerHTML = data.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" ></li>`).join('');
}

function updateExperiencias(data) {
    const experienciasList = document.getElementById('experience-list');
    experienciasList.innerHTML = data.professionalExperience.map(experience => 
        `
        <li>
            <h3>${experience.name}</h3>
            <a href="${experience.certificate}" target='_blank'>Certificado</a>
            <a href="${experience.project}" target='_blank'>Projeto</a>
            <p>${experience.description}</p>
        </li>
        `
    
    ).join('');
}





(async () => {
    const profileData = await fetchProfileData();
    console.log(profileData);
    updateProfileData(profileData);
    upadateSoftsSkills(profileData);
    upadateHardSkills(profileData);
    updateExperiencias(profileData);
})();

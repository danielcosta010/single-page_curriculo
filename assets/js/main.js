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





(async () => {
    const profileData = await fetchProfileData();
    console.log(profileData);
    updateProfileData(profileData);
    upadateSoftsSkills(profileData);
})();

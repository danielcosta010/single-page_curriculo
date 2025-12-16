(async () => {
    const profileData = await fetchProfileData();
    console.log(profileData);
    getData(profileData);
})();


function getData(data) {
    const { job, location, phone, email } = data;
    document.getElementById('name').textContent = data.name;
    document.getElementById('position.job').textContent = job;
    document.getElementById('adress.location').textContent = location;
    document.getElementById('number.phone').textContent = phone;
    document.getElementById('mail.email').textContent = email;
    document.getElementById('photo.profile').src = data.photo;
    document.getElementById('photo.profile').alt = 'Foto de perfil DanielCosta';
}

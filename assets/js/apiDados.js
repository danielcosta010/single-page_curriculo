async function fetchProfileData() {
    const response = await fetch('https://raw.githubusercontent.com/danielcosta010/single-page_curriculo/refs/heads/main/data/profile.json');
    const data = await response.json();
    return data
}
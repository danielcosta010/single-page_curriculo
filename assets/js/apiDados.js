async function fetchProfileData() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/danielcosta010/single-page_curriculo/refs/heads/main/data/profile.json"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados do perfil:", error);
    throw error;
  }
}
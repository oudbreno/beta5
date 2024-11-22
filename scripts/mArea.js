document.addEventListener('DOMContentLoaded', () => {
    // Simulando dados de músicas curtidas e playlists do usuário
    const musicasCurtidas = [
        "Música 1 - Artista A",
        "Música 2 - Artista B",
        "Música 3 - Artista C"
    ];

    const playlists = [
        "Playlist 1",
        "Playlist 2",
        "Playlist 3"
    ];

    // Preenchendo a lista de músicas curtidas
    const listaCurtidas = document.getElementById('lista-curtidas');
    musicasCurtidas.forEach(musica => {
        const li = document.createElement('li');
        li.textContent = musica;
        listaCurtidas.appendChild(li);
    });

    // Preenchendo a lista de playlists
    const listaPlaylists = document.getElementById('lista-playlists');
    playlists.forEach(playlist => {
        const li = document.createElement('li');
        li.textContent = playlist;
        listaPlaylists.appendChild(li);
    });
});

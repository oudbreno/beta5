// Função para carregar as informações do perfil do localStorage
function loadProfileData() {
    try {
        // Carregar as informações do perfil se disponíveis no localStorage
        const profileData = JSON.parse(localStorage.getItem('profileData'));

        if (profileData) {
            document.getElementById('name').value = profileData.name || '';
            document.getElementById('email').value = profileData.email || '';
            document.getElementById('phone').value = profileData.phone || '';
            document.getElementById('userImage').src = profileData.image || './img/default-avatar.png';
            if (profileData.image === './img/default-avatar.png') {
                document.getElementById('noImageText').style.display = 'block';
            } else {
                document.getElementById('noImageText').style.display = 'none';
            }
        } else {
            document.getElementById('noImageText').style.display = 'block';
        }
    } catch (error) {
        console.error("Erro ao carregar os dados do perfil:", error);
    }
}

// Função para salvar as informações do perfil no localStorage
function saveProfileData(event) {
    event.preventDefault(); // Impede o envio do formulário
    try {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const image = document.getElementById('userImage').src;

        // Salvar no localStorage
        const profileData = {
            name,
            email,
            phone,
            image
        };

        localStorage.setItem('profileData', JSON.stringify(profileData));
        console.log('Perfil salvo com sucesso:', profileData);

        // Exibir a mensagem de sucesso
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';

        // Ocultar a mensagem de sucesso após 3 segundos
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);

    } catch (error) {
        console.error("Erro ao salvar os dados do perfil:", error);
    }
}

// Função para trocar a imagem do perfil
function changeProfileImage() {
    const fileInput = document.getElementById('fileInput');
    const userImage = document.getElementById('userImage');
    
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            userImage.src = e.target.result;
            console.log('Imagem do perfil trocada com sucesso');
            document.getElementById('noImageText').style.display = 'none'; // Esconde o texto "Nenhuma imagem definida"
        }
        reader.readAsDataURL(file);
    }
}

// Inicializa a página e carrega os dados
document.addEventListener("DOMContentLoaded", function() {
    loadProfileData();

    // Adicionar evento de submissão do formulário
    const form = document.getElementById('profileForm');
    form.addEventListener('submit', saveProfileData);
});

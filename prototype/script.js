// Screen Navigation Functions
function hideAllScreens() {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
}

function showScreen(screenId) {
    hideAllScreens();
    document.getElementById(screenId).classList.add('active');
    // Scroll to top
    const screen = document.getElementById(screenId);
    const mainElement = screen.querySelector('main');
    if (mainElement) {
        mainElement.scrollTop = 0;
    }
}

function goToLogin() {
    showScreen('loginScreen');
}

function goToRegister() {
    showScreen('registerScreen');
}

function goToDashboard() {
    showScreen('dashboardScreen');
    updateNavigation('dashboard');
}

function goToIdentityManager(tab = 'connected') {
    showScreen('identityManagerScreen');
    switchIdentityTab(tab);
    updateNavigation('identity');
}

function goToSecurityCenter() {
    showScreen('securityCenterScreen');
    updateNavigation('security');
}

function goToSettings() {
    showScreen('settingsScreen');
    updateNavigation('settings');
}

function goToProfile() {
    alert('Profil użytkownika - przekierowanie');
}

function goToConsentManager() {
    alert('Menedżer Zgód - zarządzanie preferencjami cookies i danymi osobowymi');
}

// Tab Switching
function switchIdentityTab(tabName) {
    // Hide all tabs
    document.getElementById('connectedTab').classList.remove('active');
    document.getElementById('temporaryTab').classList.remove('active');

    // Remove active class from buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab
    if (tabName === 'connected') {
        document.getElementById('connectedTab').classList.add('active');
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
    } else if (tabName === 'temporary') {
        document.getElementById('temporaryTab').classList.add('active');
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
    }
}

// Navigation Update
function updateNavigation(active) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    const navItems = document.querySelectorAll('.nav-item');
    if (active === 'dashboard') navItems[0].classList.add('active');
    else if (active === 'identity') navItems[1].classList.add('active');
    else if (active === 'security') navItems[2].classList.add('active');
    else if (active === 'settings') navItems[3].classList.add('active');
}

// Profile Menu Toggle
function toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Close Profile Menu on outside click
document.addEventListener('click', function(event) {
    const profileMenu = document.getElementById('profileMenu');
    const profileBtn = document.querySelector('.profile-btn');
    
    if (profileMenu && profileBtn) {
        if (!profileMenu.contains(event.target) && !profileBtn.contains(event.target)) {
            profileMenu.classList.remove('active');
        }
    }
});

// Toggle Notifications
function toggleNotifications() {
    alert('Notyfikacje (2 nowe powiadomienia):\n\n1. Logowanie z nieznanej lokalizacji\n2. Monitorowanie: możliwe ujawnienie danych');
}

// Auth Actions
function completeRegister() {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-confirm').value;
    const terms = document.getElementById('terms').checked;

    if (!name || !email || !password || !confirm) {
        alert('Proszę wypełnić wszystkie pola');
        return;
    }

    if (password !== confirm) {
        alert('Hasła się nie zgadzają');
        return;
    }

    if (!terms) {
        alert('Musisz zaakceptować Regulamin i Politykę prywatności');
        return;
    }

    if (password.length < 12) {
        alert('Hasło musi mieć co najmniej 12 znaków');
        return;
    }

    alert(`Konto ${name} zostało utworzone!\nWeryfikacja wysłana na: ${email}`);
    goToDashboard();
}

// Account Management
function manageAccount() {
    alert('Zarządzanie kontem - szczegóły, bezpieczeństwo, uprawnienia');
}

function manageMFA() {
    alert('Włączanie MFA - skaner kodu QR do aplikacji autentykacyjnej');
}

function createTemporaryIdentity() {
    const profileName = prompt('Podaj nazwę nowego profilu tymczasowego:', 'New_Temp_Profile');
    
    if (profileName) {
        const email = `${profileName.toLowerCase()}.${Math.random().toString(36).substr(2, 9)}@temp.dih.io`;
        alert(`Profil tymczasowy "${profileName}" został utworzony!\n\nE-mail: ${email}\n\nWygasa za: 14 dni`);
        switchIdentityTab('temporary');
    }
}

function useTemporaryProfile() {
    alert('Profil tymczasowy jest gotowy do użycia. Możesz go teraz wybrać przy logowaniu się do usług.');
}

// Security Actions
function blockAccess() {
    showModal('Zablokowanie dostępu', 'Czy na pewno chcesz zablokować dostęp z tej lokalizacji?', function() {
        alert('✓ Dostęp z Moskwy został zablokowany!\n\nTwoje konto jest teraz bezpieczne. Jeśli to byłeś ty, skontaktuj się ze wsparciem.');
    });
}

function verifyAction() {
    alert('Logowanie potwierdzono.\nStatus: Bezpieczne ✓\n\nW przyszłości będziemy pamiętać tę lokalizację.');
}

function fixPassword() {
    const newPass = prompt('Wpisz nowe, silne hasło dla Spotify:', '');
    if (newPass) {
        alert(`✓ Hasło zostało zmienione!\n\nHasło do Spotify jest teraz silne.`);
    }
}

function reviewBreach() {
    alert('Wycieki danych:\n\nKonto Gmail: Znaleziono w 1 wycieku (2023)\n\nRekomendacja: Zmień hasło i włącz MFA');
}

function viewLoginHistory() {
    alert('Historia logowań (ostatnie 30 dni):\n\n✓ 14.06.2025 10:23 - Warszawa, Polska\n✓ 13.06.2025 14:15 - Warszawa, Polska\n✓ 12.06.2025 09:45 - Wrocław, Polska\n✓ 11.06.2025 19:30 - Kraków, Polska');
}

function contactSupport() {
    alert('Wsparcie Premium\n\nSkontaktuj się z naszymi ekspertami ds. bezpieczeństwa:\n\nGodziny: Pn-Pt 9:00-17:00\nE-mail: security@dih.io\nChat: W aplikacji');
}

// Settings Actions
function editProfile() {
    alert('Edycja profilu - zmiana danych osobowych');
}

function exportData() {
    alert('✓ Twoje dane zostały przygotowane do pobrania.\n\nFormat: JSON\nRozmiar: 2.4 MB\n\nPlik: user_data_14.06.2025.json');
}

function deleteAccount() {
    const confirm = prompt('Czy na pewno chcesz usunąć konto? Wpisz "TAK" aby potwierdzić:');
    
    if (confirm === 'TAK') {
        alert('Konto zostanie usunięte w ciągu 30 dni. Wszystkie dane zostaną bezpiecznie skasowane.\n\nE-mail potwierdzenia wysłany na: jan@email.com');
    } else if (confirm !== null) {
        alert('Usuwanie konta anulowane.');
    }
}

function viewPrivacy() {
    alert('Polityka prywatności DIH\n\nMiędzy innymi:\n- Jak zbieramy dane\n- Jak je chronimy\n- Twoje prawa\n- Cookies\n\n[Pełny tekst byłby dostępny w nowym oknie]');
}

function viewTerms() {
    alert('Warunki użytkowania DIH\n\nMiędzy innymi:\n- Nasze zobowiązania\n- Twoje zobowiązania\n- Ograniczenia odpowiedzialności\n- Zmiany w warunkach\n\n[Pełny tekst byłby dostępny w nowym oknie]');
}

// Modal Functions
function showModal(title, message, onConfirm) {
    const modal = document.getElementById('alertModal');
    document.getElementById('alertTitle').textContent = title;
    document.getElementById('alertMessage').textContent = message;
    
    // Store the callback
    window.modalCallback = onConfirm;
    
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('alertModal');
    modal.classList.remove('active');
    window.modalCallback = null;
}

function confirmAction() {
    if (window.modalCallback) {
        window.modalCallback();
    }
    closeModal();
}

// Initialization
document.addEventListener('DOMContentLoaded', function() {
    // Set active screen to login
    goToLogin();
    
    // Add keyboard navigation (ESC to close modal)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    console.log('Digital Identity Hub Prototype v1.0');
    console.log('Ready to use!');
});

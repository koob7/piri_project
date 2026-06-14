# Digital Identity Hub - Prototyp Klikalny

Interaktywny prototyp aplikacji do zarządzania tożsamością cyfrową, opracowany na podstawie dokumentu "Projektowanie i Rozwój Internetu".

## 📋 Zawartość Prototypu

Prototyp zawiera pełny przepływ aplikacji z następującymi ekranami:

### Ekrany Uwierzytelniania
- **Logowanie** - Realistyczna forma logowania
- **Rejestracja** - Pełny proces tworzenia konta z walidacją

### Ekrany Główne
- **Dashboard (Panel)** - Główne centrum zarządzania
  - Wskaźnik bezpieczeństwa
  - Szybkie akcje
  - Lista ostatnio zalogowanych usług

- **Menedżer Tożsamości** - Zarządzanie kontami
  - Połączone konta (Gmail, LinkedIn, PKO BP, Spotify)
  - Tożsamości tymczasowe (profile testowe)
  - MFA status dla każdego konta

- **Centrum Bezpieczeństwa** - Monitorowanie bezpieczeństwa
  - Alerty o zagrożeniach
  - Logowanie z nieznanej lokalizacji
  - Słabe hasła
  - Historia logowań
  - Wsparcie Premium

- **Ustawienia** - Zarządzanie preferencjami
  - Profil użytkownika
  - Prywatność i bezpieczeństwo
  - Zgody i cookies
  - Dane i prywatność (RODO)

## 🎨 Design

### Kolorystyka
- **Główny kolor**: Ciemny granat (#003d5c) - symbol bezpieczeństwa i zaufania
- **Akcent**: Jaskrawa zieleń (#00d084) - dla ważnych akcji i wskaźników
- **Tło**: Ciemny motyw - nowoczesny, nie męczy oczu
- **Tekst**: Jasny szary - wysoka czytelność

### Cechy Designu
- Minimalistyczny, przejrzysty interfejs
- Duże, czytelne czcionki (dla starszych użytkowników)
- Jasne priorytety akcji
- Responsywny (działający na telefonach i tabletach)

## 🔐 Funkcjonalności Prototypu

### Zalogowane interakcje:
- Przełączanie między ekranami
- Zarządzanie kartami (Connection/Temporary accounts)
- Alerty bezpieczeństwa z akcjami
- Preferencje użytkownika
- Modalne potwierdzenia akcji
- Rozwijane menu profilu

### Realistyczne scenariusze:
1. **Włamanie** - Alertowanie o podejrzanym logowaniu z możliwością blokady
2. **Ochrona prywatności** - Tworzenie tymczasowych profili do testów
3. **Zarządzanie kontami** - Przeglądanie i edycja połączonych usług
4. **Monitoring bezpieczeństwa** - Alerty o słabych hasłach i wyciekach

## 🚀 Jak Uruchomić

### Opcja 1: Otwarcie w przeglądarce
1. Otwórz plik `index.html` w dowolnej przeglądarce (Chrome, Firefox, Safari, Edge)
2. Zaloguj się dowolnymi danymi
3. Eksploruj aplikację

### Opcja 2: Uruchomienie lokalnego serwera (zalecane)

**Python 3:**
```bash
cd prototype
python -m http.server 8000
```

Następnie otwórz w przeglądarce: `http://localhost:8000`

**Node.js:**
```bash
cd prototype
npx http-server
```

**Live Server (VS Code):**
1. Zainstaluj rozszerzenie "Live Server"
2. Kliknij prawym przyciskiem na `index.html`
3. Wybierz "Open with Live Server"

## 📁 Struktura Plików

```
prototype/
├── index.html      # Struktura HTML z wszystkimi ekranami
├── styles.css      # Style CSS (ciemny motyw, responsywny)
├── script.js       # Logika JavaScript (nawigacja, interakcje)
└── README.md       # Ten plik
```

## 💡 Scenariusze Testowe

### Scenariusz 1: Logowanie i odkrywanie
1. Zaloguj się (dowolne dane)
2. Przejrzyj Dashboard
3. Zobacz wskaźnik bezpieczeństwa (95/100)
4. Kliknij szybkie akcje

### Scenariusz 2: Zarządzanie kontami
1. Przejdź do "Menedżer Tożsamości"
2. Przeglądaj połączone konta (Gmail, LinkedIn, PKO BP, Spotify)
3. Przełącz na "Tożsamości tymczasowe"
4. Utwórz nowy profil tymczasowy

### Scenariusz 3: Reagowanie na zagrożenie
1. Przejdź do "Centrum Bezpieczeństwa"
2. Zobacz alert o logowaniu z Moskwy
3. Kliknij "Zablokuj dostęp" lub "To byłem ja"
4. Przejrzyj pozostałe alerty

### Scenariusz 4: Ustawienia i prywatność
1. Przejdź do "Ustawienia"
2. Edytuj profil
3. Zarządzaj prywatnością
4. Pobierz dane (RODO)

## 🔧 Dostępne Akcje w Prototypie

| Akcja | Rezultat |
|-------|----------|
| Kliknięcie przycisku logowania | Przeniesienie do Dashboard |
| Kliknięcie "Utwórz nowe konto" | Przejście do formularza rejestracji |
| Nawigacja dolna | Przełączanie między głównymi ekranami |
| Zarządzaj kontem | Alert z informacją o zarządzaniu |
| Włącz MFA | Alert z instrukcją |
| Zablokuj dostęp | Potwierdzenie akcji i alert |
| Pobierz dane (RODO) | Symulacja eksportu danych |
| Usuń konto | Potwierdzenie z zabezpieczeniem |

## 📱 Responsywność

Prototyp jest w pełni responsywny i działa na:
- ✅ Komputerach (1920px i więcej)
- ✅ Laptopach (1280px - 1920px)
- ✅ Tabletach (768px - 1280px)
- ✅ Telefonach (320px - 768px)

## 🎯 Główne Funkcje Systemu (z dokumentu)

Prototyp vizualizuje następujące funkcje z dokumentu:

1. ✅ **Single Sign-On (SSO)** - Logowanie do wielu usług jednym kontem
2. ✅ **Zarządzanie tożsamościami** - Lista połączonych kont
3. ✅ **Uwierzytelnianie wieloskładnikowe (MFA)** - Kontrola MFA dla kont
4. ✅ **Alerty bezpieczeństwa** - Centrum bezpieczeństwa z alertami
5. ✅ **Tożsamości tymczasowe** - Tworzenie profili testowych
6. ✅ **Wskaźnik bezpieczeństwa** - Dashboard z oceną
7. ✅ **Kontrola prywatności** - Ustawienia i zgody
8. ✅ **RODO** - Pobieranie i usuwanie danych

## 🌟 Cechy Implementacji

- **Bez zewnętrznych zależności** - Tylko HTML, CSS, JavaScript (vanilla)
- **Ciemny motyw** - Nowoczesny, nie męczący oczy
- **Interaktywny** - Wszystkie przyciski i formy działają
- **Responsywny** - Dostosowuje się do wszystkich rozmiarów ekranu
- **Dostępny** - Duże czcionki, wysoki kontrast, jasna hierarchia
- **Szybki** - Brak opóźnień, natychmiastowe przełączanie ekranów

## 📝 Uwagi

- Prototyp **nie przechowuje danych** - jest czysty przy każdym odświeżeniu
- Wszystkie akcje są **symulowane** - pokazują dialogi potwierdzenia
- Do pełnego działania potrzebna byłaby **backend API**
- Design bazuje na wytycznych z dokumentu projektu

## 👥 Zespół Projektu

Projekt rzeczywisty (z dokumentu):
- Konrad Kobielus - Opis produktu
- Jakub Białkowski-Brożek - User Stories
- Jakub Skraba - UX/UI
- Mykyta Shemechko - Bezpieczeństwo
- Paweł Chmielewski, Maciej Bossowski

## 📄 Licencja

Projekt edukacyjny stworzony na potrzeby kursu "Projektowanie i Rozwój Internetu"

---

**Wersja**: 1.0.0  
**Data**: 14.06.2025  
**Autor**: Prototyp automatycznie generowany

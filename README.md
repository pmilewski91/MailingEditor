# Email Template Editor

Narzędzie do szybkiego tworzenia i tłumaczenia szablonów mailingowych z obsługą zmiennych JSON.

## 📧 Opis

Email Template Editor to aplikacja React.js stworzona do efektywnego tworzenia mailingów z możliwością łatwego zarządzania tekstami w różnych językach. Narzędzie umożliwia:

- Tworzenie mailingów w edytorze WYSIWYG
- Definiowanie zmiennych tekstowych w formacie JSON
- Szybkie tłumaczenie poprzez wymianę wartości w JSON
- Automatyczne generowanie gotowego kodu HTML
- Podgląd na żywo z podświetlaniem składni

## ✨ Funkcje

### 🎨 Edytor WYSIWYG
- Bogaty edytor tekstu oparty na ReactQuill
- Formatowanie tekstu (bold, italic, underline)
- Listy i wyrównanie tekstu
- Wstawianie obrazków i linków
- Różne rozmiary czcionek

### 🔄 System zmiennych
- Definiowanie zmiennych w notacji `{klucz}`
- Zarządzanie zmiennymi przez panel JSON
- Automatyczna zamiana zmiennych na wartości
- Funkcja "Replace Text to Key Json" - automatyczne tworzenie zmiennych z istniejącego tekstu

### 🌍 Obsługa tłumaczeń
- Łatwa wymiana języków poprzez zmianę wartości JSON
- Zachowanie struktury HTML przy zmianie języka
- Szybkie tworzenie wielojęzycznych mailingów

### 📋 Eksport i kopiowanie
- Generowanie gotowego kodu HTML
- Kopiowanie do schowka jednym klikiem
- Szablon HTML z wbudowanymi stylami CSS

### 💾 Automatyczny zapis
- Automatyczne zapisywanie w localStorage
- Przywracanie pracy po odświeżeniu strony
- Bezpieczne zarządzanie danymi

## 🚀 Instalacja

### Wymagania
- Node.js (wersja 14 lub nowsza)
- npm lub yarn

### Kroki instalacji

1. **Sklonuj repozytorium**
   ```bash
   git clone https://github.com/pmilewski91/MailingEditor.git
   cd MailingEditor
   ```

2. **Zainstaluj zależności**
   ```bash
   npm install
   ```

3. **Uruchom aplikację**
   ```bash
   npm start
   ```

## 📖 Sposób użycia

### Podstawowe tworzenie mailingu

1. **Pisanie treści**
   - Wpisz tekst w edytorze WYSIWYG
   - Użyj narzędzi formatowania według potrzeb
   - Dodaj obrazki i linki

2. **Definiowanie zmiennych**
   - W polu JSON zdefiniuj zmienne:
   ```json
   {
     "tytul": "Witaj w naszym sklepie!",
     "podtytul": "Sprawdź nasze najnowsze oferty",
     "cta_button": "Zobacz oferty"
   }
   ```
   - W edytorze użyj zmiennych w formacie `{tytul}`, `{podtytul}`, `{cta_button}`

3. **Generowanie HTML**
   - HTML generuje się automatycznie w prawym panelu
   - Kliknij "Copy" aby skopiować gotowy kod

### Tłumaczenie mailingów

1. **Przygotowanie szablonu**
   - Stwórz mailing z zmiennymi w języku bazowym
   - Upewnij się, że wszystkie teksty są zastąpione zmiennymi

2. **Tłumaczenie**
   - Skopiuj JSON z zmiennymi
   - Przetłumacz wartości zachowując klucze:
   ```json
   {
     "tytul": "Welcome to our store!",
     "podtytul": "Check out our latest offers",
     "cta_button": "View offers"
   }
   ```

3. **Wymiana języka**
   - Wklej przetłumaczony JSON
   - HTML automatycznie zaktualizuje się z nowymi tekstami

### Funkcje zaawansowane

#### Replace Text to Key Json
Automatycznie tworzy zmienne z istniejącego tekstu:
1. Napisz mailing normalnym tekstem
2. Dodaj teksty do JSON używając przycisków "Add Text"
3. Kliknij "Replace Text to Key Json"
4. Teksty zostaną automatycznie zamienione na zmienne

#### Upload Content in HTML
Umożliwia wklejenie gotowego kodu HTML do edycji.


## 🛠️ Zależności

### Główne zależności
- `react` - Framework UI
- `react-quill` - Edytor WYSIWYG
- `prismjs` - Podświetlanie składni HTML


## 🌐 Przydatne narzędzia

Aplikacja zawiera linki do pomocnych konwerterów:
- **CSV → JSON**: [csvjson.com/csv2json](https://csvjson.com/csv2json)
- **JSON → CSV**: [tableconvert.com/json-to-csv](https://tableconvert.com/json-to-csv)


## 📄 Licencja

MIT License - możesz swobodnie używać, modyfikować i dystrybuować.


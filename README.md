# tme-drivers-panel

## To start aplication follow comand in terminal:

1.  `npm install`
2.  `npm run start`

## Opis

Aplikacja po załadowaniu danych z wygenerowanego, lokalnego pliku wyświetla na jego podstawie listę kierowców. 
Zrealizowany został widok deskop/mobile. \Lista kierowców jest przechowywana w localStorage. 
### Features:
1. Można wyszukiwać kierowcę po kluczach: imie, nazwisko, nr rejestracyjny.
2. Można dodać kierowcę do ulubionych poprzez kliniecie serduszka. 
3. Po odświeżeniu strony, stan ulubionych zostanie zachowany, a ulubieni kierowcy zostaną wyświetleni na początku listy.

### Issue
Plik ładuje 1000 rekordów dla zachowania płynności działania. \Próba załadowania ilości większej niż 5000 rekordów przekracza możliwości mojego komputera, nie wspominając o 20 tysiącach. \Stąd mniejsza ilość.

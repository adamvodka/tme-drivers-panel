# tme-drivers-panel

to start aplication follow comand in terminal:

1. npm install
2. npm run start

Aplikacja po załadowaniu danych z wygenerowanego, lokalnego pliku wyświetla na jego podstawie listę kierowców.
Zrealizowany został widok deskop/mobile.
Lista kierowców jest przechowywana w localStorage.
Można wyszukiwać kierowcę po kluczach: imie, nazwisko, nr rejestracyjny.
Można dodać kierowcę do ulubionych poprzez kliniecie serduszka.
Po odświeżeniu strony, stan ulubionych zostanie przywróny.

Plik ładuje 1000 rekordów. Próba załadowania ilości większej niż 5000 rekordów przekracza moliwości mojego komputera, nie moówiąc o 20 tysiącach. Stąd mniejsza ilość.

# TodoMVC-klon
Vår egen version av [den kända exempelappen TodoMVC](https://todomvc.com/examples/backbone/dist/), skapad med HTML, CSS och JavaScript.

## Funktionalitet
Appen har följande funktionalitet:
- Lägga till anteckningar.
- Ta bort anteckningar.
- Markera anteckningar som färdiga.
- Se hur många ofärdiga anteckningar som återstår ("X items left").
- Markera alla anteckningar som färdiga/ofärdiga (nedåtpilen till vänster om textfältet).
- Ta bort alla färdiga anteckningar ("Clear completed").
- Visa upp antingen alla anteckningar ("All"), alla ofärdiga anteckningar ("Active") eller alla färdiga anteckningar ("Completed").

Detta är **inte** implementerat:
- URL-hantering (att knapparna "All", "Active" och "Completed" ändrar på URL:en).
- Att anteckningar kan redigeras genom att dubbelklicka på dem.

## Utseende
Utseendet är väldigt likt [TodoMVC](https://todomvc.com/examples/backbone/dist/) med vissa mindre skillnader.

## Tester
Projektet innehåller följande tre GUI-tester skrivna med Playwright:
1. Lägg till en anteckning och bekräfta att den visas på sidan.
2. Lägg till en anteckning och bekräfta att sidan visar "1 item left". Kryssa sedan i anteckningen och bekräfta att sidan visar "0 items left".
3. Lägg till 3 anteckningar, kryssa i en av dem och bekräfta att sidan visar "2 items left".

# language: de
@ui
Funktionalität: Sprache und Datenformate
    Als Kunde möchte ich alle Daten auf Deutsch eingeben.
    Datumswerte und Währungen sollen im deutschen Format angezeigt werden.
    Z.B. das Datum in folgendem Format: 25.04.1987"
    Z.B. der Beitrag in folgendem Format: 321,30 €


    Szenario: Datumseingabe
        Wenn ich ein Datum auswähle
        Dann soll das Datum im deutschen Format angezeigt werden
    
    Szenario: Beitragsanzeige
        Wenn ich einen Beitrag berechnet habe
        Dann soll der Beitrag im deutschen Format mit Euro Zeichen angezeigt werden

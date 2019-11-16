# language: de
Funktionalität: Auswahl des Wohnorts
    Als Kunde möchte ich meinen Wohnort aus einer Liste auswählen.

    Szenario: Wohnorte vorhanden
        Wenn ich einen Wohnort auswählen möchte
        Dann soll mir eine Liste von Wohnorten vorgegeben werden
    
    Szenario: Wohnorte Frankreich, Deutschland, Sonstige auswählbar
        Wenn ich einen Wohnort auswählen möchte
        Dann sollen folgende auswählbar sein:
        | Wohnort       |
        | Deutschland   |
        | Frankreich    |
        | Sonstige      |
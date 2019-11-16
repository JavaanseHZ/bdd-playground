# language: de
Funktionalität: Validierung der Kundeneingabe
    Als Kunde möchte ich meinen Namen, mein Geburtsdatum und meinen Wohnort eingeben.
    Dabei soll ich Hinweise bekommen, wenn ich falsche eingaben mache
    
    Szenario: Name wird nicht angegeben
        Angenommen ich gebe keinen Namen an
        Und ich habe alle anderen Angaben korrekt eingegeben
        Wenn ich einen Vertrag berechne
        Dann soll ein Hinweis zur Korrektur für den Namen erscheinen
    
    Szenario: Geburtsdatum nicht angegeben
        Angenommen ich gebe kein Geburtsdatum an
        Und ich habe alle anderen Angaben korrekt eingegeben
        Wenn ich einen Vertrag berechne
        Dann soll ein Hinweis zur Korrektur für das Geburtsdatum erscheinen
    
    Szenario: Geburtsdatum, jünger als 18 Jahre
        Angenommen ich bin jünger als 18 Jahre
        Und ich habe alle anderen Angaben korrekt eingegeben
        Wenn ich einen Vertrag berechne
        Dann soll ein Hinweis zur Korrektur für das Geburtsdatum erscheinen
    
    Szenario: Geburtsdatum, älter als 65 Jahre
        Angenommen ich bin älter als 65 Jahre
        Und ich habe alle anderen Angaben korrekt eingegeben
        Wenn ich einen Vertrag berechne
        Dann soll ein Hinweis zur Korrektur für das Geburtsdatum erscheinen
    
    Szenario: Wohnort nicht angegeben
        Angenommen ich gebe keinen Wohnort an
        Und ich habe alle anderen Angaben korrekt eingegeben
        Wenn ich einen Vertrag berechne
        Dann soll ein Hinweis zur Korrektur für den Wohnort erscheinen

    Szenario: Mehrere Daten nicht angegeben
        Angenommen ich gebe keinen Wohnort an
        Und ich gebe keinen Namen an
        Und ich habe alle anderen Angaben korrekt eingegeben
        Wenn ich einen Vertrag berechne
        Dann soll ein Hinweis zur Korrektur für den Wohnort und den Namen erscheinen
        Aber kein Hinweis zum Geburtsdatum

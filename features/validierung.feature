# language: de
@integration
Funktionalität: Validierung der Kundeneingabe
    Als Kunde möchte ich meinen Namen, mein Geburtsdatum und meinen Wohnort eingeben.
    Dabei soll ich Hinweise bekommen, wenn ich falsche Eingaben mache.
    Das erlaubte Alter liegt dabei zwischen 18 und 65.
    
    @ui
    Szenario: Alle Eingaben korrekt angegeben
        Angenommen ich habe alle anderen Angaben korrekt eingegeben
        Wenn ich einen Vertrag berechne
        Dann soll kein Hinweis erscheinen

    @ui
    Szenario: Keine Eingaben korrekt angegeben
        Angenommen ich gebe keinen "Namen" an
        Angenommen ich gebe kein "Geburtsdatum" an
        Angenommen ich gebe keinen "Wohnort" an
        Wenn ich einen Vertrag berechne
        Dann soll ein Hinweis zur Korrektur für das "Namen" erscheinen
        Dann soll ein Hinweis zur Korrektur für den "Geburtsdatum" erscheinen
        Dann soll ein Hinweis zur Korrektur für den "Wohnort" erscheinen

    Szenario: Name wird nicht angegeben
        Angenommen ich gebe keinen "Namen" an
        Und ich habe alle anderen Angaben korrekt eingegeben
        Wenn ich einen Vertrag berechne
        Dann soll ein Hinweis zur Korrektur für den "Namen" erscheinen
    
    Szenario: Geburtsdatum nicht angegeben
        Angenommen ich gebe kein "Geburtsdatum" an
        Und ich habe alle anderen Angaben korrekt eingegeben
        Wenn ich einen Vertrag berechne
        Dann soll ein Hinweis zur Korrektur für das "Geburtsdatum" erscheinen
    
    Szenario: Geburtsdatum, jünger als 18 Jahre
        Angenommen ich bin 17 Jahre alt
        Und ich habe alle anderen Angaben korrekt eingegeben
        Wenn ich einen Vertrag berechne
        Dann soll ein Hinweis zur Korrektur für das "Geburtsdatum" erscheinen
    
    Szenario: Geburtsdatum, älter als 65 Jahre
        Angenommen ich bin 66 Jahre alt
        Und ich habe alle anderen Angaben korrekt eingegeben
        Wenn ich einen Vertrag berechne
        Dann soll ein Hinweis zur Korrektur für das "Geburtsdatum" erscheinen
    
    Szenario: Wohnort nicht angegeben
        Angenommen ich gebe keinen "Wohnort" an
        Und ich habe alle anderen Angaben korrekt eingegeben
        Wenn ich einen Vertrag berechne
        Dann soll ein Hinweis zur Korrektur für den "Wohnort" erscheinen

    Szenario: Wohnort und Name nicht angegeben
        Angenommen ich gebe keinen "Wohnort" an
        Und ich gebe keinen "Namen" an
        Und ich habe alle anderen Angaben korrekt eingegeben
        Wenn ich einen Vertrag berechne
        Dann soll ein Hinweis zur Korrektur für den "Wohnort" erscheinen
        Dann soll ein Hinweis zur Korrektur für den "Namen" erscheinen
        Aber kein Hinweis zum "Geburtsdatum" erscheinen

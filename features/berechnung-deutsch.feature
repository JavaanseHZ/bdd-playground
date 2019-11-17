# language: de
@unit
Funktionalität: Berechnung eines Vertrags deutsch
    Als Kunde möchte ich einen Vertrag berechnen und einen Beitrag ermiteln.
    Der Beitrag wird auf Basis eines Sockelbetrags,
    meines Alters und meines Wohnorts berechnet.
    Die Formel lautet folgendermaßen:
    (Sockelbetrag + (Zehnerstelle des Alters * 7)) * Wohnort-Multiplikator

    Grundlage:
        Angenommen ich möchte einen Vertrag berechnen
        Und der Multiplikator für "Deutschland" ist 3.25
        Und der Multiplikator für "Frankreich" ist 4.15
        Und der Sockelbetrag ist 30.00 Euro
    @ui
    Szenario: Alter 25, Wohnort Deutschland
        Angenommen ich wohne in "Deutschland"
        Und ich bin 25 Jahre alt
        Wenn ich einen Vertrag berechne
        Dann soll ein Beitrag von 143.00 Euro ermittelt werden
    
    Szenario: Alter 45, Wohnort Frankreich
        Angenommen ich wohne in "Frankreich"
        Und ich bin 45 Jahre alt
        Wenn ich einen Vertrag berechne
        Dann soll ein Beitrag von 240.70 Euro ermittelt werden



   

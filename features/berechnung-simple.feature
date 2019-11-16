Feature: Berechnung eines Vertrags simple
    Als Kunde möchte ich einen Vertrag berechnen und einen Beitrag ermiteln.
    Der Beitrag wird auf Basis eines Sockelbetrags,
    meines Alters und meines Wohnorts berechnet.
    Die Formel lautet folgendermaßen:
    (Sockelbetrag + (Zehnerstelle des Alters * 7)) * Wohnort-Multiplikator
    
    Scenario: Alter 25, Wohnort Deutschland
        Given ich wohne in Deutschland
        And der Multiplikator für "Deutschland" ist "3.25"
        And ich bin 25 Jahre alt
        And der Sockelbetrag 30,00 Euro beträgt
        When ich einen Vertrag berechne
        Then soll ein Beitrag von 104,56 Euro ermittelt werden



   

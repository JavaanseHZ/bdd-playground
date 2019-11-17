# language: de
Funktionalität: Berechnung eines Vertrags examples
    Als Kunde möchte ich einen Vertrag berechnen und einen Beitrag ermiteln.
    Der Beitrag wird auf Basis eines Sockelbetrags,
    meines Alters und meines Wohnorts berechnet.
    Die Formel lautet folgendermaßen:
    (Sockelbetrag + (Zehnerstelle des Alters * 7)) * Wohnort-Multiplikator

    Grundlage:
        Angenommen der Multiplikator für "Deutschland" ist 3.25
        Und der Multiplikator für "Frankreich" ist 4.15
        Und der Multiplikator für "Sonstige" ist 5.0
        Und der Sockelbetrag ist 30.00 Euro
  
    Szenariogrundriss: Alter <alter>, Wohnort <wohnort>
        Angenommen ich wohne in "<wohnort>"
        Und ich bin <alter> Jahre alt
        Wenn ich einen Vertrag berechne
        Dann soll ein Beitrag von <beitrag> Euro ermittelt werden
        
        Beispiele:
            | alter | wohnort       | beitrag   |
            | 18    | Deutschland   | 105.65    |
            | 28    | Deutschland   | 105.65    |
            | 38    | Deutschland   | 105.65    |
            | 48    | Deutschland   | 105.65    |
            | 58    | Deutschland   | 105.65    |
            | 65    | Deutschland   | 105.65    |
            | 18    | Frankreich    |  15.00    |
            | 28    | Frankreich    |  15.00    |
            | 38    | Frankreich    |  15.00    |
            | 48    | Frankreich    |  15.00    |
            | 58    | Frankreich    |  15.00    |
            | 65    | Frankreich    |  15.00    |
            | 18    | Sonstige      |  15.00    |
            | 28    | Sonstige      |  15.00    |
            | 38    | Sonstige      |  15.00    |
            | 48    | Sonstige      |  15.00    |
            | 58    | Sonstige      |  15.00    |
            | 65    | Sonstige      |  15.00    |


   

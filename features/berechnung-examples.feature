# language: de
@unit
Funktionalität: Berechnung eines Vertrags examples
    Als Kunde möchte ich einen Vertrag berechnen und einen Beitrag ermiteln.
    Der Beitrag wird auf Basis eines Sockelbetrags,
    meines Alters und meines Wohnorts berechnet.
    Die Formel lautet folgendermaßen:
    (Sockelbetrag + (Zehnerstelle des Alters * 7)) * Wohnort-Multiplikator

    Grundlage:
        Angenommen ich möchte einen Vertrag berechnen
        Und der Multiplikator für "Deutschland" ist 3.25
        Und der Multiplikator für "Frankreich" ist 4.15
        Und der Multiplikator für "Sonstige" ist 5.0
        Und der Sockelbetrag ist 30.00 Euro
        Und ich heiße "Max Mayer"
  
    Szenariogrundriss: Alter <alter>, Wohnort <wohnort>
        Angenommen ich wohne in "<wohnort>"
        Und ich bin <alter> Jahre alt
        Wenn ich einen Vertrag berechne
        Dann soll ein Beitrag von <beitrag> Euro ermittelt werden
        
        Beispiele:
            | alter | wohnort       | beitrag   |
            | 18    | Deutschland   | 120.25    |
            | 28    | Deutschland   | 143.00    |
            | 38    | Deutschland   | 165.75    |
            | 48    | Deutschland   | 188.50    |
            | 58    | Deutschland   | 211.25    |
            | 65    | Deutschland   | 234.00    |
            | 18    | Frankreich    | 153.55    |
            | 28    | Frankreich    | 182.60    |
            | 38    | Frankreich    | 211.65    |
            | 48    | Frankreich    | 240.70    |
            | 58    | Frankreich    | 269.75    |
            | 65    | Frankreich    | 298.80    |
            | 18    | Sonstige      | 185.00    |
            | 28    | Sonstige      | 220.00    |
            | 38    | Sonstige      | 255.00    |
            | 48    | Sonstige      | 290.00    |
            | 58    | Sonstige      | 325.00    |
            | 65    | Sonstige      | 360.00    |


   

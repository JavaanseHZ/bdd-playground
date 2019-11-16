# language: de
Funktionalität: Berechnung eines Vertrags examples
    Als Kunde möchte ich einen Vertrag berechnen und einen Beitrag ermiteln.
    Der Beitrag wird auf Basis eines Sockelbetrags,
    meines Alters und meines Wohnorts berechnet.
    Die Formel lautet folgendermaßen:
    (Sockelbetrag + (Zehnerstelle des Alters * 7)) * Wohnort-Multiplikator

    Grundlage:
        Der Multiplikator für "Deutschland" ist "3.25"
        Der Multiplikator für "Frankreich" ist "4.15"
        Der Multiplikator für "Sonstige" ist "5.0"
        Der Sockelbetrag ist "30,00" Euro
  
    Szenario Ouline: Alter <alter>, Wohnort <wohnort>
        Angenommen ich wohne in <wohnort>
        Und ich bin <alter> Jahre alt
        Wenn ich einen Vertrag berechne
        Dann soll ein Beitrag von <beitrag> Euro ermittelt werden
        
        Examples:
        | alter | wohnort       | beitrag   |
        | 18    | Deutschland   | 105,65    |
        | 28    | Deutschland   | 105,65    |
        | 38    | Deutschland   | 105,65    |
        | 48    | Deutschland   | 105,65    |
        | 58    | Deutschland   | 105,65    |
        | 65    | Deutschland   | 105,65    |
        | 18    | Frankreich    |   15      |
        | 28    | Frankreich    |   15      |
        | 38    | Frankreich    |   15      |
        | 48    | Frankreich    |   15      |
        | 58    | Frankreich    |   15      |
        | 65    | Frankreich    |   15      |
        | 18    | Sonstige      |   15      |
        | 28    | Sonstige      |   15      |
        | 38    | Sonstige      |   15      |
        | 48    | Sonstige      |   15      |
        | 58    | Sonstige      |   15      |
        | 65    | Sonstige      |   15      |


   

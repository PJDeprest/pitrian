---
title: "AI-workflow"
description: "Hoe ik met AI werk: architectuur eerst, kleine taken met review, beslissingen vastgelegd in het project. Het model schrijft de code, de structuur is van mij."
---

<p class="page-lede">Waar AI het werk overneemt, en waar niet.</p>

Ik werk elke dag met AI, maar niet door een opdracht te geven en af te wachten. Het ontwerp en de beslissingen komen niet van het model. Het schrijft het grootste deel van de code, de structuur waarbinnen het werkt is van mij.

### Architectuur eerst

Ik begin in een aparte AI-omgeving die geen code mag schrijven. Dat is expliciet: daar wordt alleen ontworpen. We praten over componenten, grenzen en datastromen tot het klopt, met diagrammen erbij. Pas als het ontwerp vastligt, vraag ik om een implementatieprompt: een uitgeschreven opdracht voor het model dat de code schrijft. Die prompt is het contract voor de volgende fase.

### Kleine taken, review na elke taak

De prompt is opgesplitst in kleine taken. Na elke taak legt het model het werk voor. Ik lees het en ik stel vragen: waarom dit, waarom zo. Soms is het antwoord goed en leer ik iets, soms doen we de taak over.

Terwijl het model aan een taak werkt, zit ik niet te wachten: dan ben ik vaak al bezig met de architectuur van iets anders.

### Het project onthoudt zijn eigen beslissingen

Elke architectuurbeslissing wordt vastgelegd in de repository, in een ADR. Daarnaast ligt er een agent.md met mijn codestijl en de regels die gelden. Een model dat aan het project begint, erft die beslissingen in plaats van ze opnieuw te verzinnen. Waar dat niet volstaat, schrijf ik een skill: een korte instructie voor één specifieke taak. Bijna allemaal komen ze voort uit iets dat eerst fout ging.

### Review door een tweede model

Als de branch af is, laat ik een ander model de review doen. Wat het ene schrijft, beoordeelt het andere. Dat vangt wat ik gemist heb.

Die review neem ik niet zomaar over. Reviewermodellen zien overal randgevallen en bouwen daar constructies omheen die het systeem ingewikkelder maken dan nodig. Ik beslis wat ervan overblijft.

### Committen is een beslissing

Het model mag niet committen zonder mijn expliciete toestemming. Dat staat in de agent.md. Er komt niets in de geschiedenis van een project dat ik niet gelezen heb.

<div class="page-closing">

Mijn werk is hierdoor veranderd. Het is meer een gesprek geworden: voorstellen, tegenspreken, bijsturen. Ik werk graag zo. Het gaat ook veel sneller, en ik lever nog altijd alleen iets op dat ik zelf begrijp.

</div>

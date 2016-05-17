# LeekWars #

Si vous développez une IA LeekWars en local, ce programme vous permet de fusionner tous les fichiers composants celle ci et de mettre à jour le script sur votre compte LeekWars.

## Initialisation ##

1.  Exécuter init.sh pour installer les modules node
2.  Entrer ses identifiants leekwars dans config/config.json

## Utilisation ##

1.  Placer les fichiers composant votre IA dans un dossier portant le nom souhaité pour l'IA
2.  Mettre le code qui doit se trouver à la fin dans un fichier contenant le mot "main"
3.  Exécuter build.js avec node en donnant en paramètre le nom de votre IA

## Exemple ##

<code>node build.js SAMPLE</code>
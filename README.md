Integrer un loader et une voire deux transitions de pages
Remplacer le sign out par un bouton flotant qui ressemble à un off

Dans le dashboard il y aura :
-   Liste de ses clés trié par Whatsapp et Telegram. + bouton pour créer une nouvelle clé* ce qui emmene à un formulaire de création.
-   Refresh sa clé
-   Validité d'une clé
-   Description de la clé : nom du bot etc.
-   Abonnement (durée, début, fin, récap, résiliation)
-   Details du compte
-   Paramètres du compte 



* définir un nombre clés disponibles de base, et limiter en fonction de l'abonnement.

limiter le nombre d'appel?



## Créer le modele de liste de clé avec tableau autour
## Créer la table de clé
## Dans la table user trouver un moyen d'autoriser la création de clé.

Dans la version gratuite :
- droit à une clé de chaque
- validité 2 semaines
- limiter à 5 requêtes par jour

Table entre user et abonnement = 


Formules d'abo = 
- Gratuite = 1 clé de chaque, 5 requêtes par jour, doit renouveler toutes les 2 semaines
- Pro = 2  clés de chaque, 10 requêtes par jour, validité 1 mois, abonnement et renouvellement auto
- Master = 3  clés, 25 requêtes par jour
- Custom

Table formules :
- id
- nom

Table pivot :
- user id 
- formule id
- clé restante w
- clé restant t

Table key T ou W:
- id 
- token
- user_id
- formule_id
- active 
- limite requête
- expiration
- chat_id ou autre
- bot_token ou autre

Table Count
- id
- nombre de notif envoyées


# 🚀 Architecture de la chaîne CI/CD

Ce projet utilise **GitHub Actions** pour automatiser le cycle de vie de l'application, du code source jusqu'au déploiement sécurisé.



## 🏗 Structure du Pipeline

L'architecture de la chaîne CI/CD est découpée en trois étapes (Jobs) séquentielles :

### 1. Intégration Continue (Build & Test)
* **Objectif** : Garantir la qualité du code.
* **Actions** : Installation des dépendances Node.js 18, exécution des tests unitaires et vérification de la syntaxe (Lint).

### 2. Livraison Continue (Docker Delivery)
* **Objectif** : Créer un artefact prêt pour la production.
* **Actions** : Build de l'image Docker à partir du `Dockerfile` et publication (Push) sur **Docker Hub**. Cette étape n'est déclenchée que lors d'un push sur la branche `main`.

### 3. Sécurité (Security Scan)
* **Objectif** : Identifier les failles de sécurité avant le déploiement.
* **Actions** : Analyse de l'image Docker par **Trivy**. Le pipeline est configuré pour détecter les vulnérabilités de niveaux `HIGH` et `CRITICAL`.

---

## 🛠 Infrastructure & Déploiement
* **Infrastructure as Code (IaC)** : L'environnement d'accueil (Instance EC2 Ubuntu) est provisionné via **Terraform**.
* **Déploiement** : L'image finale est récupérée depuis Docker Hub et exécutée sur l'instance AWS, exposant l'API sur le port **8080**.

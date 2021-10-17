<template>
    <div class="create">
        <form class="enquete" @submit.prevent="handleSubmit">
            <div class="error" v-if="error">{{ error}}</div>
            <div class="entete">
                <p>
                    ENQUETE ENTREPRISE SUR L’ALIMENTATION EN EAU POTABLE
                    <br>
                    QUESTIONNAIRE
                </p>
            </div>

            <div class="entete titre">
                <p>Partie 2: APPROVISIONNEMENT EN EAU</p>
            </div>
            <div class=" soustitre">
                <p>MOYENS UTILISES</p>
            </div>
            <div class="info">
                <p>
                    Raccordement au réseau SEG ?
                </p>
                <p>
                    Quel est le statut de fonctionnement du branchement que vous avez chez la SEG ?
                </p>
                <div class="entreprise">
                    <select required v-model="statutFonctionnement">
                        <option value="" selected>Statut de fonctionnement du branchement </option>
                        <option value="En Service">En Service</option>
                        <option value="Suspendu">Suspendu</option>
                        <option value="Résilié">Résilié</option>

                    </select>
                </div>
                <div class="entreprise">
                    <input type="text" placeholder="Raison de la resiliation du branchement" v-model="raisonResiliation" v-if="statutFonctionnement == 'Résilié'">
                </div>
                <div class="entreprise">
                    <p>Si BRANCHEMENT EN SERVICE, demander à voir les 4 dernières factures d’eau et relever les informations suivantes :</p>
                 </div>
                 <div class="entreprise">
                     <table>
                         <tr>
                            <th>Facture du mois</th>
                            <th>Volumes consommés (m³)</th>
                            <th>Nombre de jours facturés</th>
                            <th>Montant de la facture (FG)</th>
                            <th>Montant des impayés (si existant)</th>
                         </tr>
                         <tbody>
                             <tr>
                                 <td>Mai 2021</td>
                                 <td><input type="text" v-model="volumeMai2021"></td>
                                 <td><input type="text" v-model="jourFactureMai2021"></td>
                                 <td><input type="text" v-model="montantMai2021"></td>
                                 <td><input type="text" v-model="impayeMai2021"></td>
                             </tr>
                             <tr>
                                 <td>Juin 2021</td>
                                 <td><input type="text" v-model="volumeJuin2021"></td>
                                 <td><input type="text" v-model="jourFactureJuin2021"></td>
                                 <td><input type="text" v-model="montantJuin2021"></td>
                                 <td><input type="text" v-model="impayeJuin2021"></td>
                             </tr>
                             <tr>
                                 <td>Juillet 2021</td>
                                 <td><input type="text" v-model="volumeJuillet2021"></td>
                                 <td><input type="text" v-model="jourFactureJuillet2021"></td>
                                 <td><input type="text" v-model="montantJuillet2021"></td>
                                 <td><input type="text" v-model="impayeJuillet2021"></td>
                             </tr>
                             <tr>
                                 <td>Aout 2021</td>
                                 <td><input type="text" v-model="volumeAout2021"></td>
                                 <td><input type="text" v-model="jourFactureAout2021"></td>
                                 <td><input type="text" v-model="montantAout2021"></td>
                                 <td><input type="text" v-model="impayeAout2021"></td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
                 <div class="entreprise">
                     <p>Si autres sources d’approvisionnement, indiquer le nombre : </p>
                 </div>
                 <div class="entreprise">
                     <table>
                         <tr>
                            <th>Source d’approvisionnement</th>
                            <th>Nbre</th>
                            <th>Compteur (nbre)</th>
                         </tr>
                         <tbody>
                             <tr>
                                 <td>Forage</td>
                                 <td><input type="text" v-model="nbForage"></td>
                                 <td><input type="text" v-model="compteurForage"></td>
                             </tr>
                             <tr>
                                 <td>Puits</td>
                                 <td><input type="text" v-model="nbPuit"></td>
                                 <td><input type="text" v-model="compteurPuit"></td>
                             </tr>
                             <tr>
                                 <td>Autres (préciser : eau en bouteille, eau de mer, etc.)</td>
                                 <td><input type="text" v-model="nbAutres"></td>
                                 <td><input type="text" v-model="compteurAutres"></td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
            </div>
            <div class=" soustitre">
                <p>CONSOMMATIONS ET BESOINS</p>
            </div>
            <div class="info">
                <p>
                    <strong>Tableau à remplir selon les usages possibles :</strong>
                </p>
                <div class="entreprise">
                    <ul>
                            <li>
                                <p>	« process » industriel / lié à l’activité (accueil malades, clients hôtels, etc.) – à détailler par phases (et / ou par unité de production)</p>
                            </li>
                            <li>
                                <p>Administration / Services généraux : lavage des bâtiments et véhicules, arrosage jardins, climatisation, sanitaires, cuisine/cantine</p>
                            </li>
                            <li>
                                <p>Consommations « domestiques » si employés logés par l’employeur (logement de fonction ou facture d’eau payée par employeur)</p>
                            </li>
                    </ul>
                </div>
                <div class="entreprise">
                     <table>
                         <tr>
                            <th>Usages</th>
                            <th>Source principale</th>
                            <th>Qualité d’eau</th>
                            <th>
                                <tr style="display: grid; border: 1px solid lightgray;">Quantités d’eau (m3)</tr>
                                <tr>
                                    <th>Volume consommé</th>
                                    <th>Besoins actuels non pourvus</th>
                                </tr>
                            </th>
                         </tr>
                         <tbody>
                             <tr>
                                 <td><input type="text" v-model="usages[0]"  @blur="show"></td>
                                 <td><input type="text" v-model="sourcePrincipales[0]"></td>
                                 <td><input type="text" v-model="qualiteEau[0]"></td>
                                 <td>
                                     <tr>
                                        <td><input type="text" v-model="volumeConsommes[0]"></td>
                                        <td><input type="text" v-model="besoins[0]"></td>
                                     </tr>

                                 </td>
                             </tr>
                             <tr>
                                 <td><input type="text" v-model="usages[1]"  @blur="show"></td>
                                 <td><input type="text" v-model="sourcePrincipales[1]"></td>
                                 <td><input type="text" v-model="qualiteEau[1]"></td>
                                 <td>
                                     <tr>
                                    <td><input type="text" v-model="volumeConsommes[1]"></td>
                                    <td><input type="text" v-model="besoins[1]"></td>
                                     </tr>
                                 </td>
                             </tr>
                             <tr>
                                 <td><input type="text" v-model="usages[2]"></td>
                                 <td><input type="text" v-model="sourcePrincipales[2]"></td>
                                 <td><input type="text" v-model="qualiteEau[2]"></td>
                                 <td>
                                     <tr>
                                    <td><input type="text" v-model="volumeConsommes[2]"></td>
                                    <td><input type="text" v-model="besoins[2]"></td>
                                     </tr>
                                 </td>
                             </tr>
                             <tr>
                                 <td><input type="text" v-model="usages[3]"></td>
                                 <td><input type="text" v-model="sourcePrincipales[3]"></td>
                                 <td><input type="text" v-model="qualiteEau[3]"></td>
                                 <td>
                                     <tr>
                                    <td><input type="text" v-model="volumeConsommes[3]"></td>
                                    <td><input type="text" v-model="besoins[3]"></td>
                                     </tr>
                                 </td>
                             </tr>
                             <tr>
                                 <td><input type="text" v-model="usages[4]"></td>
                                 <td><input type="text" v-model="sourcePrincipales[4]"></td>
                                 <td><input type="text" v-model="qualiteEau[4]"></td>
                                 <td>
                                     <tr>
                                    <td><input type="text" v-model="volumeConsommes[4]"></td>
                                    <td><input type="text" v-model="besoins[4]"></td>
                                     </tr>
                                 </td>
                             </tr>
                         </tbody>
                     </table>
                </div>
                <div class="entreprise">
                    <p >Comment qualifier vous l’approvisionnement en eau pour votre entreprise : </p>
                    <select v-model="qualiteApprovisionnement" required>
                        <option value="" selected>Selectionner la qualité d'approvisionnement</option>
                        <option value="Très important">Très important</option>
                        <option value="important">important</option>
                        <option value="moyennement important">moyennement important</option>
                        <option value="pas important">pas important</option>
                    </select>
                </div>
            </div>
            <hr>
            <div class=" soustitre">
                <p>DESCRIPTION ABONNEMENT SEG</p>
            </div>
            <div class="info">
                <p>
                    <strong>
                       Nombre d’abonnements / Regroupement ?
                        Diamètre et numéro du compteur de chaque branchement :
                    </strong>
                </p>
                <div class="entreprise">
                    <p >Quelle est la consommation maximum ? A quelle période ?</p>
                </div>
                <div class="entreprise">
                     <table>
                         <tr>
                            <th>Nbre d’abonnement</th>
                            <th>Regroupement</th>
                            <th>Diamètre (de chaque abonnement)</th>
                            <th>N°compteur</th>
                            <th>Consommation maximum</th>
                            <th>Période (mois)</th>

                         </tr>
                         <tbody>
                             <tr>
                                 <td><input type="text" v-model="Nbabonnements[0]" ></td>
                                 <td><input type="text" v-model="regroupements[0]"></td>
                                 <td><input type="text" v-model="diametres[0]"></td>
                                 <td><input type="text" v-model="compteurs[0]"></td>
                                 <td><input type="text" v-model="consommationMaximums[0]"></td>
                                 <td><input type="text" v-model="periodes[0]"></td>

                             </tr>
                             <tr>
                                 <td><input type="text" v-model="Nbabonnements[1]" ></td>
                                 <td><input type="text" v-model="regroupements[1]"></td>
                                 <td><input type="text" v-model="diametres[1]"></td>
                                 <td><input type="text" v-model="compteurs[1]"></td>
                                 <td><input type="text" v-model="consommationMaximums[1]"></td>
                                 <td><input type="text" v-model="periodes[1]"></td>

                             </tr>
                             <tr>
                                 <td><input type="text" v-model="Nbabonnements[2]"></td>
                                 <td><input type="text" v-model="regroupements[2]"></td>
                                 <td><input type="text" v-model="diametres[2]"></td>
                                 <td><input type="text" v-model="compteurs[2]"></td>
                                 <td><input type="text" v-model="consommationMaximums[2]"></td>
                                 <td><input type="text" v-model="periodes[2]"></td>

                             </tr>
                             <tr>
                                 <td><input type="text" v-model="Nbabonnements[3]"></td>
                                 <td><input type="text" v-model="regroupements[3]"></td>
                                 <td><input type="text" v-model="diametres[3]"></td>
                                 <td><input type="text" v-model="compteurs[3]"></td>
                                 <td><input type="text" v-model="consommationMaximums[3]"></td>
                                 <td><input type="text" v-model="periodes[3]"></td>

                             </tr>
                             <tr>
                                 <td><input type="text" v-model="Nbabonnements[4]"></td>
                                 <td><input type="text" v-model="regroupements[4]"></td>
                                 <td><input type="text" v-model="diametres[4]"></td>
                                 <td><input type="text" v-model="compteurs[4]"></td>
                                 <td><input type="text" v-model="consommationMaximums[4]"></td>
                                 <td><input type="text" v-model="periodes[4]"></td>

                             </tr>
                         </tbody>
                     </table>
                </div>
            </div>
            <div class="info">
                <p>
                    <strong>
                       Appréciation sur les paramètres de qualité du service par rapport aux besoins de l’entreprise :
                    </strong>
                </p>
                <div class="entreprise">
                    <li >Intermittence, coupures :</li>
                </div>
                <div class="entreprise">
                    <label >Fréquence (nbre/Jour)</label>
                    <input type="text" v-model="frequenceNbJourSaisonSeche" placeholder="Saison seche">
                    <input type="text" v-model="frequenceNbJourSaisonPluvieuse" placeholder="Saison pluvieuse">
                 </div>
                <div class="entreprise">
                    <label >Fréquence (nbre/semaine)</label>
                    <input type="text" v-model="frequenceNbSemaineSaisonSeche" placeholder="Saison seche">
                    <input type="text" v-model="frequenceNbSemaineSaisonPluvieuse" placeholder="Saison pluvieuse">
                 </div>
                <div class="entreprise">
                    <label >Durée (temps)</label>
                    <input type="text" v-model="dureeSaisonSeche" placeholder="Saison seche">
                    <input type="text" v-model="dureeSaisonPluvieuse" placeholder="Saison pluvieuse">
                 </div>
                <div class="entreprise">
                    <li >	Pression (indiquer la période)</li>
                </div>
                <div class="entreprise">
                    <label >Faible</label>
                    <input type="text" v-model="pressionFaibleSaisonSeche" placeholder="Saison seche">
                    <input type="text" v-model="pressionFaibleSaisonPluvieuse" placeholder="Saison pluvieuse">
                 </div>
                <div class="entreprise">
                    <label >Moyenne</label>
                    <input type="text" v-model="pressionMoyenneSaisonSeche" placeholder="Saison seche">
                    <input type="text" v-model="pressionMoyenneSaisonPluvieuse" placeholder="Saison pluvieuse">
                 </div>
                <div class="entreprise">
                    <label >Elevée</label>
                    <input type="text" v-model="pressionEleveSaisonSeche" placeholder="Saison seche">
                    <input type="text" v-model="pressionEleveSaisonPluvieuse" placeholder="Saison pluvieuse">
                 </div>
                <div class="entreprise">
                    <p >
                        <strong>Vérifier si branchement : en service ? facturé ? résilié ? si résilié = depuis quand, pourquoi ?</strong>
                    </p>
                </div>
                <div class="entreprise">
                     <table>
                         <thead>
                            <tr>
                                <th colspan="3">BRANCHEMENT</th>
                                <th colspan="3">RESILIATION</th>
                            </tr>
                            <tr>
                                <th>Activités</th>
                                <th>En Service (fonctionnement) Oui / Non</th>
                                <th>Facturé Oui/Non</th>
                                <th>Oui/Non</th>
                                <th>Période</th>
                                <th>Raisons</th>
                            </tr>

                         </thead>

                         <tbody>
                             <tr>
                                 <td><input type="text" v-model="branchementActivite[0]" ></td>
                                 <td>
                                     <select required v-model="branchementService[0]">
                                         <option value="Oui">Oui</option>
                                         <option value="Non">Non</option>
                                     </select>
                                 </td>
                                 <td>
                                    <select required v-model="branchementFacture[0]">
                                         <option value="Oui">Oui</option>
                                         <option value="Non">Non</option>
                                    </select>
                                </td>
                                 <td>
                                     <select required v-model="resiliation[0]">
                                         <option value="Oui">Oui</option>
                                         <option value="Non">Non</option>
                                    </select>
                                </td>
                                 <td><input type="text" v-model="resiliationPeriode[0]"></td>
                                 <td><input type="text" v-model="resiliationRaison[0]"></td>

                             </tr>
                             <tr>
                                 <td><input type="text" v-model="branchementActivite[1]" ></td>
                                 <td>
                                     <select required v-model="branchementService[1]">
                                         <option value="Oui">Oui</option>
                                         <option value="Non">Non</option>
                                     </select>
                                 </td>
                                 <td>
                                    <select required v-model="branchementFacture[1]">
                                         <option value="Oui">Oui</option>
                                         <option value="Non">Non</option>
                                    </select>
                                </td>
                                 <td>
                                     <select required v-model="resiliation[1]">
                                         <option value="Oui">Oui</option>
                                         <option value="Non">Non</option>
                                    </select>
                                </td>
                                 <td><input type="text" v-model="resiliationPeriode[1]"></td>
                                 <td><input type="text" v-model="resiliationRaison[1]"></td>

                             </tr>
                             <tr>
                                 <td><input type="text" v-model="branchementActivite[2]" ></td>
                                 <td>
                                     <select required v-model="branchementService[2]">
                                         <option value="Oui">Oui</option>
                                         <option value="Non">Non</option>
                                     </select>
                                 </td>
                                 <td>
                                    <select required v-model="branchementFacture[2]">
                                         <option value="Oui">Oui</option>
                                         <option value="Non">Non</option>
                                    </select>
                                </td>
                                 <td>
                                     <select required v-model="resiliation[2]">
                                         <option value="Oui">Oui</option>
                                         <option value="Non">Non</option>
                                    </select>
                                </td>
                                 <td><input type="text" v-model="resiliationPeriode[2]"></td>
                                 <td><input type="text" v-model="resiliationRaison[2]"></td>

                             </tr>
                             <tr>
                                 <td><input type="text" v-model="branchementActivite[3]" ></td>
                                 <td>
                                     <select required v-model="branchementService[3]">
                                         <option value="Oui">Oui</option>
                                         <option value="Non">Non</option>
                                     </select>
                                 </td>
                                 <td>
                                    <select required v-model="branchementFacture[3]">
                                         <option value="Oui">Oui</option>
                                         <option value="Non">Non</option>
                                    </select>
                                </td>
                                 <td>
                                     <select required v-model="resiliation[3]">
                                         <option value="Oui">Oui</option>
                                         <option value="Non">Non</option>
                                    </select>
                                </td>
                                 <td><input type="text" v-model="resiliationPeriode[3]"></td>
                                 <td><input type="text" v-model="resiliationRaison[3]"></td>

                             </tr>
                             <tr>
                                 <td><input type="text" v-model="branchementActivite[4]" ></td>
                                 <td>
                                     <select required v-model="branchementService[4]">
                                         <option value="Oui">Oui</option>
                                         <option value="Non">Non</option>
                                     </select>
                                 </td>
                                 <td>
                                    <select required v-model="branchementFacture[4]">
                                         <option value="Oui">Oui</option>
                                         <option value="Non">Non</option>
                                    </select>
                                </td>
                                 <td>
                                     <select required v-model="resiliation[4]">
                                         <option value="Oui">Oui</option>
                                         <option value="Non">Non</option>
                                    </select>
                                </td>
                                 <td><input type="text" v-model="resiliationPeriode[4]"></td>
                                 <td><input type="text" v-model="resiliationRaison[4]"></td>

                             </tr>
                         </tbody>
                     </table>
                </div>
                <div class="entreprise">
                    <select required v-model="modaliteFacturation">
                        <option value="" selected>Modalité de facturation</option>
                        <option value="bimensuel">Bimensuel</option>
                        <option value="mensuel">mensuel</option>
                        <option value="trimestriel">Trimestriel</option>
                        <option value="autres">autres (à préciser)</option>
                    </select>
                    <select required v-model="paiement">
                        <option value="" selected>Mode de paiement de facturation</option>
                        <option value="au guichet">au guichet</option>
                        <option value="par virement">par virement</option>
                        <option value="autres">autres (à préciser)</option>
                    </select>
                </div>
                <div class="entreprise">
                    <select required v-model="problemeFacturation">
                        <option value="" selected>Existe-t-il des problèmes de facturation</option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                    </select>
                    <input type="text" v-model="raisonProblemeFacturation" placeholder="Les quelles" v-if="problemeFacturation == 'Oui'">
                </div>
                <div class="entreprise">
                    <select required v-model="problemePaiement">
                        <option value="" selected>Existe-il des problèmes de paiement de la facture ?</option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                    </select>
                    <input type="text" v-model="raisonProblemePaiement" placeholder="Les quelles" v-if="problemePaiement == 'Oui'">
                </div>
                <div class="entreprise">
                    <select required v-model="existancePompe">
                        <option value="" selected>Existence d’une pompe sur branchements ?</option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                    </select>
                    <input type="text" v-model="consommationEnergie" placeholder="Consommation en energie" v-if="existancePompe == 'Oui'">
                    <input type="text" v-model="coutMensuel" placeholder="Coût mensuel" v-if="existancePompe == 'Oui'">
                </div>
                <div class="entreprise">
                    <select required v-model="existanceTraitement">
                        <option value="" selected>Existence d’un traitement sur l’eau ?</option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                    </select>
                    <input type="text" v-model="usageTraitement" placeholder="Pour quel traitement" v-if="existanceTraitement == 'Oui'">
                </div>
                <div class="entreprise">
                    <select required v-model="existanceCiterne">
                        <option value="" selected>Existence de citernes de stockage ?</option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                    </select>
                    <input type="text" v-model="capaciteStockage" placeholder="Capacité de stockage / Fonctionnement" v-if="existanceCiterne == 'Oui'">
                </div>
                <hr>
            </div>
            <div class=" soustitre">
                <p>DESCRIPTION DU FORAGE</p>
            </div>
            <div class="info">
                <div class="entreprise">
                    <input type="text" placeholder="Profondeur du forage" v-model="profondeurForage">
                    <input type="text" placeholder="Coût du forage" v-model="coutForage">
                    <input type="text" placeholder="Année de construction du forage" v-model="anneeConstruction">
                </div>
                <div class="entreprise">
                    <input type="text" placeholder="Raison de la construction du forage " v-model="raisonConstruction">
                </div>
                <div class="entreprise">
                    <select required v-model="existancePompeForage">
                        <option value="" selected>Existence d’une pompe </option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                    </select>
                    <input type="text" v-model="capacitePompeForage" placeholder="Capacité de la pompe" v-if="existancePompeForage == 'Oui'">
                </div>
                <div class="entreprise">
                    <select required v-model="existanceCompteurPompeForage">
                        <option value="" selected>Existence d’un compteur sur pompe ?</option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                    </select>
                </div>
            <div class="entreprise" v-if="existanceCompteurPompeForage == 'Oui'">
                    <table>
                        <tr>
                        <th>Mois</th>
                        <th>Volumes consommés (m³)</th>
                        <th>Nombre de jours</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td>Mai 2021</td>
                                <td><input type="text" v-model="volumeForages[0]"></td>
                                <td><input type="text" v-model="nbJourForages[0]"></td>
                            </tr>
                            <tr>
                                <td>Juin 2021</td>
                                <td><input type="text" v-model="volumeForages[1]"></td>
                                <td><input type="text" v-model="nbJourForages[1]"></td>

                            </tr>
                            <tr>
                                <td>Juillet 2021</td>
                                <td><input type="text" v-model="volumeForages[2]"></td>
                                <td><input type="text" v-model="nbJourForages[2]"></td>
                            </tr>
                            <tr>
                                <td>Août 2021</td>
                                <td><input type="text" v-model="volumeForages[3]"></td>
                                <td><input type="text" v-model="nbJourForages[3]"></td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            <div class="entreprise" v-if="existanceCompteurPompeForage == 'Non'">
                    <input type="text" v-model="nbHeurePompage" placeholder="Quelle est le nb d’heures de pompage / jour ?">
            </div>
            <div class="entreprise">
                <select required v-model="existanceCiterneForage">
                    <option value="" selected>Existe-il des Citernes de stockage ?</option>
                    <option value="Oui">Oui</option>
                    <option value="Non">Non</option>
                </select>
                <input type="text" v-model="capaciteStockageCiterneForage" placeholder="capacité de stockage / Fonctionnement" v-if="existanceCiterneForage == 'Oui'">
                <input type="text" v-model="coutStockageCiterneForage" placeholder="Coût (investis et fonctionnement) ?" v-if="existanceCiterneForage == 'Oui'">
            </div>
            <div class="entreprise">
                <p>
                    <strong>Consommation énergétique mensuelle du forage ?</strong>
                </p>
            </div>
            <div class="entreprise">
                <input type="text" v-model="coutMensuelForage" placeholder="Coût mensuel du forage" >
                <input type="text" v-model="fonctionnementForage" placeholder="Fonctionnement " >
                <input type="text" v-model="entretienForage" placeholder="Entretien" >
                <input type="text" v-model="amortissementForage" placeholder="Amortissement " >
            </div>
            <div class="entreprise">
                <select required v-model="existanceTraitementForage">
                    <option value="" selected>Existence d’un traitement sur l’eau ?</option>
                    <option value="Oui">Oui</option>
                    <option value="Non">Non</option>
                </select>
                <input type="text" v-model="usageTraitementForage" placeholder="Pour quel traitement" v-if="existanceTraitementForage == 'Oui'">
            </div>
            </div>
            <div class=" soustitre">
                <p>AUTRES QUESTIONS SUR L’APPROVISIONNEMENT EN EAU</p>
            </div>
            <div class="info">
                <div class="entreprise">
                    <select required v-model="problemeFuite">
                        <option value="" selected>Problèmes de fuites ? </option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                    </select>
                    <input type="text" v-model="listeProbleFuite" placeholder="Les quels ?" v-if="problemeFuite == 'Oui'">
                </div>
                <div class="entreprise">
                    <select required v-model="recyclageEauUsee">
                        <option value="" selected>Recyclage eau usées ? </option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                    </select>
                    <input type="text" v-model="finRecyclage" placeholder="A quelle fin" v-if="recyclageEauUsee == 'Oui'">
                </div>
                <div class="entreprise">
                    <select required v-model="surveillanceFonctionnement">
                        <option value="" selected>Y a-t-il un personnel spécifique affecté à la surveillance et au fonctionnement des installations d’eau ? </option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                    </select>
                    <input type="text" v-model="coutAdditionnel" placeholder="Quel est le coût additionnel" v-if="surveillanceFonctionnement == 'Oui'">
                </div>
                <div class="soustitre">
                    <p>EVACUATION DES EAUX USEES</p>
                </div>
                <div class="entreprise">
                    <p>
                        <strong>Où sont évacuées les eaux usées (différencier : eaux utilisées dans le processus de production et eaux liées aux usages domestiques) ? Dans la mer, l’égout, une station de traitement, le réseau pluvial, autres ?</strong>
                    </p>
                </div>
            <div class="entreprise" >
                    <table>
                        <tr>
                        <th>Activités</th>
                        <th>Egoût</th>
                        <th>Station de traitement</th>
                        <th>Réseau pluvial</th>
                        <th>Autres( à préciser)</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td><input type="text" v-model="activiteEvacuations[0]" ></td>
                                <td><input type="text" v-model="egoutEvacuation[0]"></td>
                                <td><input type="text" v-model="stationTraitementEvacuations[0]"></td>
                                <td><input type="text" v-model="reseauPluvialEvacuations[0]"></td>
                                <td><input type="text" v-model="autreEvacuations[0]"></td>
                            </tr>
                            <tr>
                                <td><input type="text" v-model="activiteEvacuations[1]" ></td>
                                <td><input type="text" v-model="egoutEvacuation[1]"></td>
                                <td><input type="text" v-model="stationTraitementEvacuations[1]"></td>
                                <td><input type="text" v-model="reseauPluvialEvacuations[1]"></td>
                                <td><input type="text" v-model="autreEvacuations[1]"></td>

                            </tr>
                            <tr>
                                <td><input type="text" v-model="activiteEvacuations[2]" ></td>
                                <td><input type="text" v-model="egoutEvacuation[2]"></td>
                                <td><input type="text" v-model="stationTraitementEvacuations[2]"></td>
                                <td><input type="text" v-model="reseauPluvialEvacuations[2]"></td>
                                <td><input type="text" v-model="autreEvacuations[2]"></td>
                            </tr>
                            <tr>
                                <td><input type="text" v-model="activiteEvacuations[3]" ></td>
                                <td><input type="text" v-model="egoutEvacuation[3]"></td>
                                <td><input type="text" v-model="stationTraitementEvacuations[3]"></td>
                                <td><input type="text" v-model="reseauPluvialEvacuations[3]"></td>
                                <td><input type="text" v-model="autreEvacuations[3]"></td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            <div class="entreprise">
                <select required v-model="traitementPrealable">
                    <option value="" selected>Y a-t-il traitement préalable ?</option>
                    <option value="Oui">Oui</option>
                    <option value="Non">Non</option>
                </select>
                <select required v-model="typeTraitementPrealable" v-if="traitementPrealable == 'Oui'">
                    <option value="" selected>Quel traitement est-il utilisé ?</option>
                    <option value="Mécanique (dégrillage, bac à graisses, etc)">Mécanique (dégrillage, bac à graisses, etc)</option>
                    <option value="Chimique">Chimique</option>
                    <option value="Autres">Autres</option>
                </select>

            </div>
            <div class="entreprise" v-if="typeTraitementPrealable == 'Autres'">
                <input type="text" v-model="autreTraitementPrealable">
            </div>
            </div>
            <hr>
            <div class="error">{{ error }}</div>
            <div class="button">
                <button>{{ id ? 'Edit enquete' : 'Enregistrer'}}</button>
            </div>
        </form>
    </div>
</template>

<script>
    import {  ref } from '@vue/reactivity'
    import updateDocument from '../../controllers/updateDocument'
    import setDocument from '../../controllers/setDocument'
    import { doc, getDoc, serverTimestamp } from 'firebase/firestore'
    import { useRoute, useRouter } from 'vue-router'
    import { db, auth } from '../../firebase/config'
    import { onMounted } from '@vue/runtime-core'
    export default {
        props: ['token'],

        setup() {
            const id = ref(null)
            const error = ref(null)
            const p = ref({})
            const enqueteur = ref('')
            const statutFonctionnement = ref('')
            const raisonResiliation = ref('')
            const volumeMai2021 = ref('')
            const jourFactureMai2021 = ref('')
            const montantMai2021 = ref('')
            const impayeMai2021 = ref('')
            const volumeJuin2021 = ref('')
            const jourFactureJuin2021 = ref('')
            const montantJuin2021 = ref('')
            const impayeJuin2021 = ref('')
            const volumeJuillet2021 = ref('')
            const jourFactureJuillet2021 = ref('')
            const montantJuillet2021 = ref('')
            const impayeJuillet2021 = ref('')
            const volumeAout2021 = ref('')
            const jourFactureAout2021 = ref('')
            const montantAout2021 = ref('')
            const impayeAout2021 = ref('')
            const nbForage = ref('')
            const compteurForage = ref('')
            const nbPuit = ref('')
            const compteurPuit = ref('')
            const nbAutres = ref('')
            const compteurAutres = ref('')
            const usages = ref([])
            const sourcePrincipales = ref([])
            const qualiteEau = ref([])
            const volumeConsommes = ref([])
            const besoins = ref([])
            const qualiteApprovisionnement = ref('')
            const Nbabonnements = ref([])
            const regroupements = ref([])
            const diametres = ref([])
            const compteurs = ref([])
            const consommationMaximums = ref([])
            const periodes = ref([])
            const frequenceNbJourSaisonSeche = ref('')
            const frequenceNbJourSaisonPluvieuse = ref('')
            const frequenceNbSemaineSaisonSeche = ref('')
            const frequenceNbSemaineSaisonPluvieuse = ref('')
            const dureeSaisonSeche = ref('')
            const dureeSaisonPluvieuse = ref('')
            const pressionFaibleSaisonSeche = ref('')
            const pressionFaibleSaisonPluvieuse = ref('')
            const pressionMoyenneSaisonSeche = ref('')
            const pressionMoyenneSaisonPluvieuse = ref('')
            const pressionEleveSaisonSeche = ref('')
            const pressionEleveSaisonPluvieuse = ref('')
            const branchementActivite = ref([])
            const branchementService = ref([])
            const branchementFacture = ref([])
            const resiliation = ref([])
            const resiliationPeriode = ref([])
            const resiliationRaison = ref([])
            const modaliteFacturation = ref('')
            const paiement = ref('')
            const problemeFacturation = ref('')
            const raisonProblemeFacturation = ref('')
            const problemePaiement = ref('')
            const raisonProblemePaiement = ref('')
            const existancePompe = ref('')
            const consommationEnergie = ref('')
            const coutMensuel = ref('')
            const existanceTraitement = ref('')
            const usageTraitement = ref('')
            const existanceCiterne = ref('')
            const capaciteStockage = ref('')
            const profondeurForage = ref('')
            const coutForage = ref('')
            const anneeConstruction = ref('')
            const raisonConstruction = ref('')
            const existancePompeForage = ref('')
            const capacitePompeForage = ref('')
            const existanceCompteurPompeForage = ref('')
            const volumeForages = ref([])
            const nbJourForages = ref([])
            const existanceCiterneForage = ref('')
            const capaciteStockageCiterneForage = ref('')
            const coutStockageCiterneForage = ref('')
            const coutMensuelForage = ref('')
            const fonctionnementForage = ref('')
            const entretienForage = ref('')
            const amortissementForage = ref('')
            const usageTraitementForage = ref('')
            const existanceTraitementForage = ref('')
            const listeProbleFuite = ref('')
            const problemeFuite = ref('')
            const recyclageEauUsee = ref('')
            const finRecyclage = ref('')
            const coutAdditionnel = ref('')
            const surveillanceFonctionnement = ref('')
            const activiteEvacuations = ref([])
            const egoutEvacuation = ref([])
            const stationTraitementEvacuations = ref([])
            const reseauPluvialEvacuations = ref([])
            const autreEvacuations = ref([])
            const traitementPrealable = ref('')
            const typeTraitementPrealable = ref('')
            const autreTraitementPrealable = ref('')

            const route = useRoute()
            const router = useRouter()
            enqueteur.value = auth.currentUser.displayName
            const f = onMounted( async () =>{
                console.log(" onMounted ", route.params.docId)
                if(route.params.docId){

                    const docRef = doc( db, 'approvisionnements', route.params.docId)
                    const res =   await getDoc(docRef)
                    if(res.data()) {
                        console.log(" approvisionnement res :", res.id)
                        id.value = res.id
                        // Charger les données

                    }

                }
            })

            //const { createError, create } = createDocument()
            const { updateError, update } = updateDocument()
            const { setError, insert } = setDocument()
            const handleSubmit = async () =>{
                if(id.value) {
                    //update
                    error.value = null
                    let a = {
                        id: id.value,

                    }
                    update("approvisionnements", a)
                    error.value = updateError.value
                } else {
                    //Create
                    error.value = null
                    console.log(" Not id")
                    let approvisionnement = {
                        enqueteur : enqueteur.value,
                        statutFonctionnement : statutFonctionnement.value,
                        raisonResiliation : raisonResiliation.value,
                        volumeMai2021 : volumeMai2021.value,
                        jourFactureMai2021 : jourFactureMai2021.value,
                        montantMai2021 : montantMai2021.value,
                        impayeMai2021 : impayeMai2021.value,
                        volumeJuin2021 : volumeJuin2021.value,
                        jourFactureJuin2021 : jourFactureJuin2021.value,
                        montantJuin2021 : montantJuin2021.value,
                        impayeJuin2021 : impayeJuin2021.value,
                        volumeJuillet2021 : volumeJuillet2021.value,
                        jourFactureJuillet2021 : jourFactureJuillet2021.value,
                        montantJuillet2021 : montantJuillet2021.value,
                        impayeJuillet2021 : impayeJuillet2021.value,
                        volumeAout2021 : volumeAout2021.value,
                        jourFactureAout2021 : jourFactureAout2021.value,
                        montantAout2021 : montantAout2021.value,
                        impayeAout2021 : impayeAout2021.value,
                        nbForage: nbForage.value,
                        compteurForage: compteurForage.value,
                        nbPuit: nbPuit.value,
                        compteurPuit: compteurPuit.value,
                        nbAutres: nbAutres.value,
                        compteurAutres: compteurAutres.value,
                        usages : usages.value,
                        sourcePrincipales : sourcePrincipales.value,
                        qualiteEau : qualiteEau.value,
                        volumeConsommes : volumeConsommes.value,
                        besoins : besoins.value,
                        qualiteApprovisionnement : qualiteApprovisionnement.value,
                        Nbabonnements : Nbabonnements.value,
                        regroupements : regroupements.value,
                        diametres : diametres.value,
                        compteurs : compteurs.value,
                        consommationMaximums : consommationMaximums.value,
                        periodes : periodes.value,
                        frequenceNbJourSaisonSeche : frequenceNbJourSaisonSeche.value,
                        frequenceNbJourSaisonPluvieuse : frequenceNbJourSaisonPluvieuse.value,
                        frequenceNbSemaineSaisonSeche : frequenceNbSemaineSaisonSeche.value,
                        frequenceNbSemaineSaisonPluvieuse : frequenceNbSemaineSaisonPluvieuse.value,
                        dureeSaisonSeche : dureeSaisonSeche.value,
                        dureeSaisonPluvieuse : dureeSaisonPluvieuse.value,
                        pressionFaibleSaisonSeche : pressionFaibleSaisonSeche.value,
                        pressionFaibleSaisonPluvieuse : pressionFaibleSaisonPluvieuse.value,
                        pressionMoyenneSaisonSeche : pressionMoyenneSaisonSeche.value,
                        pressionMoyenneSaisonPluvieuse : pressionMoyenneSaisonPluvieuse.value,
                        pressionEleveSaisonSeche : pressionEleveSaisonSeche.value,
                        pressionEleveSaisonPluvieuse : pressionEleveSaisonPluvieuse.value,
                        branchementActivite : branchementActivite.value,
                        branchementService : branchementService.value,
                        branchementFacture : branchementFacture.value,
                        resiliation : resiliation.value,
                        resiliationPeriode : resiliationPeriode.value,
                        resiliationRaison : resiliationRaison.value,
                        modaliteFacturation : modaliteFacturation.value,
                        paiement : paiement.value,
                        problemeFacturation : problemeFacturation.value,
                        raisonProblemeFacturation : raisonProblemeFacturation.value,
                        problemePaiement : problemePaiement.value,
                        raisonProblemePaiement : raisonProblemePaiement.value,
                        existancePompe : existancePompe.value,
                        consommationEnergie : consommationEnergie.value,
                        coutMensuel : coutMensuel.value,
                        existanceTraitement : existanceTraitement.value,
                        usageTraitement : usageTraitement.value,
                        existanceCiterne : existanceCiterne.value,
                        capaciteStockage : capaciteStockage.value,
                        profondeurForage : profondeurForage.value,
                        coutForage : coutForage.value,
                        anneeConstruction : anneeConstruction.value,
                        raisonConstruction : raisonConstruction.value,
                        existancePompeForage : existancePompeForage.value,
                        capacitePompeForage : capacitePompeForage.value,
                        existanceCompteurPompeForage : existanceCompteurPompeForage.value,
                        volumeForages : volumeForages.value,
                        nbJourForages : nbJourForages.value,
                        existanceCiterneForage : existanceCiterneForage.value,
                        capaciteStockageCiterneForage : capaciteStockageCiterneForage.value,
                        coutStockageCiterneForage : coutStockageCiterneForage.value,
                        coutMensuelForage : coutMensuelForage.value,
                        fonctionnementForage : fonctionnementForage.value,
                        entretienForage : entretienForage.value,
                        amortissementForage : amortissementForage.value,
                        usageTraitementForage : usageTraitementForage.value,
                        existanceTraitementForage : existanceTraitementForage.value,
                        listeProbleFuite : listeProbleFuite.value,
                        problemeFuite : problemeFuite.value,
                        recyclageEauUsee : recyclageEauUsee.value,
                        finRecyclage : finRecyclage.value,
                        coutAdditionnel : coutAdditionnel.value,
                        surveillanceFonctionnement : surveillanceFonctionnement.value,
                        activiteEvacuations : activiteEvacuations.value,
                        egoutEvacuation : egoutEvacuation.value,
                        stationTraitementEvacuations : stationTraitementEvacuations.value,
                        reseauPluvialEvacuations : reseauPluvialEvacuations.value,
                        autreEvacuations : autreEvacuations.value,
                        traitementPrealable : traitementPrealable.value,
                        typeTraitementPrealable : typeTraitementPrealable.value,
                        autreTraitementPrealable : autreTraitementPrealable.value,
                        createdAt: serverTimestamp()
                    }
                    //Add approvisionnements
                    const res = await insert("approvisionnements", approvisionnement, route.params.docId)
                    error.value = setError.value
                    console.log("appro data : ", approvisionnement)
                    if(!error.value){
                        router.push( { name: 'EnqueteList', params: { token: auth.currentUser.accessToken }})
                    }
                }
            }
            return { handleSubmit, error, id, enqueteur,  statutFonctionnement, raisonResiliation, volumeMai2021, jourFactureMai2021, montantMai2021, impayeMai2021, volumeJuin2021, jourFactureJuin2021, montantJuin2021, impayeJuin2021, volumeJuillet2021, jourFactureJuillet2021, montantJuillet2021, impayeJuillet2021, volumeAout2021, jourFactureAout2021, montantAout2021, impayeAout2021, nbForage, compteurForage, nbPuit, compteurPuit, nbAutres, compteurAutres, usages, sourcePrincipales,qualiteEau, volumeConsommes, besoins, qualiteApprovisionnement, Nbabonnements, regroupements, diametres, compteurs, consommationMaximums, periodes, frequenceNbJourSaisonSeche, frequenceNbJourSaisonPluvieuse, frequenceNbSemaineSaisonSeche, frequenceNbSemaineSaisonPluvieuse, dureeSaisonSeche, dureeSaisonPluvieuse, pressionFaibleSaisonSeche, pressionFaibleSaisonPluvieuse, pressionMoyenneSaisonSeche, pressionMoyenneSaisonPluvieuse, pressionEleveSaisonSeche, pressionEleveSaisonPluvieuse, branchementActivite, branchementService, branchementFacture, resiliation, resiliationPeriode, resiliationRaison, modaliteFacturation, paiement, problemeFacturation, raisonProblemeFacturation, problemePaiement, raisonProblemePaiement, existancePompe, consommationEnergie, coutMensuel, existanceTraitement, usageTraitement, existanceCiterne, capaciteStockage, profondeurForage, coutForage, anneeConstruction, raisonConstruction, existancePompeForage, capacitePompeForage, existanceCompteurPompeForage, volumeForages, nbJourForages, existanceCiterneForage, capaciteStockageCiterneForage, coutStockageCiterneForage, coutMensuelForage, fonctionnementForage, entretienForage, amortissementForage, usageTraitementForage, existanceTraitementForage, listeProbleFuite, problemeFuite, recyclageEauUsee, finRecyclage, coutAdditionnel, surveillanceFonctionnement, activiteEvacuations, egoutEvacuation, stationTraitementEvacuations, reseauPluvialEvacuations, autreEvacuations, traitementPrealable, typeTraitementPrealable, autreTraitementPrealable }
        }
    }
</script>

<style>

  button.edit {
    background: #12743b;
  }

</style>

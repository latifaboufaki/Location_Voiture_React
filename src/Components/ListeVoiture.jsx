import React, { useState } from 'react';
import styled from 'styled-components';
import Voiture from './Voiture';
import AjouterVoiture from './AjouterVoiture';

const Container = styled.div`
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background-color: #F5E9E2; /* Couleur du header */
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    text-align: center;
    color: #773344; /* Couleur du footer */
`;


const Button = styled.button`
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #E3B5A4; /* Couleur du contenu */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #D99E8E;
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th, td {
        padding: 12px;
        text-align: left;
        border: 1px solid #773344;
    }

    th {
        background-color: #E3B5A4;
        color: white;
    }

    tr:nth-child(even) {
        background-color: #F5E9E2;
    }

    tr:hover {
        background-color: #D99E8E;
    }
`;

const ListeVoitures = () => {
    const [voitures, setVoitures] = useState([
        { id: "v1", Marque: "Barbus", TypeCarburant: "Diesel", PrixLocation: 200, image: "barbus.jpg" },
        { id: "v2", Marque: "Peugeot 208", TypeCarburant: "Essence", PrixLocation: 150, image: "peugeot.jpg" }
    ]);

    const [showForm, setShowForm] = useState(false);

    const ajouterVoiture = (nouvelleVoiture) => {
        setVoitures([...voitures, nouvelleVoiture]);
        setShowForm(false); // Cache le formulaire après ajout
    };

    const supprimerVoiture = (id) => {
        if (window.confirm("Voulez-vous vraiment supprimer cette voiture ?")) {
            setVoitures(voitures.filter(voiture => voiture.id !== id));
        }
    };

    return (
        <Container>
            <Title>Liste des Voitures de Location</Title>
            <Button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Annuler' : 'Ajouter'}
            </Button>
            {showForm && <AjouterVoiture onAdd={ajouterVoiture} />}
            <Table>
                <thead>
                    <tr>
                        <th>Marque</th>
                        <th>Type Carburant</th>
                        <th>Prix de Location</th>
                        <th>Image</th>
                        <th>Opérations</th>
                    </tr>
                </thead>
                <tbody>
                    {voitures.map(voiture => (
                        <Voiture key={voiture.id} voiture={voiture} onDelete={supprimerVoiture} />
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ListeVoitures;

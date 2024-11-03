import React from 'react';

const Voiture = ({ voiture, onDelete }) => {
    return (
        <tr>
            <td>{voiture.Marque}</td>
            <td>{voiture.TypeCarburant}</td>
            <td>{voiture.PrixLocation} MAD</td>
            <td><img src={voiture.image} alt={voiture.Marque} width="100" /></td>
            <td>
                <button onClick={() => onDelete(voiture.id)}>Supprimer</button>
            </td>
        </tr>
    );
};

export default Voiture;

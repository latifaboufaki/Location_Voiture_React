import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
  margin: 20px auto;
  background-color: #f9f9f9;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const AjouterVoiture = ({ onAdd }) => {
  const [marque, setMarque] = useState('');
  const [typeCarburant, setTypeCarburant] = useState('');
  const [prixLocation, setPrixLocation] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouvelleVoiture = {
      id: `v${Date.now()}`,
      Marque: marque,
      TypeCarburant: typeCarburant,
      PrixLocation: Number(prixLocation),
      image: image
    };
    onAdd(nouvelleVoiture);
    setMarque('');
    setTypeCarburant('');
    setPrixLocation('');
    setImage('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input type="text" placeholder="Marque" value={marque} onChange={(e) => setMarque(e.target.value)} required />
      <Input type="text" placeholder="Type Carburant" value={typeCarburant} onChange={(e) => setTypeCarburant(e.target.value)} required />
      <Input type="number" placeholder="Prix Location" value={prixLocation} onChange={(e) => setPrixLocation(e.target.value)} required />
      <Input type="file" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} required />
      <Button type="submit">Ajouter Voiture</Button>
    </FormContainer>
  );
};

export default AjouterVoiture;

import { getAllFreight } from '@/services/formData';
export const RandomFormName = async () => {
  const fretes = await getAllFreight();

  const database = fretes.data.response.map((item) => item.name);

  const generateRandomName = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomName = '';

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      randomName += alphabet.charAt(randomIndex);
    }

    randomName += '-';

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      randomName += alphabet.charAt(randomIndex);
    }

    return randomName;
  };

  const isNameDuplicate = (name, database) => {
    return database.some((item) => item === name);
  };

  const generateUniqueName = (database) => {
    let newName = generateRandomName();

    while (isNameDuplicate(newName, database)) {
      newName = generateRandomName();
    }

    return newName;
  };

  const handleNameFrete = () => {
    const uniqueName = generateUniqueName(database);
    return uniqueName;
  };

  return handleNameFrete();
};

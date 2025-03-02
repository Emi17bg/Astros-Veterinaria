import { useEffect, useState } from "react";

const DogGallery = () => {
  const [dogs, setDogs] = useState([]);
  const API_URL = "https://api.thedogapi.com/v1/images/search?limit=10";

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setDogs(data);
      } catch (error) {
        console.error("Error al obtener las imágenes de perros:", error);
      }
    };
    
    fetchDogs();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Perros en adopcion responsable</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dogs.map(({ id, url }) => (
          <div key={id} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-between min-h-[300px]">
            <img 
              src={url} 
              alt="Perro lindo" 
              className="w-full h-48 object-cover aspect-square rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogGallery;

import { useEffect, useState } from "react";
import './Dogs.css';

const DogGallery = () => {
  const [dogs, setDogs] = useState([]);
  const API_URL = "https://api.thedogapi.com/v1/images/search?limit=10";

  const names = ["Max", "Bella", "Rocky", "Luna", "Charlie", "Duke", "Molly", "Zeus", "Daisy", "Bruno"];

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const dogsWithNames = data.map((dog, index) => ({
          id: dog.id,
          url: dog.url,
          name: names[index % names.length],
        }));
        setDogs(dogsWithNames);
      } catch (error) {
        console.error("Error al obtener las imágenes de perros:", error);
      }
    };

    fetchDogs();
  }, []);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Mascotas en adopción responsable</h1>
      <div className="row justify-content-center">
        {dogs.map(({ id, url, name }) => (
          <div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src={url} alt={name} />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogGallery;


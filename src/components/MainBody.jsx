import Card from "./Card"
import beagleImg from "../assets/pet_images/beagle.jpeg"
import tabbyCatImg from "../assets/pet_images/tabby_cat.jpg"
import parrotImg from "../assets/pet_images/colorful_parrot.jpg"
import rabbitImg from "../assets/pet_images/soft_rabbit.jpg"
import germanImg from "../assets/pet_images/german_shpherd.jpeg"
import persianCatImg from "../assets/pet_images/persian_cat.jpeg"
import hamsterImg from "../assets/pet_images/active_hamster.jpg"
import goldfishImg from "../assets/pet_images/goldfish.jpeg"
import huskeyImg from "../assets/pet_images/siberian_huskey.jpg"
import blackCatImg from "../assets/pet_images/black_cat.jpg"
import parakeetImg from "../assets/pet_images/green_parakeet.jpeg"
import whiteRabbitImg from "../assets/pet_images/white_rabbit.jpg"

const MainBody = () => {

  const pets = [
    {
      "petImage": beagleImg,
      "petName": "Buddy",
      "age": "2 years",
      "description": "A friendly Labrador Retriever who loves playing fetch.",
      "price": 500
    },
    {
      "petImage": tabbyCatImg,
      "petName": "Whiskers",
      "age": "1 year",
      "description": "A curious tabby cat with a playful nature.",
      "price": 300
    },
    {
      "petImage": parrotImg,
      "petName": "Chirpy",
      "age": "6 months",
      "description": "A colorful parrot with a knack for mimicking sounds.",
      "price": 200
    },
    {
      "petImage": rabbitImg,
      "petName": "Fluffy",
      "age": "1.5 years",
      "description": "A soft, cuddly rabbit that enjoys gentle petting.",
      "price": 100
    },
    {
      "petImage": germanImg,
      "petName": "Max",
      "age": "3 years",
      "description": "A loyal German Shepherd with protective instincts.",
      "price": 800
    },
    {
      "petImage": persianCatImg,
      "petName": "Mittens",
      "age": "8 months",
      "description": "A fluffy Persian cat with a calm demeanor.",
      "price": 600
    },
    {
      "petImage": hamsterImg,
      "petName": "Nibbles",
      "age": "4 months",
      "description": "A small, active hamster that loves running in its wheel.",
      "price": 50
    },
    {
      "petImage": goldfishImg,
      "petName": "Goldie",
      "age": "1 year",
      "description": "A vibrant goldfish that's easy to care for.",
      "price": 20
    },
    {
      "petImage": huskeyImg,
      "petName": "Rocky",
      "age": "5 years",
      "description": "A strong and energetic Siberian Husky.",
      "price": 700
    },
    {
      "petImage": blackCatImg,
      "petName": "Shadow",
      "age": "2 years",
      "description": "A sleek black cat with a mysterious aura.",
      "price": 400
    },
    {
      "petImage": parakeetImg,
      "petName": "Kiwi",
      "age": "2 years",
      "description": "A green parakeet that loves socializing.",
      "price": 150
    },
    {
      "petImage": whiteRabbitImg,
      "petName": "Snowball",
      "age": "1 year",
      "description": "A white rabbit with a playful personality.",
      "price": 120
    },
    // {
    //   "petName": "Bella",
    //   "age": "2.5 years",
    //   "description": "A cheerful Beagle with a keen nose for adventure.",
    //   "price": 450
    // },
    // {
    //   "petName": "Luna",
    //   "age": "1.5 years",
    //   "description": "A Siamese cat with striking blue eyes.",
    //   "price": 500
    // },
    // {
    //   "petName": "Shelly",
    //   "age": "3 years",
    //   "description": "A calm and low-maintenance pet turtle.",
    //   "price": 70
    // },
    // {
    //   "petName": "Bubbles",
    //   "age": "6 months",
    //   "description": "A lively beta fish with beautiful fins.",
    //   "price": 25
    // },
    // {
    //   "petName": "Charlie",
    //   "age": "4 years",
    //   "description": "A Golden Retriever with a loving personality.",
    //   "price": 600
    // },
    // {
    //   "petName": "Tiger",
    //   "age": "3 years",
    //   "description": "A Bengal cat with striking markings and energy.",
    //   "price": 700
    // },
    // {
    //   "petName": "Pip",
    //   "age": "2 months",
    //   "description": "A tiny hamster that enjoys burrowing and exploring.",
    //   "price": 40
    // },
    // {
    //   "petName": "Daisy",
    //   "age": "1 year",
    //   "description": "A playful and affectionate Poodle.",
    //   "price": 550
    // }
  ]

  return (
    <div className="flex justify-betwen flex-wrap gap-4 mx-5 mb-6">
      {pets.map((element) => {
        return (
          <>
          <div className="ml-6"> 
            <Card 
              petImage={element.petImage}
              petName={element.petName}
              age={element.age}
              description={element.description}
              price={element.price}
            />
            </div>
          </>
        )
      })}
    </div>
  )
}

export default MainBody
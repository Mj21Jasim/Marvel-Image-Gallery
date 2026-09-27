const characters = [
  {
    id: 1,
    name: "Iron Man",
    image: "/images/1-IM.jpg",
    description: "Genius inventor and armored Avenger.",
    team: "Avengers"
  },
  {
    id: 2,
    name: "Captain America",
    image: "/images/2-CA.jpg",
    description: "Super soldier and symbol of courage.",
    team: "Avengers"
  },
  {
    id: 3,
    name: "Thor",
    image: "/images/3-Thor.jpg",
    description: "God of thunder and powerful Avenger.",
    team: "Avengers"
  },
  {
    id: 4,
    name: "Loki",
    image: "/images/4-Loki.jpg",
    description: "The clever trickster from Asgard.",
    team: "Marvel"
  },
  {
    id: 5,
    name: "Spider-Man",
    image: "/images/5-Spider.jpg",
    description: "Friendly neighborhood superhero.",
    team: "Avengers"
  },
  {
    id: 6,
    name: "Hulk",
    image: "/images/6-Hulk.jpg",
    description: "Scientist with incredible strength.",
    team: "Avengers"
  },
  {
    id: 7,
    name: "Black Panther",
    image: "/images/7-BP.jpg",
    description: "King and protector of Wakanda.",
    team: "Avengers"
  },
  {
    id: 8,
    name: "Doctor Strange",
    image: "/images/8-DrS.jpg",
    description: "Master of the mystic arts.",
    team: "Marvel"
  },
  {
    id: 9,
    name: "Scarlet Witch",
    image: "/images/9-SWitch.jpg",
    description: "Powerful wielder of chaos magic.",
    team: "Avengers"
  },
  {
    id: 10,
    name: "Black Widow",
    image: "/images/10-BW.jpg",
    description: "Elite spy and skilled Avenger.",
    team: "Avengers"
  },
  {
    id: 11,
    name: "Hawkeye",
    image: "/images/11-Hawkeye.jpg",
    description: "Master archer and precision fighter.",
    team: "Avengers"
  },
  {
    id: 12,
    name: "Captain Marvel",
    image: "/images/12-Cmarvel.jpg",
    description: "Cosmic hero with incredible power.",
    team: "Marvel"
  },
  {
    id: 13,
    name: "Ant-Man",
    image: "/images/13-Ant.jpg",
    description: "Hero with the ability to change size.",
    team: "Avengers"
  },
  {
    id: 14,
    name: "Wasp",
    image: "/images/14-Wasp.jpg",
    description: "Agile hero with advanced technology.",
    team: "Avengers"
  },
  {
    id: 15,
    name: "Star-Lord",
    image: "/images/15-GSL.jpg",
    description: "Leader of the Guardians of the Galaxy.",
    team: "Guardians"
  },
  {
    id: 16,
    name: "Gamora",
    image: "/images/16-Ggamora.jpg",
    description: "Highly skilled warrior of the Guardians.",
    team: "Guardians"
  },
  {
    id: 17,
    name: "Groot",
    image: "/images/17-GG.jpg",
    description: "A powerful and loyal tree-like hero.",
    team: "Guardians"
  },
  {
    id: 18,
    name: "Rocket",
    image: "/images/18-GR.jpg",
    description: "Brilliant engineer and fearless Guardian.",
    team: "Guardians"
  },
  {
    id: 19,
    name: "Vision",
    image: "/images/19-vision.jpg",
    description: "Advanced android with immense power.",
    team: "Avengers"
  },
  {
    id: 20,
    name: "Thanos",
    image: "/images/20-Thanos.jpg",
    description: "Powerful cosmic villain seeking balance.",
    team: "Marvel"
  },
  {
    id: 21,
    name: "Deadpool",
    image: "/images/21-DP.jpg",
    description: "Regenerating mercenary with a sharp wit.",
    team: "Marvel"
  },
  {
    id: 22,
    name: "Wolverine",
    image: "/images/22-Xwol.jpg",
    description: "Mutant warrior with powerful claws.",
    team: "X-Men"
  },
  {
    id: 23,
    name: "Magneto",
    image: "/images/23-XM.jpg",
    description: "Mutant capable of controlling magnetism.",
    team: "X-Men"
  },
  {
    id: 24,
    name: "Storm",
    image: "/images/24-XStrom.jpg",
    description: "Mutant who commands the weather.",
    team: "X-Men"
  },
  {
    id: 25,
    name: "Jean Grey",
    image: "/images/25-XJean.jpg",
    description: "Powerful mutant with telepathic abilities.",
    team: "X-Men"
  },
  {
    id: 26,
    name: "Cyclops",
    image: "/images/26-Xcyclops.jpg",
    description: "X-Men leader with powerful optic blasts.",
    team: "X-Men"
  },
  {
    id: 27,
    name: "Daredevil",
    image: "/images/27-XDD.jpg",
    description: "Blind hero with extraordinary senses.",
    team: "Marvel"
  },
  {
    id: 28,
    name: "Moon Knight",
    image: "/images/28-MK.jpg",
    description: "Mysterious hero who protects the night.",
    team: "Marvel"
  },
  {
    id: 29,
    name: "Shang-Chi",
    image: "/images/29-Schi.jpg",
    description: "Master martial artist and heroic fighter.",
    team: "Marvel"
  },
  {
    id: 30,
    name: "Venom",
    image: "/images/30-V.jpg",
    description: "Powerful symbiote with extraordinary abilities.",
    team: "Marvel"
  },
  {
  id: 31,
  name: "Mr. Fantastic",
  image: "/images/31.jpg",
  description: "Brilliant scientist with incredible stretching abilities.",
  team: "Fantastic Four"
},
{
  id: 32,
  name: "Invisible Woman",
  image: "/images/32.jpg",
  description: "Powerful hero who can become invisible and create force fields.",
  team: "Fantastic Four"
},
{
  id: 33,
  name: "Human Torch",
  image: "/images/33.jpg",
  description: "Hero who can ignite his body and control flames.",
  team: "Fantastic Four"
},
{
  id: 34,
  name: "The Thing",
  image: "/images/34.jpg",
  description: "Super-strong member of the Fantastic Four.",
  team: "Fantastic Four"
},
{
  id: 35,
  name: "Silver Surfer",
  image: "/images/35.jpg",
  description: "Cosmic hero who travels across the universe.",
  team: "Marvel"
},
{
  id: 36,
  name: "Doctor Doom",
  image: "/images/36.jpg",
  description: "Brilliant armored ruler and formidable Marvel villain.",
  team: "Marvel"
}
];

export default characters;
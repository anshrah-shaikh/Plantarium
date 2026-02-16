// =======================
// 🌿 Plant Data
// =======================
const plants = [
  {
  name: "Ti Plant (Hawaiian Good Luck Plant)",
  scientific: "Cordyline fruticosa",
  type: "Evergreen ornamental shrub",
  height: "1–3 meters",
  lifespan: "10–20 years",
  water: "Medium",
  desc: "The Ti Plant is a colorful tropical ornamental plant known for its long leaves with pink or red edges. It is widely used in landscaping and indoor decoration. It grows well in warm climates and prefers indirect sunlight with regular watering. In many cultures, it is considered a symbol of good luck and protection.",
  wiki: "https://en.wikipedia.org/wiki/Cordyline_fruticosa",
  video: "https://www.youtube.com/watch?v=0a7VxgX8YpE",
  origin: "Southeast Asia and Pacific Islands"
},

{
  name: "Alstonia Tree (Devil Tree - Saptaparni)",
  scientific: "Alstonia scholaris",
  type: "Evergreen medicinal tree",
  height: "20–40 meters",
  lifespan: "50–80 years",
  water: "Medium",
  desc: "Alstonia scholaris is a fast-growing evergreen tree known for its glossy leaves and fragrant greenish-white flowers. It is commonly planted along roadsides and used in traditional medicine. The tree thrives in tropical climates with moderate watering.",
  wiki: "https://en.wikipedia.org/wiki/Alstonia_scholaris",
  video: "https://www.youtube.com/watch?v=Y5Yk1d7YwZk",
  origin: "South and Southeast Asia"
},

{
  name: "Jasmine (Mogra)",
  scientific: "Jasminum sambac",
  type: "Flowering evergreen shrub",
  height: "1–3 meters",
  lifespan: "10–15 years",
  water: "Medium",
  desc: "Jasminum sambac is a fragrant flowering plant producing small white blossoms widely used in perfumes, garlands, and religious offerings. It prefers warm climates, bright sunlight, and regular watering.",
  wiki: "https://en.wikipedia.org/wiki/Jasminum_sambac",
  video: "https://www.youtube.com/watch?v=1xPZkV7Q4F8",
  origin: "South and Southeast Asia"
},

{
  name: "Spider Lily",
  scientific: "Hymenocallis littoralis",
  type: "Flowering ornamental plant",
  height: "0.5–1 meter",
  lifespan: "5–10 years",
  water: "Medium",
  desc: "Spider Lily is a tropical flowering plant known for its narrow leaves and elegant white spider-like flowers. It grows best in warm climates with full to partial sunlight and moderate watering.",
  wiki: "https://en.wikipedia.org/wiki/Hymenocallis_littoralis",
  video: "https://www.youtube.com/watch?v=6mR8z7QY2Ak",
  origin: "Central and South America"
},

{
  name: "Fukien Tea Plant",
  scientific: "Carmona retusa (syn. Ehretia microphylla)",
  type: "Evergreen ornamental shrub",
  height: "1–4 meters",
  lifespan: "20–30 years",
  water: "Medium",
  desc: "The Fukien Tea Plant is a small evergreen shrub often cultivated as bonsai. It has glossy leaves, small white flowers, and red berries. It prefers bright light and moderate watering.",
  wiki: "https://en.wikipedia.org/wiki/Ehretia_microphylla",
  video: "https://www.youtube.com/watch?v=LfJ1pRdbZ1g",
  origin: "China and Southeast Asia"
},

{
  name: "Golden Dracaena",
  scientific: "Dracaena reflexa",
  type: "Evergreen ornamental plant",
  height: "1–4 meters",
  lifespan: "15–25 years",
  water: "Medium",
  desc: "Golden Dracaena is a decorative plant known for its yellow-green striped leaves. It is drought-tolerant and thrives in indirect sunlight with moderate watering.",
  wiki: "https://en.wikipedia.org/wiki/Dracaena_reflexa",
  video: "https://www.youtube.com/watch?v=Yw4K3Z8b3kQ",
  origin: "Madagascar and Indian Ocean islands"
},

{
  name: "Mango Tree",
  scientific: "Mangifera indica",
  type: "Fruit-bearing evergreen tree",
  height: "10–30 meters",
  lifespan: "100+ years",
  water: "Medium",
  desc: "Mangifera indica is a tropical fruit tree known for producing sweet mangoes. It requires full sunlight and moderate watering during early growth. Mature trees are drought tolerant.",
  wiki: "https://en.wikipedia.org/wiki/Mangifera_indica",
  video: "https://www.youtube.com/watch?v=6o5ZkL6fPzA",
  origin: "South Asia"
},

{
  name: "Lantana (Wild Sage)",
  scientific: "Lantana camara",
  type: "Flowering ornamental shrub",
  height: "1–2 meters",
  lifespan: "10–20 years",
  water: "Medium",
  desc: "Lantana camara is a hardy shrub producing colorful flower clusters. It attracts butterflies and grows well in warm climates with moderate watering.",
  wiki: "https://en.wikipedia.org/wiki/Lantana_camara",
  video: "https://www.youtube.com/watch?v=YvJ5xE1hR1I",
  origin: "Central and South America"
},

{
  name: "Song of India Plant",
  scientific: "Dracaena reflexa 'Song of India'",
  type: "Evergreen ornamental shrub",
  height: "1–3 meters",
  lifespan: "15–25 years",
  water: "Medium",
  desc: "Song of India is a variegated cultivar of Dracaena reflexa with yellow-edged leaves. It thrives in indirect sunlight and moderate watering.",
  wiki: "https://en.wikipedia.org/wiki/Dracaena_reflexa",
  video: "https://www.youtube.com/watch?v=U3Lk9K2u5eA",
  origin: "Madagascar"
},

{
  name: "Indian Almond Tree",
  scientific: "Terminalia catappa",
  type: "Deciduous shade tree",
  height: "15–25 meters",
  lifespan: "50–70 years",
  water: "Medium",
  desc: "Terminalia catappa is a large tropical tree known for its broad leaves that turn red before falling. It produces edible almond-like seeds and provides excellent shade.",
  wiki: "https://en.wikipedia.org/wiki/Terminalia_catappa",
  video: "https://www.youtube.com/watch?v=V6m8l3b6f0g",
  origin: "Tropical Asia"
},

{
  name: "Allamanda (Golden Trumpet)",
  scientific: "Allamanda cathartica",
  type: "Flowering evergreen ornamental vine/shrub",
  height: "2–6 meters",
  lifespan: "10–20 years",
  water: "Medium",
  desc: "Allamanda is a tropical ornamental plant known for its large yellow trumpet-shaped flowers. It thrives in full sunlight and warm climates. Regular watering promotes healthy flowering, but overwatering should be avoided.",
  wiki: "https://en.wikipedia.org/wiki/Allamanda_cathartica",
  video: "https://www.youtube.com/watch?v=1vV5QwTz8uI",
  origin: "South America"
},

{
  name: "Bauhinia (Orchid Tree)",
  scientific: "Bauhinia variegata",
  type: "Deciduous flowering tree",
  height: "6–12 meters",
  lifespan: "30–50 years",
  water: "Medium",
  desc: "Bauhinia variegata is an ornamental tree known for its orchid-like pink, purple, or white flowers. It blooms mainly in spring and prefers full sunlight in tropical and subtropical climates.",
  wiki: "https://en.wikipedia.org/wiki/Bauhinia_variegata",
  video: "https://www.youtube.com/watch?v=FJxQf4Zk1m8",
  origin: "South Asia"
},

{
  name: "Breadfruit Tree",
  scientific: "Artocarpus altilis",
  type: "Evergreen fruit-bearing tree",
  height: "12–20 meters",
  lifespan: "40–60 years",
  water: "High",
  desc: "Breadfruit is a tropical tree producing large starchy fruits used as a staple food. It grows best in warm, humid climates with adequate rainfall and fertile soil.",
  wiki: "https://en.wikipedia.org/wiki/Artocarpus_altilis",
  video: "https://www.youtube.com/watch?v=Qy8Pp5F3Y9E",
  origin: "Pacific Islands"
},

{
  name: "Fishtail Palm",
  scientific: "Caryota mitis",
  type: "Evergreen ornamental palm",
  height: "6–12 meters",
  lifespan: "20–30 years",
  water: "Medium",
  desc: "Caryota mitis is known for its distinctive fishtail-shaped leaflets. It grows in clusters and enhances landscaping with its tropical appearance.",
  wiki: "https://en.wikipedia.org/wiki/Caryota_mitis",
  video: "https://www.youtube.com/watch?v=ZzYkq5oV3kE",
  origin: "Southeast Asia"
},

{
  name: "Copperleaf Plant",
  scientific: "Acalypha wilkesiana",
  type: "Evergreen ornamental shrub",
  height: "1–3 meters",
  lifespan: "15–25 years",
  water: "Medium",
  desc: "Copperleaf is valued for its colorful foliage in shades of red, bronze, and pink. It thrives in warm climates with good sunlight and moderate watering.",
  wiki: "https://en.wikipedia.org/wiki/Acalypha_wilkesiana",
  video: "https://www.youtube.com/watch?v=8l9gM4Q2hL0",
  origin: "Pacific Islands"
},

{
  name: "Garden Croton",
  scientific: "Codiaeum variegatum",
  type: "Evergreen ornamental shrub",
  height: "1–3 meters",
  lifespan: "15–25 years",
  water: "Medium",
  desc: "Garden Croton is known for its vividly colored leaves in yellow, red, orange, and green. It prefers bright sunlight and well-drained soil.",
  wiki: "https://en.wikipedia.org/wiki/Codiaeum_variegatum",
  video: "https://www.youtube.com/watch?v=1Yx2qX9p3Q4",
  origin: "Southeast Asia and Pacific Islands"
},

{
  name: "Pinwheel Flower (Crape Jasmine)",
  scientific: "Tabernaemontana divaricata",
  type: "Flowering evergreen shrub",
  height: "1–2 meters",
  lifespan: "10–15 years",
  water: "Medium",
  desc: "Pinwheel Flower produces elegant white spiral-shaped flowers and glossy leaves. It blooms throughout the year in warm climates.",
  wiki: "https://en.wikipedia.org/wiki/Tabernaemontana_divaricata",
  video: "https://www.youtube.com/watch?v=3v4t5R8u1oI",
  origin: "South Asia"
},

{
  name: "Blushing Philodendron",
  scientific: "Philodendron erubescens",
  type: "Climbing evergreen ornamental plant",
  height: "2–4 meters (with support)",
  lifespan: "15–20 years",
  water: "Medium",
  desc: "Philodendron erubescens is a tropical climbing plant with glossy heart-shaped leaves and reddish stems. It thrives in indirect light and moderate watering.",
  wiki: "https://en.wikipedia.org/wiki/Philodendron_erubescens",
  video: "https://www.youtube.com/watch?v=KXwZ6L9g0zM",
  origin: "Colombia"
},

{
  name: "Iboga Plant",
  scientific: "Tabernanthe iboga",
  type: "Evergreen medicinal shrub",
  height: "1–2 meters",
  lifespan: "20–40 years",
  water: "Medium",
  desc: "Tabernanthe iboga is a tropical shrub known for its cultural and medicinal significance. It grows best in warm, humid climates.",
  wiki: "https://en.wikipedia.org/wiki/Tabernanthe_iboga",
  video: "https://www.youtube.com/watch?v=R4kY2b8x5kU",
  origin: "Central Africa"
},

{
  name: "Blue Porterweed",
  scientific: "Stachytarpheta jamaicensis",
  type: "Flowering perennial herb/shrub",
  height: "0.5–1.5 meters",
  lifespan: "5–10 years",
  water: "Medium",
  desc: "Blue Porterweed produces long spikes of blue or violet flowers and attracts butterflies. It grows well in full sunlight with moderate watering.",
  wiki: "https://en.wikipedia.org/wiki/Stachytarpheta_jamaicensis",
  video: "https://www.youtube.com/watch?v=8z1mV5y3kLQ",
  origin: "Tropical Americas"
},

{
  name: "Amaranth",
  scientific: "Amaranthus spp.",
  type: "Herbaceous flowering plant",
  height: "0.5–2 meters",
  lifespan: "1 year (annual)",
  water: "Medium",
  desc: "Amaranth is a fast-growing leafy plant cultivated as both a vegetable and grain crop. It thrives in warm climates and nutrient-rich soil.",
  wiki: "https://en.wikipedia.org/wiki/Amaranth",
  video: "https://www.youtube.com/watch?v=2bT1g7o5m9I",
  origin: "Central and South America"
},

{
  name: "Arrowhead Plant",
  scientific: "Syngonium podophyllum",
  type: "Evergreen ornamental climber",
  height: "1–3 meters (with support)",
  lifespan: "10–20 years",
  water: "Medium",
  desc: "Arrowhead Plant is a popular indoor plant known for its arrow-shaped leaves. It thrives in indirect sunlight and humid conditions.",
  wiki: "https://en.wikipedia.org/wiki/Syngonium_podophyllum",
  video: "https://www.youtube.com/watch?v=4o6pF2g9sZQ",
  origin: "Central and South America"
},

{
  name: "Bauhinia picta",
  scientific: "Bauhinia picta",
  type: "Flowering ornamental tree",
  height: "6–10 meters",
  lifespan: "30–50 years",
  water: "Medium",
  desc: "Bauhinia picta is an ornamental tree known for its pink to purple flowers and distinctive bilobed leaves.",
  wiki: "https://en.wikipedia.org/wiki/Bauhinia",
  video: "https://www.youtube.com/watch?v=7yP9t6q4l8M",
  origin: "South Asia"
},

{
  name: "Brachychiton (Flame Tree)",
  scientific: "Brachychiton acerifolius",
  type: "Deciduous ornamental tree",
  height: "10–20 meters",
  lifespan: "50–100 years",
  water: "Medium",
  desc: "The Flame Tree is famous for its brilliant red flowers that bloom before leaf growth. It is drought tolerant once established.",
  wiki: "https://en.wikipedia.org/wiki/Brachychiton_acerifolius",
  video: "https://www.youtube.com/watch?v=V6x9h1k2p7A",
  origin: "Australia"
},

{
  name: "Hairy Fig",
  scientific: "Ficus hispida",
  type: "Small evergreen tree",
  height: "5–10 meters",
  lifespan: "30–60 years",
  water: "Medium",
  desc: "Hairy Fig is a tropical tree with rough-textured leaves and small edible fruits. It supports birds and wildlife.",
  wiki: "https://en.wikipedia.org/wiki/Ficus_hispida",
  video: "https://www.youtube.com/watch?v=Q1x7mP5z9lU",
  origin: "South and Southeast Asia"
},

{
  name: "Hydriastele selebica",
  scientific: "Hydriastele selebica",
  type: "Evergreen palm",
  height: "5–15 meters",
  lifespan: "25–40 years",
  water: "Medium",
  desc: "Hydriastele selebica is a tropical palm with slender trunks and graceful fronds, commonly used in landscaping.",
  wiki: "https://en.wikipedia.org/wiki/Hydriastele",
  video: "https://www.youtube.com/watch?v=3x6pL9t2r8M",
  origin: "Indonesia"
},

{
  name: "Japanese Laurel",
  scientific: "Aucuba japonica",
  type: "Evergreen ornamental shrub",
  height: "1–3 meters",
  lifespan: "20–30 years",
  water: "Medium",
  desc: "Japanese Laurel is known for its glossy green leaves often speckled with yellow. It grows well in shaded areas.",
  wiki: "https://en.wikipedia.org/wiki/Aucuba_japonica",
  video: "https://www.youtube.com/watch?v=9f2mP6k1q7L",
  origin: "Japan"
},

{
  name: "Kapok Tree",
  scientific: "Ceiba pentandra",
  type: "Large deciduous tree",
  height: "30–60 meters",
  lifespan: "60–100 years",
  water: "Medium",
  desc: "Kapok Tree is a massive tropical tree known for its cotton-like fiber used in pillows and cushions.",
  wiki: "https://en.wikipedia.org/wiki/Ceiba_pentandra",
  video: "https://www.youtube.com/watch?v=4n7kT2m9p6Q",
  origin: "Central and South America"
},

{
  name: "Leucocasia gigantea",
  scientific: "Leucocasia gigantea",
  type: "Tropical herbaceous plant",
  height: "1.5–3 meters",
  lifespan: "10–15 years",
  water: "High",
  desc: "Leucocasia gigantea is known for its large elephant-ear shaped leaves. It thrives in moist soil and warm climates.",
  wiki: "https://en.wikipedia.org/wiki/Leucocasia_gigantea",
  video: "https://www.youtube.com/watch?v=5r8kP2l7m9U",
  origin: "Southeast Asia"
},

{
  name: "Sabal mexicana",
  scientific: "Sabal mexicana",
  type: "Evergreen palm tree",
  height: "10–20 meters",
  lifespan: "50–100 years",
  water: "Medium",
  desc: "Sabal mexicana, also known as Mexican Fan Palm, is a hardy palm with large fan-shaped leaves and drought tolerance.",
  wiki: "https://en.wikipedia.org/wiki/Sabal_mexicana",
  video: "https://www.youtube.com/watch?v=2l9kP5m7r8T",
  origin: "Mexico"
},

{
  name: "Alternanthera",
  scientific: "Alternanthera ficoidea",
  type: "Tropical perennial herb",
  height: "0.2–0.5 meters",
  lifespan: "2–5 years",
  water: "Medium",
  desc: "Alternanthera is a colorful ornamental plant valued for its vibrant red, purple, and yellow foliage. It is commonly used in garden borders and decorative landscaping designs. The plant grows best in warm climates with moderate watering and good sunlight.",
  wiki: "https://en.wikipedia.org/wiki/Alternanthera",
  video: "https://www.youtube.com/watch?v=a6UkTwlnO6M",
  origin: "Central and South America"
},

{
  name: "Areca Palm",
  scientific: "Dypsis lutescens",
  type: "Evergreen ornamental palm",
  height: "6–12 meters",
  lifespan: "10–20 years",
  water: "Medium",
  desc: "Areca Palm is a popular indoor and outdoor ornamental palm known for its feathery arching fronds. It is widely grown as an air-purifying houseplant and thrives in bright indirect sunlight with moderate watering.",
  wiki: "https://en.wikipedia.org/wiki/Dypsis_lutescens",
  video: "https://www.youtube.com/watch?v=hh1RO__IBCM",
  origin: "Madagascar"
},

{
  name: "Bamboo",
  scientific: "Bambusoideae",
  type: "Evergreen perennial grass",
  height: "1–30 meters",
  lifespan: "20–100 years",
  water: "Medium",
  desc: "Bamboo is one of the fastest-growing plants in the world. It belongs to the grass family and is widely used for construction, furniture, paper production, and ornamental landscaping.",
  wiki: "https://en.wikipedia.org/wiki/Bamboo",
  video: "https://www.youtube.com/watch?v=XiX6c-wXqDw",
  origin: "Asia"
},

{
  name: "California Bay",
  scientific: "Umbellularia californica",
  type: "Evergreen tree",
  height: "10–30 meters",
  lifespan: "50–150 years",
  water: "Medium",
  desc: "California Bay is an aromatic evergreen tree known for its fragrant leaves used as a culinary spice. It grows naturally in coastal forests and prefers moderate watering.",
  wiki: "https://en.wikipedia.org/wiki/Umbellularia",
  video: "https://www.youtube.com/watch?v=DiEmBnjj1OU",
  origin: "Western United States"
},

{
  name: "Chinese Ixora",
  scientific: "Ixora chinensis",
  type: "Evergreen flowering shrub",
  height: "1–2 meters",
  lifespan: "5–10 years",
  water: "Medium",
  desc: "Chinese Ixora produces clusters of bright red, pink, or orange flowers. It thrives in tropical climates with full sunlight and moderate watering.",
  wiki: "https://en.wikipedia.org/wiki/Ixora_chinensis",
  video: "https://www.youtube.com/watch?v=oM-5yKlauzQ",
  origin: "China"
},

{
  name: "Firebush",
  scientific: "Hamelia patens",
  type: "Evergreen flowering shrub",
  height: "1–3 meters",
  lifespan: "5–15 years",
  water: "Medium",
  desc: "Firebush is a tropical shrub known for its bright red-orange tubular flowers that attract butterflies and hummingbirds. It thrives in warm climates and full sunlight.",
  wiki: "https://en.wikipedia.org/wiki/Hamelia_patens",
  video: "https://www.youtube.com/watch?v=1uNntqleoFI",
  origin: "Tropical Americas"
},

{
  name: "Heliconia",
  scientific: "Heliconia bihai",
  type: "Tropical perennial plant",
  height: "1–4 meters",
  lifespan: "5–10 years",
  water: "High",
  desc: "Heliconia bihai is known for its striking colorful bracts often called lobster claws. It thrives in warm, humid climates and requires regular watering.",
  wiki: "https://en.wikipedia.org/wiki/Heliconia_bihai",
  video: "https://www.youtube.com/watch?v=Zttr-_IDFuI",
  origin: "Caribbean and South America"
},

{
  name: "Madagascar Periwinkle",
  scientific: "Catharanthus roseus",
  type: "Evergreen flowering subshrub",
  height: "0.3–1 meter",
  lifespan: "2–5 years",
  water: "Medium",
  desc: "Madagascar Periwinkle produces pink or white flowers and is valued for its medicinal properties. It grows well in warm climates with moderate watering.",
  wiki: "https://en.wikipedia.org/wiki/Catharanthus_roseus",
  video: "https://www.youtube.com/watch?v=N6tqmUtlw0s",
  origin: "Madagascar"
},

{
  name: "Shell Ginger",
  scientific: "Alpinia zerumbet",
  type: "Tropical perennial plant",
  height: "2–3 meters",
  lifespan: "5–10 years",
  water: "Medium",
  desc: "Shell Ginger is an ornamental plant with fragrant shell-like pink flowers and lush green leaves. It grows well in tropical climates with moderate watering.",
  wiki: "https://en.wikipedia.org/wiki/Alpinia_zerumbet",
  video: "https://www.youtube.com/watch?v=5JITgSCpXVo",
  origin: "East Asia"
},

{
  name: "Young Mulberry",
  scientific: "Morus alba",
  type: "Deciduous fruit tree",
  height: "10–20 meters",
  lifespan: "25–50 years",
  water: "Medium",
  desc: "Morus alba is a fast-growing tree known for its sweet edible fruits. It is widely cultivated and also used in sericulture for feeding silkworms.",
  wiki: "https://en.wikipedia.org/wiki/Morus_alba",
  video: "https://www.youtube.com/watch?v=Xhbgb-2sbx8",
  origin: "China"
}
];

// =======================
// 🌱 Quotes
// =======================
const quotes = [
  { text: "🌱 The clearest way into the Universe is through a forest wilderness.", author: "John Muir" },
  { text: "🌱 Plants give us oxygen for the lungs and for the soul.", author: "Linda Solegato" },
  { text: "🌱 To plant a garden is to believe in tomorrow.", author: "Audrey Hepburn" },
  { text: "🌱 A garden is a friend you can visit anytime.", author: "Gertrude Jekyll" },
  { text: "🌱 The love of gardening is a seed once sown that never dies.", author: "Lucy Larcom" },
  { text: "🌱 Nature does not hurry, yet everything is accomplished.", author: "Lao Tzu" },
  { text: "🌱 Look deep into nature, and then you will understand everything better.", author: "Albert Einstein" },
  { text: "🌱 He who plants a tree plants hope.", author: "Greek proverb" },
  { text: "🌱 A society grows great when old men plant trees whose shade they know they shall never sit in.", author: "Unknown" },
  { text: "🌱 Even the tiniest seed can grow into a mighty tree.", author: "Gerard De Nerval" },
  { text: "🌱 Nature always wears the colors of the spirit.", author: "Ralph Waldo Emerson" },
  { text: "🌱 Those who contemplate the beauty of the earth find reserves of strength that will endure as long as life lasts.", author: "Rachel Carson" },
  { text: "🌱 A tree is known by its fruit; a man by his deeds.", author: "Edwin Curran" },
  { text: "🌱 Let your life lightly dance on the edges of time like dew on the tip of a leaf.", author: "Unknown" },
  { text: "🌱 Where flowers bloom so does hope.", author: "Lady Bird Johnson" },
  { text: "🌱 The creation of a thousand forests is in one acorn.", author: "Unknown" },
  { text: "🌱 The earth laughs in flowers.", author: "Ralph Waldo Emerson" },
  { text: "🌱 In every walk with nature one receives far more than he seeks.", author: "John Muir" },
  { text: "🌱 The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese proverb" },
  { text: "🌱 From tiny seeds grow mighty trees.", author: "Unknown" },
  { text: "🌱 If you have a garden and a library, you have everything you need.", author: "Marcus Tullius Cicero" },
  { text: "🌱 It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin" },
  { text: "🌱 God has cared for these trees, saved them from drought, disease, avalanches, and a thousand tempests.", author: "Saint Basil" },
  { text: "🌱 Just living is not enough… one must have sunshine, freedom, and a little flower.", author: "Hans Christian Andersen" },
  { text: "🌱 Nature is not a place to visit. It is home.", author: "Gary Snyder" },
  { text: "🌱 Every flower is a soul blossoming in nature.", author: "Saint Francis de Sales" },
  { text: "🌱 The earth has music for those who listen.", author: "Unknown" },
  { text: "🌱 Life begins the day you start a garden.", author: "Unknown" },
  { text: "🌱 Trees are poems that the earth writes upon the sky.", author: "Khalil Gibran" }

  // Add more quotes here
];

// =======================
// Create Plant Cards Page (NEW PAGE)
// =======================
function createPlantCards() {
  const container = document.getElementById("plantsContainer");
  if (!container) return; // prevents clash on other pages

  plants.forEach(plant => {

    const card = document.createElement("div");
    card.classList.add("plant-card");

    const img = document.createElement("img");

    // Smart image fallback (jpg → png → jpeg)
    const extensions = ["jpg", "png", "jpeg"];
    let index = 0;

    function tryNextImage() {
      if (index >= extensions.length) return;
      img.src = `images/${plant.name}.${extensions[index]}`;
      index++;
    }

    img.onerror = tryNextImage;
    tryNextImage();

    card.innerHTML += `
      <h2>${plant.name}</h2>
      <p><em>${plant.scientific}</em></p>
      <p><strong>Type:</strong> ${plant.type}</p>
      <p><strong>Height:</strong> ${plant.height}</p>
      <p><strong>Lifespan:</strong> ${plant.lifespan}</p>
      <p><strong>Water Needs:</strong> ${plant.water}</p>
      <p>${plant.desc}</p>
      <p><strong>Origin:</strong> ${plant.origin}</p>
      <p>
        <a href="${plant.wiki}" target="_blank">Wikipedia</a>
      </p>
    `;

    card.prepend(img);
    container.appendChild(card);
  });
}

// =======================
// Search by text
// =======================
function searchPlant() {
  const termEl = document.getElementById("searchBar");
  if (!termEl) return;

  const term = termEl.value.toLowerCase().trim();
  const result = plants.find(p => p.name.toLowerCase().includes(term));
  displayResult(result);
}

// =======================
// Search by dropdown
// =======================
function dropdownSearch(plantName) {
  if (!plantName) return;
  const result = plants.find(p => p.name === plantName);

  const cardEl = document.querySelector(`.card[data-name="${plantName}"]`);
  if (cardEl) cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

  displayResult(result);
}

// =======================
// Display plant in modal
// =======================
function displayResult(plant) {
  const modal = document.getElementById("plantModal");
  const body = document.getElementById("modalBody");

  if (!modal || !body) return;

  body.innerHTML = "";

  if (!plant) {
    body.innerHTML = "<p>No plant found.</p>";
    modal.style.display = "block";
    return;
  }

  const card = document.createElement("div");

  card.innerHTML = `
    <img src="images/${plant.name}.jpg" alt="${plant.name}"
         onerror="this.onerror=null; this.src='images/${plant.name}.png'; this.onerror=null; this.src='images/${plant.name}.jpeg';">
    <h2>${plant.name}</h2>
    <p><em>${plant.scientific}</em></p>
    <p><strong>Type:</strong> ${plant.type}</p>
    <p><strong>Height:</strong> ${plant.height}</p>
    <p><strong>Lifespan:</strong> ${plant.lifespan}</p>
    <p><strong>Water Needs:</strong> ${plant.water}</p>
    <p>${plant.desc}</p>
    <p><strong>Origin:</strong> ${plant.origin}</p>
    <p>
      <a href="${plant.wiki}" target="_blank">Wikipedia</a>
    </p>
  `;

  body.appendChild(card);
  modal.style.display = "block";
}

// =======================
// Close modal
// =======================
function closeModal() {
  const modal = document.getElementById("plantModal");
  if (modal) modal.style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("plantModal");
  if (modal && event.target === modal) modal.style.display = "none";
};

// =======================
// Show random quote
// =======================
function newQuote() {
  if (!quotes) return;

  const q = quotes[Math.floor(Math.random() * quotes.length)];

  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");

  if (quoteEl) quoteEl.textContent = `"${q.text}"`;
  if (authorEl) authorEl.textContent = `- ${q.author}`;
}

// =======================
// Populate custom dropdown
// =======================
function populateDropdown() {
  const dropdownSelected = document.querySelector(".dropdown-selected");
  const dropdownOptions = document.getElementById("dropdownOptions");

  if (!dropdownSelected || !dropdownOptions) return;

  dropdownOptions.innerHTML = "";

  plants.forEach(p => {
    const opt = document.createElement("div");
    opt.className = "option";
    opt.textContent = p.name;

    opt.onclick = function() {
      dropdownSelected.textContent = p.name;
      dropdownOptions.style.display = "none";
      dropdownSearch(p.name);
    };

    dropdownOptions.appendChild(opt);
  });

  dropdownSelected.onclick = function() {
    dropdownOptions.style.display =
      dropdownOptions.style.display === "flex" ? "none" : "flex";
  };
}

// =======================
// On page load (SAFE VERSION)
// =======================
document.addEventListener("DOMContentLoaded", function() {
  newQuote();
  populateDropdown();
  createPlantCards(); // 👈 THIS loads plants page automatically
});

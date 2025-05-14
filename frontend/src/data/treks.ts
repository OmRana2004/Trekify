import { Trek } from "../types/Trek";
import Kedartal from "../assets/KedartalTrek/KedarTal.jpg";
import Sattal from "../assets/SattalTreak/SatTal.webp";
import MtSrikanthBaseCamp from "../assets/Srikanth/Srikanth-Base-Camp.jpg";
import TunganathChandrashila from "../assets/TunganathChandrashilaTrek/TunganathChandrashila.webp";
import KedartalImage1 from "../assets/KedartalTrek/KedarTal-1.jpg";
import KedartalImage2 from "../assets/KedartalTrek/KedarTal-2.webp";
import KedartalImage3 from "../assets/KedartalTrek/KedarTal-3.jpg";
import KedartalImage4 from "../assets/KedartalTrek/KedarTal-4.jpg";
import SattalImage1 from "../assets/SattalTreak/SatTal-1.jpg";
import SattalImage2 from "../assets/SattalTreak/SatTal-2.webp";
import SattalImage3 from "../assets/SattalTreak/SatTal-3.jpg";
import SattalImage4 from "../assets/SattalTreak/SatTal-4.jpeg";
import SrikanthImage1 from "../assets/Srikanth/Srikanth-1.jpg"
import SrikanthImage2 from "../assets/Srikanth/Srikanth-2.jpg"
import SrikanthImage3 from "../assets/Srikanth/Srikanth-3.jpg"
import SrikanthImage4 from "../assets/Srikanth/Srikanth-4.jpg"
import TunganathImage1 from "../assets/TunganathChandrashilaTrek/tungnath-1.webp";
import TunganathImage2 from "../assets/TunganathChandrashilaTrek/tungnath-2.webp";
import TunganathImage3 from "../assets/TunganathChandrashilaTrek/tungnath-3.jpeg";
import TunganathImage4 from "../assets/TunganathChandrashilaTrek/tungnath-4.jpeg";
import GaumukhTapovan from "../assets/GaumukhTapovan/GaumukhTapovan.jpg";
import GaumukhTapovanImage1 from "../assets/GaumukhTapovan/GaumukhTapovan-1.webp";
import GaumukhTapovanImage2 from "../assets/GaumukhTapovan/GaumukhTapovan-2.webp";   
import GaumukhTapovanImage3 from "../assets/GaumukhTapovan/GaumukhTapovan-3.webp";
import GaumukhTapovanImage4 from "../assets/GaumukhTapovan/GaumukhTapovan-4.webp";
// Import PDFs
import KedarTalItinerary from "../assets/KedartalTrek/KedarTal-Itinerary.pdf";
import SatTalItinarary from "../assets/SattalTreak/SatTal-Itinerary.pdf";
import SrikanthBaseCampItinarary from "../assets/Srikanth/SrikanthBaseCamp-Itinarary.pdf";
import TunganathChandrashilaItinerary from "../assets/TunganathChandrashilaTrek/TunganathChandrashila-Itinerary.pdf"; 
import GaumukhTapovanItinerary from "../assets/GaumukhTapovan/GaumukhTapovan-Itinerary.pdf";

export const treks: Trek[] = [
  {
    id: "KEDARTAL",
    name: "Kedartal Trek",
    location: "Uttarakhand",
    difficulty: "Moderate",
    duration: "8 Days",
    price: 17500,
    image: Kedartal,
    season: "Winter",
    description: "Kedartal is a high-altitude trek from Gangotri, reaching 4,650 meters over 17 km. Physically and mentally demanding, it offers stunning views of Thalay Sagar, Jogin massif, Bhrigupanth, and Manda. Spread across 5 days, it's best suited for experienced trekkers.",
    itinerary: [
      "Day 1 :Arrival at Gangotri 3000m",
      "Day 2 :Acclimatization Day at Gangotri",
      "Day 3 :GANGOTRI TO BHOJ KHARK (5 to 6hr)",
      "Day 4 :BHOJ KHARAK TO KEDARKHARAK (4 to 5hr)",
      "Day 5 :KEDAR KHARAK TO KEDAR TAAL (4 to 5hr )",
      "Day 6 :KEDAR TAAL TO BHOJ KHARAK (5 to 6hrs)",
      "Day 7 :BHOJKHARAK TO GANGOTRI (6 to 7hrs)",
      "Day 8 :GANGOTRI TO DEHRADUN (9-11hrs)"
    ],
    inclusions: [
      "All meals Gangotri to Gangotri",
      "services of a cook and kitchen staff",
      "Sleeping bag tents Mattresses Kichen tent Dining tent toilet tent",
      "porters carrying common trek equipment",
      "services of experienced trek leader",
      "Forest entry fees"
    ],
    gearList: [
      "Backpack (50-60L)",
      "Warm jacket and thermals",
      "Trekking shoes",
      "Gloves and beanie",
      "Sunglasses and sunscreen"
    ],
    gallery: [
      KedartalImage1,
      KedartalImage2,
      KedartalImage3,
      KedartalImage4
    ],
    itineraryPdf: KedarTalItinerary,
  },
  {
    id: "SATTAL",
    name: "Sattal Trek",
    location: "Uttarakhand",
    difficulty: "Easy",
    duration: "3 Nights 4 Days",
    price: 8000,
    image: Sattal,
    season: "All Year",
    description: "The Sattal Trek offers a perfect blend of natural beauty and cultural experience in Uttarakhand. Starting from the charming village of Dharali, known for its ancient temples and traditions, the trail winds through scenic landscapes and glimpses of local life.",
    itinerary: [
      "Day 1: Pickup to you from UTTARKASHI Drive to Dharali l  - 70 km (2/3 Hours) (2650 Meter) overnight stay Hotel",
      "Day 2: Dharali to sattal trek back to DHARALI",
      "Day 3: Explore full day harshil valley mukhba Village enjoy your holiday here - this is a small heaven in the earth - this is best Please near Ganga River",
      "Day 4: After breakfast drive to Dharali via Uttarkash - (72 km). 2/3Hours) reach afternoon",
    ],
    inclusions: [
      "Meals and snacks",
      "High-altitude tents and equipment",
      "Expert mountaineer support",
      "Emergency medical kit"
    ],
    gearList: [
      "Backpack with rain cover",
      "High-ankle trekking boots",
      "Windproof jacket",
      "Trekking poles",
      "Headlamp"
    ],
    gallery: [
      SattalImage1,
      SattalImage2,
      SattalImage3,
      SattalImage4,
    ],
    itineraryPdf: SatTalItinarary,
  },
  {
    id: "MT SRIKANTH BASE CAMP",
    name: "Mt Srikanth Base Camp Trek",
    location: "Uttarakhand",
    difficulty: "Easy",
    duration: "5 Days",
    price: 12500,
    image: MtSrikanthBaseCamp,
    season: "Winter/Summer",
    description: "It is our constant endeavor to bring to adventure lovers new trails to explore. Mt Srikanth Base Camp trek is one such trail. It starts from the picturesque village of Dharali in Harsil Valley of Uttarkashi District, Uttarakhand, India. The maximum altitude reached is 4533m. It is a 13km trek that takes a trekker along beautiful forests of pine, cedar and alpine meadows. The trail is laden with various species of flowers along the way including the famous Brahma Kamal (white lotus).",

    itinerary: [
      "Day 1: Arrival at Harsil/Dharali",
      "Day 2: 7km trek to Jhinda Bugyal",
      "Day 3: :6km to Base Camp and back to camp site",
      "Day 4: Back to Harsil / Dharali",
      "Day 5: After breakfast, check out of the hotel."
    ],
    inclusions: [
      "2 Nights accommodation in Harsil/Dharali.",
      "Professional guide support",
      "Trek permits",
      "All meals during the trek."
    ],
    gearList: [
      "Woolen cap",
      "Thermal innerwear",
      "Snow gaiters (optional)",
      "Trekking socks (2-3 pairs)",
      "Waterproof gloves"
    ],
    gallery: [
      SrikanthImage1,
      SrikanthImage2,
      SrikanthImage3,
      SrikanthImage4
    ],
    itineraryPdf: SrikanthBaseCampItinarary,
  },
  {
    id: "TUNGANATH-CHANDRASHILA",
    name: "Tunganath-Chandrashila Trek",
    location: "Uttarakhand",
    difficulty: "Hard",
    duration: "3 Days",
    price: 12500,
    image: TunganathChandrashila,
    season: "Winter/Summer",
    description: "Tunganath is one of the 5 Kedars of Lord Shiva and is believed to be a 1000 years old.Perched at an altitude of 3680m above sea level, this is also the highest Shiva temple in the world.Legend has it that the Pandavas having slain their own kin in the great battle of Kurukshetra, were advised to ask forgiveness from Lord Shiva. however, Shiva was quite displeased with the Pandavas and in order to high from the Pandavas, disguised himself in the form of a bull and went into hiding underground at GuptKashi. But later, Lord Shiva appeared in the form of the bull’s body parts at 5 different places known as the Panch Kedars. Tunganath is the place where the hands had appeared. The Pandavas then built temples at each of these places to worship Shiva. The other 4 Kedars are the Kedarnath where his hump had appeared, Rudranath where his head had appeared, Madhyamaheshwar where his navel had appeared and Kapleshwar where the locks of his hair had appeared.",

    itinerary: [
      "Day 1: Arrival at Harsil/Dharali",
      "Day 2: 7km trek to Jhinda Bugyal",
      "Day 3: :6km to Base Camp and back to camp site",
      "Day 4: Back to Harsil / Dharali",
      "Day 5: After breakfast, check out of the hotel."
    ],
    inclusions: [
      "2 Nights accommodation in Harsil/Dharali.",
      "Professional guide support",
      "Trek permits",
      "All meals during the trek."
    ],
    gearList: [
      "Woolen cap",
      "Thermal innerwear",
      "Snow gaiters (optional)",
      "Trekking socks (2-3 pairs)",
      "Waterproof gloves"
    ],
    gallery: [
      TunganathImage1,
      TunganathImage2,
      TunganathImage3,
      TunganathImage4
    ],
    itineraryPdf: TunganathChandrashilaItinerary,
  },
  {
    id: "GAUMUKH TAPOVAN",
    name: "Gaumukh Tapovan Trek",
    location: "Uttarakhand",
    difficulty: "Easy",
    duration: "6 Days",
    price: 17500,
    image: GaumukhTapovan,
    season: "Winter/Summer",
    description: " The Gaumukh Tapovan Trek is one of the best-selling treks in Gangotri, Uttarakhand, and a true paradise for both spiritual seekers and adventure lovers. Every year, countless trekkers embark on this sacred journey to experience the breathtaking beauty and powerful spiritual energy of the region. Alpine Hikers is proud to offer a memorable and enriching experience on this iconic trail. Gaumukh, the source of the holy River Ganga, holds deep religious significance, as the Ganga is considered the most revered river in India. Just a few kilometers ahead lies Tapovan, a serene alpine meadow known for its tranquil atmosphere and spiritual vibrance. This sacred land is home to meditating sages and serves as the base camp of Mt. Shivling (6,543 m) — a peak held in high reverence by the locals. The entire trail is charged with spiritual vibrations, drawing many trekkers back time and again to reconnect with the divinity and serenity of the Himalayas. The Legend of Gaumukh & the Descent of Ganga According to Hindu mythology, the story of Ganga’s descent begins with King Sagar, who wished to perform the Ashwamedha Yagna to proclaim his dominance over the three worlds. Threatened by this, Lord Indra abducted the ceremonial horse and tied it near the ashram of Sage Kapila. Deep in meditation, the sage was unaware of this incident. When King Sagar’s sons discovered the horse, they mistook Sage Kapila for the thief and insulted him. In his anger, the sage burned them to ashes. King Sagar, devastated by the loss of his sons, prayed to Lord Brahma for a solution. Brahma advised him to bring Ganga down from the heavens to purify the ashes of his sons. However, Ganga was furious at the thought of descending to Earth, as she feared her force would destroy it. To appease her, Lord Shiva agreed to catch her in his matted locks and release her gently. Thus, Ganga descended to Earth, and the place where she first touched the ground is known as Gaumukh. The trek to Gaumukh Tapovan is not just a physical journey but also a spiritual pilgrimage, allowing trekkers to connect with the divine energy of the Himalayas and experience the beauty of nature in its purest form.",
    

    itinerary: [
      "Day 1: ARRIVAL AT GANGOTRI (3000M)",
      "Day 2: ACCLIMATIZATION DAY AT GANGOTRI",
      "Day 3: GANGOTRI TO BHOJBASA (3600M))",
      "Day 4: BHOJBASA TO TAPOVAN(4400M)",
      "Day 5: TAPOVAN TO CHIRBASA(3000M)",
      "Day 6: CHIRBASA TO GANGOTRI(3000M)",
    ],
    inclusions: [
      "Sleeping tents, mattresses, sleeping bags, kitchen tent, dining tent, toilet tent.",
      "Professional guide support",
      "Trek permits",
      "All meals during the trek."
    ],
    gearList: [
      "Woolen cap",
      "Thermal innerwear",
      "Snow gaiters (optional)",
      "Trekking socks (2-3 pairs)",
      "Waterproof gloves"
    ],
    gallery: [
      GaumukhTapovanImage1,
      GaumukhTapovanImage2,
      GaumukhTapovanImage3,
      GaumukhTapovanImage4
    ],
    itineraryPdf: GaumukhTapovanItinerary,
  },
  {
    id: "MT SRIKANTH BASE CAMP",
    name: "Mt Srikanth Base Camp Trek",
    location: "Uttarakhand",
    difficulty: "Easy",
    duration: "5 Days",
    price: 12500,
    image: MtSrikanthBaseCamp,
    season: "Winter/Summer",
    description: "It is our constant endeavor to bring to adventure lovers new trails to explore. Mt Srikanth Base Camp trek is one such trail. It starts from the picturesque village of Dharali in Harsil Valley of Uttarkashi District, Uttarakhand, India. The maximum altitude reached is 4533m. It is a 13km trek that takes a trekker along beautiful forests of pine, cedar and alpine meadows. The trail is laden with various species of flowers along the way including the famous Brahma Kamal (white lotus).",

    itinerary: [
      "Day 1: Arrival at Harsil/Dharali",
      "Day 2: 7km trek to Jhinda Bugyal",
      "Day 3: :6km to Base Camp and back to camp site",
      "Day 4: Back to Harsil / Dharali",
      "Day 5: After breakfast, check out of the hotel."
    ],
    inclusions: [
      "2 Nights accommodation in Harsil/Dharali.",
      "Professional guide support",
      "Trek permits",
      "All meals during the trek."
    ],
    gearList: [
      "Woolen cap",
      "Thermal innerwear",
      "Snow gaiters (optional)",
      "Trekking socks (2-3 pairs)",
      "Waterproof gloves"
    ],
    gallery: [
      SrikanthImage1,
      SrikanthImage2,
      SrikanthImage3,
      SrikanthImage4
    ],
    itineraryPdf: SrikanthBaseCampItinarary,
  },
  {
    id: "MT SRIKANTH BASE CAMP",
    name: "Mt Srikanth Base Camp Trek",
    location: "Uttarakhand",
    difficulty: "Easy",
    duration: "5 Days",
    price: 12500,
    image: MtSrikanthBaseCamp,
    season: "Winter/Summer",
    description: "It is our constant endeavor to bring to adventure lovers new trails to explore. Mt Srikanth Base Camp trek is one such trail. It starts from the picturesque village of Dharali in Harsil Valley of Uttarkashi District, Uttarakhand, India. The maximum altitude reached is 4533m. It is a 13km trek that takes a trekker along beautiful forests of pine, cedar and alpine meadows. The trail is laden with various species of flowers along the way including the famous Brahma Kamal (white lotus).",

    itinerary: [
      "Day 1: Arrival at Harsil/Dharali",
      "Day 2: 7km trek to Jhinda Bugyal",
      "Day 3: :6km to Base Camp and back to camp site",
      "Day 4: Back to Harsil / Dharali",
      "Day 5: After breakfast, check out of the hotel."
    ],
    inclusions: [
      "2 Nights accommodation in Harsil/Dharali.",
      "Professional guide support",
      "Trek permits",
      "All meals during the trek."
    ],
    gearList: [
      "Woolen cap",
      "Thermal innerwear",
      "Snow gaiters (optional)",
      "Trekking socks (2-3 pairs)",
      "Waterproof gloves"
    ],
    gallery: [
      SrikanthImage1,
      SrikanthImage2,
      SrikanthImage3,
      SrikanthImage4
    ],
    itineraryPdf: SrikanthBaseCampItinarary,
  },
  {
    id: "MT SRIKANTH BASE CAMP",
    name: "Mt Srikanth Base Camp Trek",
    location: "Uttarakhand",
    difficulty: "Easy",
    duration: "5 Days",
    price: 12500,
    image: MtSrikanthBaseCamp,
    season: "Winter/Summer",
    description: "It is our constant endeavor to bring to adventure lovers new trails to explore. Mt Srikanth Base Camp trek is one such trail. It starts from the picturesque village of Dharali in Harsil Valley of Uttarkashi District, Uttarakhand, India. The maximum altitude reached is 4533m. It is a 13km trek that takes a trekker along beautiful forests of pine, cedar and alpine meadows. The trail is laden with various species of flowers along the way including the famous Brahma Kamal (white lotus).",

    itinerary: [
      "Day 1: Arrival at Harsil/Dharali",
      "Day 2: 7km trek to Jhinda Bugyal",
      "Day 3: :6km to Base Camp and back to camp site",
      "Day 4: Back to Harsil / Dharali",
      "Day 5: After breakfast, check out of the hotel."
    ],
    inclusions: [
      "2 Nights accommodation in Harsil/Dharali.",
      "Professional guide support",
      "Trek permits",
      "All meals during the trek."
    ],
    gearList: [
      "Woolen cap",
      "Thermal innerwear",
      "Snow gaiters (optional)",
      "Trekking socks (2-3 pairs)",
      "Waterproof gloves"
    ],
    gallery: [
      SrikanthImage1,
      SrikanthImage2,
      SrikanthImage3,
      SrikanthImage4
    ],
    itineraryPdf: SrikanthBaseCampItinarary,
  },
  {
    id: "MT SRIKANTH BASE CAMP",
    name: "Mt Srikanth Base Camp Trek",
    location: "Uttarakhand",
    difficulty: "Easy",
    duration: "5 Days",
    price: 12500,
    image: MtSrikanthBaseCamp,
    season: "Winter/Summer",
    description: "It is our constant endeavor to bring to adventure lovers new trails to explore. Mt Srikanth Base Camp trek is one such trail. It starts from the picturesque village of Dharali in Harsil Valley of Uttarkashi District, Uttarakhand, India. The maximum altitude reached is 4533m. It is a 13km trek that takes a trekker along beautiful forests of pine, cedar and alpine meadows. The trail is laden with various species of flowers along the way including the famous Brahma Kamal (white lotus).",

    itinerary: [
      "Day 1: Arrival at Harsil/Dharali",
      "Day 2: 7km trek to Jhinda Bugyal",
      "Day 3: :6km to Base Camp and back to camp site",
      "Day 4: Back to Harsil / Dharali",
      "Day 5: After breakfast, check out of the hotel."
    ],
    inclusions: [
      "2 Nights accommodation in Harsil/Dharali.",
      "Professional guide support",
      "Trek permits",
      "All meals during the trek."
    ],
    gearList: [
      "Woolen cap",
      "Thermal innerwear",
      "Snow gaiters (optional)",
      "Trekking socks (2-3 pairs)",
      "Waterproof gloves"
    ],
    gallery: [
      SrikanthImage1,
      SrikanthImage2,
      SrikanthImage3,
      SrikanthImage4
    ],
    itineraryPdf: SrikanthBaseCampItinarary,
  },
  {
    id: "MT SRIKANTH BASE CAMP",
    name: "Mt Srikanth Base Camp Trek",
    location: "Uttarakhand",
    difficulty: "Easy",
    duration: "5 Days",
    price: 12500,
    image: MtSrikanthBaseCamp,
    season: "Winter/Summer",
    description: "It is our constant endeavor to bring to adventure lovers new trails to explore. Mt Srikanth Base Camp trek is one such trail. It starts from the picturesque village of Dharali in Harsil Valley of Uttarkashi District, Uttarakhand, India. The maximum altitude reached is 4533m. It is a 13km trek that takes a trekker along beautiful forests of pine, cedar and alpine meadows. The trail is laden with various species of flowers along the way including the famous Brahma Kamal (white lotus).",

    itinerary: [
      "Day 1: Arrival at Harsil/Dharali",
      "Day 2: 7km trek to Jhinda Bugyal",
      "Day 3: :6km to Base Camp and back to camp site",
      "Day 4: Back to Harsil / Dharali",
      "Day 5: After breakfast, check out of the hotel."
    ],
    inclusions: [
      "2 Nights accommodation in Harsil/Dharali.",
      "Professional guide support",
      "Trek permits",
      "All meals during the trek."
    ],
    gearList: [
      "Woolen cap",
      "Thermal innerwear",
      "Snow gaiters (optional)",
      "Trekking socks (2-3 pairs)",
      "Waterproof gloves"
    ],
    gallery: [
      SrikanthImage1,
      SrikanthImage2,
      SrikanthImage3,
      SrikanthImage4
    ],
    itineraryPdf: SrikanthBaseCampItinarary,
  },
  {
    id: "MT SRIKANTH BASE CAMP",
    name: "Mt Srikanth Base Camp Trek",
    location: "Uttarakhand",
    difficulty: "Easy",
    duration: "5 Days",
    price: 12500,
    image: MtSrikanthBaseCamp,
    season: "Winter/Summer",
    description: "It is our constant endeavor to bring to adventure lovers new trails to explore. Mt Srikanth Base Camp trek is one such trail. It starts from the picturesque village of Dharali in Harsil Valley of Uttarkashi District, Uttarakhand, India. The maximum altitude reached is 4533m. It is a 13km trek that takes a trekker along beautiful forests of pine, cedar and alpine meadows. The trail is laden with various species of flowers along the way including the famous Brahma Kamal (white lotus).",

    itinerary: [
      "Day 1: Arrival at Harsil/Dharali",
      "Day 2: 7km trek to Jhinda Bugyal",
      "Day 3: :6km to Base Camp and back to camp site",
      "Day 4: Back to Harsil / Dharali",
      "Day 5: After breakfast, check out of the hotel."
    ],
    inclusions: [
      "2 Nights accommodation in Harsil/Dharali.",
      "Professional guide support",
      "Trek permits",
      "All meals during the trek."
    ],
    gearList: [
      "Woolen cap",
      "Thermal innerwear",
      "Snow gaiters (optional)",
      "Trekking socks (2-3 pairs)",
      "Waterproof gloves"
    ],
    gallery: [
      SrikanthImage1,
      SrikanthImage2,
      SrikanthImage3,
      SrikanthImage4
    ],
    itineraryPdf: SrikanthBaseCampItinarary,
  },
  {
    id: "MT SRIKANTH BASE CAMP",
    name: "Mt Srikanth Base Camp Trek",
    location: "Uttarakhand",
    difficulty: "Easy",
    duration: "5 Days",
    price: 12500,
    image: MtSrikanthBaseCamp,
    season: "Winter/Summer",
    description: "It is our constant endeavor to bring to adventure lovers new trails to explore. Mt Srikanth Base Camp trek is one such trail. It starts from the picturesque village of Dharali in Harsil Valley of Uttarkashi District, Uttarakhand, India. The maximum altitude reached is 4533m. It is a 13km trek that takes a trekker along beautiful forests of pine, cedar and alpine meadows. The trail is laden with various species of flowers along the way including the famous Brahma Kamal (white lotus).",

    itinerary: [
      "Day 1: Arrival at Harsil/Dharali",
      "Day 2: 7km trek to Jhinda Bugyal",
      "Day 3: :6km to Base Camp and back to camp site",
      "Day 4: Back to Harsil / Dharali",
      "Day 5: After breakfast, check out of the hotel."
    ],
    inclusions: [
      "2 Nights accommodation in Harsil/Dharali.",
      "Professional guide support",
      "Trek permits",
      "All meals during the trek."
    ],
    gearList: [
      "Woolen cap",
      "Thermal innerwear",
      "Snow gaiters (optional)",
      "Trekking socks (2-3 pairs)",
      "Waterproof gloves"
    ],
    gallery: [
      SrikanthImage1,
      SrikanthImage2,
      SrikanthImage3,
      SrikanthImage4
    ],
    itineraryPdf: SrikanthBaseCampItinarary,
  },
];

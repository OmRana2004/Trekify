import { Trek } from "../types/Trek";
import Kedartal from "../assets/KedartalTrek/KedarTal.jpg";
import Sattal from "../assets/SattalTreak/SatTal.webp";
import MtSrikanthBaseCamp from "../assets/Srikanth/Srikanth-Base-Camp.jpg";
import TunganathChandrashila from "../assets/TunganathChandrashilaTrek/TunganathChandrashila.webp";
import GaumukhTapovan from "../assets/GaumukhTapovan/GaumukhTapovan.jpg";
import Kyarkoti from "../assets/Kyarkoti/Kyarkoti.png";
import MtSatopanthExpedition from "../assets/SatopanthExpedition/SatopanthExpedition.jpg";
import DayaraBugyal from "../assets/DayaraBugyalTrek/DayaraBugyal.png";
import LamkhagaPass from "../assets/LamkhagaPassTrek/LamkhagaPass.jpg";
import MountRudugaira from "../assets/MountRudugaira/MountRudugaira.webp";

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
import GaumukhTapovanImage1 from "../assets/GaumukhTapovan/GaumukhTapovan-1.webp";
import GaumukhTapovanImage2 from "../assets/GaumukhTapovan/GaumukhTapovan-2.webp";   
import GaumukhTapovanImage3 from "../assets/GaumukhTapovan/GaumukhTapovan-3.webp";
import GaumukhTapovanImage4 from "../assets/GaumukhTapovan/GaumukhTapovan-4.webp";
import KyarkotiImage1 from "../assets/Kyarkoti/Kyarkoti1.jpg";
import KyarkotiImage2 from "../assets/Kyarkoti/Kyarkoti2.jpg";
import KyarkotiImage3 from "../assets/Kyarkoti/Kyarkoti3.jpg";
import KyarkotiImage4 from "../assets/Kyarkoti/Kyarkoti4.jpg";
import SatopanthImage1 from "../assets/SatopanthExpedition/Satopanth1.jpg";
import SatopanthImage2 from "../assets/SatopanthExpedition/Satopanth2.jpg";
import SatopanthImage3 from "../assets/SatopanthExpedition/Satopanth3.webp";
import SatopanthImage4 from "../assets/SatopanthExpedition/Satopanth4.webp";
import DayaraBugyalImage1 from "../assets/DayaraBugyalTrek/DayaraBugyal1.png";
import DayaraBugyalImage2 from "../assets/DayaraBugyalTrek/DayaraBugyal2.png";
import DayaraBugyalImage3 from "../assets/DayaraBugyalTrek/DayaraBugyal3.png";
import DayaraBugyalImage4 from "../assets/DayaraBugyalTrek/DayaraBugyal4.png";
import LamkhagaPassImage1 from "../assets/LamkhagaPassTrek/LamkhagaPass1.png";
import LamkhagaPassImage2 from "../assets/LamkhagaPassTrek/LamkhagaPass2.jpg";
import LamkhagaPassImage3 from "../assets/LamkhagaPassTrek/LamkhagaPass3.jpg";
import LamkhagaPassImage4 from "../assets/LamkhagaPassTrek/LamkhagaPass4 .png";
import MountRudugairaImage1 from "../assets/MountRudugaira/MountRudugaira1.webp";
import MountRudugairaImage2 from "../assets/MountRudugaira/MountRudugaira2.webp";
import MountRudugairaImage3 from "../assets/MountRudugaira/MountRudugaira3.webp";
import MountRudugairaImage4 from "../assets/MountRudugaira/MountRudugaira4.jpeg";

// Import PDFs
import KedarTalItinerary from "../assets/KedartalTrek/KedarTal-Itinerary.pdf";
import SatTalItinarary from "../assets/SattalTreak/SatTal-Itinerary.pdf";
import SrikanthBaseCampItinarary from "../assets/Srikanth/SrikanthBaseCamp-Itinarary.pdf";
import TunganathChandrashilaItinerary from "../assets/TunganathChandrashilaTrek/TunganathChandrashila-Itinerary.pdf"; 
import GaumukhTapovanItinerary from "../assets/GaumukhTapovan/GaumukhTapovan-Itinerary.pdf";
import KyarkotiItinerary from "../assets/Kyarkoti/Kyarkoti-Itinerary.pdf";
import SatopanthItinarary from "../assets/SatopanthExpedition/Satopanth-Itinarary.pdf";
import DayaraBugyaItinarary from "../assets/DayaraBugyalTrek/DayaraBugya-Itinarary.pdf";
import LamkhagaPassItinarary from "../assets/LamkhagaPassTrek/LamkhagaPass-Itinarary.pdf";
import MountRudugairaItinarary from "../assets/LamkhagaPassTrek/LamkhagaPass-Itinarary.pdf";


export const treks: Trek[] = [
         // 1
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
                       // 2
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
                   // 3
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
                        // 4
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
                       // 5
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
                        // 6
  {
    id: "KYARKOTI",
    name: "Kyarkoti Trek",
    location: "Uttarakhand",
    difficulty: "Moderate",
    duration: "6 Days",
    price: 14000,
    image: Kyarkoti,
    season: "Winter/Summer",
    description: " Kyarkoti Trek – A Hidden Gem of the Garhwal Himalayas. Tucked away in the serene Harsil Valley of Uttarakhand, Kyarkoti is an alpine meadow that promises to leave you spellbound with its untouched beauty. Just 16 km from the quaint village of Harsil, this breathtaking trek offers a magical blend of lush forests, pristine lakes, and majestic Himalayan peaks. Following part of the Lamkhaga Pass trail—which leads to Chitkul in Himachal Pradesh—the route meanders through dense alpine forests of cedar, pine, and birch, with charming little streams crossing your path. One of the highlights of the journey is the emerald green Kyarkoti Lake, a tranquil spot surrounded by towering mountains. Along the way, you might encounter large herds of sheep from the nearby Bagori Village, known for its traditional woolens. The trek also offers breathtaking views of Mt. Srikanth and numerous unnamed peaks that will fill your heart with awe.And after a day of adventure, unwind with our lip-smacking meals and relax in our cozy, warm tents—an experience that completes this unforgettable Himalayan journey.",

    itinerary: [
      "Day 1: Arrival at Harsil/Dharali",
      "Day 2: Harsil to Gangnani - 8 km trek",
      "Day 3: Gangnani to Upper Kyarkoti - 9 km trek",
      "Day 4: Explore Kyarkot",
      "Day 5: Upper Kyarkoti to Gangnani 9 km trek.",
      "Day 6: Gangnani to Harsil - 8 km trek"
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
      KyarkotiImage1,
      KyarkotiImage2,
      KyarkotiImage3,
      KyarkotiImage4 
    ],
    itineraryPdf: KyarkotiItinerary,
  },
                          // 7
  {
    id: "MT SATOPANTH EXPEDITION",
    name: "Mt Satopanth Expedition",
    location: "Uttarakhand",
    difficulty: "Hard",
    duration: "20 Days",
    price: 145000,
    image: MtSatopanthExpedition,
    season: "Winter/Summer",
    description: "Mount Satopanth – A Thrilling Ascent in the Garhwal Himalayas, Rising majestically in the Gangotri Valley of Uttarakhand, Mount Satopanth stands as one of the most formidable peaks in the Garhwal region of the Himalayas. At over 7,000 meters, it proudly claims its place as a “seven thousander” and the second-highest peak in the Gangotri Valley. Renowned as an ideal practice expedition for Everest aspirants, the climb to Satopanth is anything but ordinary. The route demands traversing vast glaciers, navigating crevasses, and ascending a dramatic knife-edge ridge on the final push to the summit—making it a highly technical and challenging ascent suited for experienced mountaineers. For those who dare, Mount Satopanth offers not just a climb, but a test of endurance, skill, and spirit amid the raw grandeur of the Himalayas.",

    itinerary: [
      "Day 1: Arrive at Uttarkashi and check in to a hotel.",
      "Day 2: Drive 100km to reach Gangotri, the nearest road head. Witness the Ganga Arati in the evening",
      "Day 3: Acclimatization Day at Gangotri. Climbers can hike around the area to visit places like the Surya Kund and Pandava Gufa (cave).",
      "Day 4: Trek 14km from Gangotri to Bhojbabsa (3700m). We will set up our camps here.",
      "Day 5: Trek 11km from Bhojbasa to Nandanvan (4400m). Overnight in tents.",
      "Day 6: Trek 6km from Nandanvan to Vasuki Tal(4800m). We set up our Base Camp here",
      "Day 7: Acclimatization Day at Vasuki Tal. We will prepare today for our climb next day to ABC. We will sort out all climbing gear, equipment etc. Porters will accompany us only until the Base Camp, unless requested for by the client in which case High Altitude Porters(HAP) will have to be hired",
      "Day 8: Climbers will ferry load to Advanced Base Camp at 5100m and will come back to the Base Camp for 2 days. This will serve as acclimatization as well.",
      "Day 9: Acclimatization Day at Base Camp at Vasuki (4800m)",
      "Day 10: Base Camp to Advanced Base Camp (5100m)",
      "Day 11: Advence Base Camp to Camp 1 and Back to Advance Base Camp (5100m)",
      "Day 12: Advance Base Camp to Camp1 (5800m)",
      "Day 13: Camp 1 to Summit Camp(6200m) and Back to Camp 1 (5800m)",
      "Day 14: Camp 1 to Summit Camp (6200m)",
      "Day 15: Route Opening of Summit",
      "Day 16: Summit Attemp (7075m)",
      "Day 17: Summit Camp to Advance base camp (5100m)",
      "Day 18: Advance Camp to Base Camp at Vasuki Tal (4800m)",
      "Day 19: Base camp Vasuki tal to Bhojbasa",
      "Day 20: Bhojbasa to Gangotri",
      "Day 21: Gangotri to Uttarkashi",
    ],
    inclusions: [
      "Accommodation on twin Sharing basis Gangotri to Gangotri",
      "Transport Uttarkshi to Uttarkashi",
      "Trek permits",
      "All meals during the trek.",
      "Sleeping bag tents Mattresses Kitchen tent Dining tent toilet tent and all Expedition Equipment",
      "Professional guide support",
    ],
    gearList: [
      "Woolen cap",
      "Thermal innerwear",
      "Snow gaiters (optional)",
      "Trekking socks (2-3 pairs)",
      "Waterproof gloves"
    ],
    gallery: [
      SatopanthImage1,
      SatopanthImage2,
      SatopanthImage3,
      SatopanthImage4
    ],
    itineraryPdf: SatopanthItinarary,
  },
                //8
  {
    id: "DAYARA BUGYAL TREK",
    name: "Dayara Bugyal Trek",
    location: "Uttarakhand",
    difficulty: "Easy",
    duration: "5 Days",
    price: 12000,
    image: DayaraBugyal,
    season: "Winter/Summer",
    description: "Dayara Bugyal, nestled at an impressive altitude of 3,307 meters above sea level, is one of the most breathtaking alpine meadows in the Indian Himalayas. Renowned for its expansive green pastures, gently undulating hills, and serene atmosphere, this high-altitude wonder is a paradise for nature lovers and adventure seekers alike. Stretching as far as the eye can see, Dayara Bugyal offers panoramic views of some of the most majestic Himalayan peaks, including Bandarpunch, Draupadi ka Danda, and Srikanth Peak. The meadow is adorned with patches of wildflowers during the warmer months and tranquil alpine lakes that reflect the clear blue skies above, making it a perfect setting for camping and photography. During winter, this lush green expanse is blanketed in a thick layer of snow, transforming it into a pristine skiing destination. With its gentle slopes and ample open space, Dayara becomes an ideal playground for both amateur and experienced skiers. The snowfall adds a magical charm to the landscape, making winter treks to Dayara a truly enchanting experience. Whether you're seeking solitude in nature, an adventurous escape, or just a peaceful retreat under the stars, Dayara Bugyal offers a unique blend of natural beauty, adventure, and tranquility that leaves every traveler mesmerized.",

    itinerary: [ 
      "Day 1: Drive from Rishikesh to Barsu",
      "Day 2: Barsu to Barnala",
      "Day 3: Barnala to Dayara Bugyal site",
      "Day 4: Dayara Bugyal",
      "Day 5: Dayara Bugyal to Rishikesh or Dehradun."
    ],
    inclusions: [
      "Accommodation on twin Sharing basis Barsu to Barsu",
      "Professional guide support",
      "Sleeping bag tents Mattresses Kitchen tent Dining tent toilet tent",
      "porters carrying common trek equipment",
      "All meals Barsu to Barsu"
    ],
    gearList: [
      "Woolen cap",
      "Thermal innerwear",
      "Snow gaiters (optional)",
      "Trekking socks (2-3 pairs)",
      "Waterproof gloves"
    ],
    gallery: [
      DayaraBugyalImage1,
      DayaraBugyalImage2,
      DayaraBugyalImage3,
      DayaraBugyalImage4
    ],
    itineraryPdf: DayaraBugyaItinarary,
  },
          // 9
  {
    id: "LAMKHAGA PASS TREK",
    name: "Lamkhaga Pass Trek",
    location: "Uttarakhand",
    difficulty: "Hard",
    duration: "10 Days",
    price: 8000,
    image: LamkhagaPass,
    season: "Winter/Summer",
    description: "Experience the thrill of crossing from Uttarakhand to Himachal Pradesh on the exhilarating Lamkhaga Pass trek—a challenging yet awe-inspiring 10-day journey through some of the most remote and scenic landscapes in the Indian Himalayas. Beginning from the peaceful village of Harsil in Uttarkashi, the trail takes you through the stunning Kyarkoti valley, past alpine forests of cedar, pine, and birch, gurgling mountain streams, and the striking emerald-green Kyarkoti Lake. As you ascend toward the majestic Lamkhaga Pass, located at an altitude of around 5,280 meters, be rewarded with panoramic views of Mt. Srikanth (6,133m) and other snow-draped, unnamed Himalayan peaks. Along the way, encounter flocks of sheep led by shepherds from Bagori village—renowned for their traditional woolens—grazing in the high meadows. The trail culminates in the idyllic village of Chitkul in the Sangla Valley of Himachal Pradesh, leaving you with a deep sense of accomplishment and memories of untouched wilderness. With the support of our experienced and certified guides, friendly porters, warm tents, and freshly prepared vegetarian meals, your trek will be both safe and fulfilling. For those seeking more, the journey can be extended to explore the enchanting Sangla and Kalpa valleys, known for their rich culture, apple orchards, and stunning views of the Kinnaur Kailash range.",

    itinerary: [
      "Day 1: Arrival at Harsil/Dharali",
      "Day 2: Harsil to Gangnani/Lower Kyarkoti - 8km trek",
      "Day 3: Gangnani/Lower Kyarkoti to Upper Kyarkoti - 7km trek",
      "Day 4: Upper Kyarkoti to Lamkhaga Pass Base Camp",
      "Day 5: Acclimatization, Today we will acclimatize by gaining some height and then returning to base camp",
      "Day 6: Base Camp to Gundar via Lamkhaga Pass",
      "Day 7: Gundar to Dumti, Our descent to Sangla Valley begins. Today we descend to Dumti.",
      "Day 8: Dumti to Rani Kanda.",
      "Day 9: Rani Kanda to Chitkul",
      "Day 10: Depart from Chitkul",

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
      LamkhagaPassImage1,
      LamkhagaPassImage2,
      LamkhagaPassImage3,
      LamkhagaPassImage4
    ],
    itineraryPdf: LamkhagaPassItinarary,
  },
                // 10
  {
    id: "MOUNT RUDUGAIRA EXPEDITION",
    name: "Mount Rudugaira Expedition",
    location: "Uttarakhand",
    difficulty: "Moderate",
    duration: "10 Days",
    price: 28500,
    image: MountRudugaira,
    season: "Winter/Summer",
    description: "Mt. Rudugaira, standing at an altitude of around 5,819 meters, is an excellent trekking peak nestled in the Gangotri region of Uttarakhand, offering the perfect stepping stone for trekkers aiming to venture into mountaineering. The expedition begins from the sacred town of Gangotri and follows a scenic trail along the Rudra Ganga river, winding through dense birch and pine forests, alpine meadows, and glacial moraines. As you ascend, you'll be rewarded with stunning views of surrounding peaks like Gangotri I, II, and III, Mt. Auden’s Col, and Mt. Srikanth. The route to Base Camp is a visual delight, with dramatic landscapes and high-altitude terrain that gradually acclimatizes climbers for the final summit push. While the climb demands physical fitness and mental endurance, it is relatively accessible for those with prior trekking experience, making it a great choice for those looking to transition into technical climbs. With the support of experienced guides, high-altitude camping, and well-managed logistics, the Mt. Rudugaira expedition offers an unforgettable introduction to the world of Himalayan mountaineering.",

    itinerary: [
      "Day 1: Gangotri. Witness the Ganga Arati at the banks of the Bhagirathi River.",
      "Day 2: Gangotri to Nala Camp",
      "Day 3: Nala Camp to Rudugaira Base Camp",
      "Day 4: Rudugaira Base camp rest day",
      "Day 5: Load ferry from Base Camp to Summit Camp.",
      "Day 6: Set up Camp at Summit Camp",
      "Day 7: Summit Attempt and return to Summit Camp",
      "Day 8: Back to Base Camp",
      "Day 9: Base Camp To gangotri",
      "Day 10: After Breakfast end of our service.",
    ],
    inclusions: [
      "Sleeping bag tents Mattresses Kitchen tent Dining tent toilet tent All Expedition Equipment",
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
      MountRudugairaImage1,
      MountRudugairaImage2,
      MountRudugairaImage3,
      MountRudugairaImage4
    ],
    itineraryPdf: MountRudugairaItinarary,
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

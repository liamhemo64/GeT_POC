import type { TranslatedString } from '../core/types';

// Images
const FujiSan = require('../utils/Fuji_San.jpg');
const Interjection = require('../utils/Interjection.jpg');
const Torii = require('../utils/Torii.jpg');

// Types
export type ItineraryItem = {
  time: string;
  title: TranslatedString;
  location: TranslatedString;
  description: TranslatedString;
  icon: string;
  latitude: number;
  longitude: number;
  details?: TranslatedString;
  imageUrl?: string;
};

export type TripDay = {
  day: number;
  title: TranslatedString;
  date: TranslatedString;
  items: ItineraryItem[];
};

export type Trip = {
  id: string;
  name: TranslatedString;
  days: TripDay[];
};



export type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};



// Mock Trips
export const trips: Trip[] = [
  {
    id: 'grand-japan-tour',
    name: { en: 'Grand Japan Tour - 10 Days', he: 'טיול יפן הגדול - 10 ימים', ja: 'グランドジャパンツアー - 10日間' },
    days: [
      {
        day: 1,
        title: { en: 'Day 1: Arrival in Tokyo', he: 'יום 1: הגעה לטוקיו', ja: '1日目：東京到着' },
        date: { en: 'March 15, 2026', he: '15 במרץ, 2026', ja: '2026年3月15日' },
        items: [
          {
            time: '14:00',
            title: { en: 'Arrive at Narita Airport', he: 'הגעה לשדה התעופה נריטה', ja: '成田空港に到着' },
            location: { en: 'Narita, Chiba', he: 'נריטה, צ\'יבה', ja: '成田市、千葉県' },
            description: { en: 'Clear immigration and pick up JR Pass.', he: 'מעבר בביקורת דרכונים ואיסוף כרטיס JR Pass.', ja: '入国審査を済ませ、JRパスを受け取る。' },
            icon: 'airplane',
            latitude: 35.7720,
            longitude: 140.3929,
            details: { en: 'Narita International Airport is Japan\'s primary international gateway. JR Pass exchange counters are located in Terminal 1 and 2. The Narita Express (N\'EX) to Tokyo takes about 60 minutes.', he: 'נמל התעופה הבינלאומי נריטה הוא השער הבינלאומי העיקרי של יפן. דלפקי החלפת JR Pass נמצאים בטרמינלים 1 ו-2. הנריטה אקספרס לטוקיו לוקח כ-60 דקות.', ja: '成田国際空港は日本の主要な国際玄関口です。JRパス引換カウンターはターミナル1と2にあります。成田エクスプレスで東京まで約60分。' },
            imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=400&q=60',
          },
          {
            time: '16:30',
            title: { en: 'Check-in at Hotel', he: 'צ\'ק-אין במלון', ja: 'ホテルにチェックイン' },
            location: { en: 'Shinjuku, Tokyo', he: 'שינג\'וקו, טוקיו', ja: '新宿、東京' },
            description: { en: 'Drop off luggage at hotel.', he: 'הניחו את המטען במלון.', ja: 'ホテルに荷物を預ける。' },
            icon: 'bed',
            latitude: 35.6938,
            longitude: 139.7034,
            details: { en: 'Shinjuku is one of Tokyo\'s major commercial and entertainment districts. It houses the world\'s busiest train station with over 3.5 million daily passengers.', he: 'שינג\'וקו הוא אחד ממחוזות המסחר והבידור המרכזיים של טוקיו. בו נמצאת תחנת הרכבת העמוסה ביותר בעולם עם למעלה מ-3.5 מיליון נוסעים ביום.', ja: '新宿は東京の主要な商業・娯楽地区の一つです。1日350万人以上が利用する世界一忙しい駅があります。' },
            imageUrl: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400&q=60',
          },
          {
            time: '18:00',
            title: { en: 'Explore Shinjuku', he: 'סיור בשינג\'וקו', ja: '新宿散策' },
            location: { en: 'Shinjuku, Tokyo', he: 'שינג\'וקו, טוקיו', ja: '新宿、東京' },
            description: { en: 'Walk around Kabukicho and Golden Gai.', he: 'טיילו בקבוקיצ\'ו וגולדן גאי.', ja: '歌舞伎町とゴールデン街を散歩。' },
            icon: 'walk',
            latitude: 35.6948,
            longitude: 139.7036,
            details: { en: 'Kabukicho is Tokyo\'s largest entertainment quarter. Golden Gai is a network of narrow alleys with over 200 tiny bars, each seating only a handful of people. A true Tokyo nightlife experience.', he: 'קבוקיצ\'ו הוא רובע הבידור הגדול ביותר בטוקיו. גולדן גאי הוא רשת סמטאות צרות עם למעלה מ-200 ברים זעירים. חוויית חיי לילה אמיתית של טוקיו.', ja: '歌舞伎町は東京最大の歓楽街です。ゴールデン街は200以上の小さなバーが並ぶ狭い路地のネットワーク。東京の本物のナイトライフ体験。' },
            imageUrl: 'https://images.unsplash.com/photo-1554797589-7241bb691973?w=400&q=60',
          },
          {
            time: '20:00',
            title: { en: 'Dinner at Ichiran Ramen', he: 'ארוחת ערב באיצ\'יראן ראמן', ja: '一蘭ラーメンで夕食' },
            location: { en: 'Shinjuku, Tokyo', he: 'שינג\'וקו, טוקיו', ja: '新宿、東京' },
            description: { en: 'Enjoy customizable tonkotsu ramen.', he: 'הנאה מראמן טונקוצו מותאם אישית.', ja: 'カスタマイズ可能な豚骨ラーメンを楽しむ。' },
            icon: 'restaurant',
            latitude: 35.6934,
            longitude: 139.7016,
            details: { en: 'Ichiran is famous for its individual dining booths and customizable ramen. You fill out a preference sheet choosing richness, firmness, spiciness, garlic amount, and more.', he: 'איצ\'יראן מפורסמת בתאי האכילה הפרטיים ובראמן המותאם אישית. ממלאים טופס העדפות לבחירת עושר, מוצקות, חריפות, כמות שום ועוד.', ja: '一蘭は個室ブースとカスタマイズ可能なラーメンで有名です。濃さ、固さ、辛さ、にんにくの量などを好みシートに記入。' },
            imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=60',
          },
        ],
      },
      {
        day: 2,
        title: { en: 'Day 2: Tokyo Highlights', he: 'יום 2: רגעי השיא של טוקיו', ja: '2日目：東京ハイライト' },
        date: { en: 'March 16, 2026', he: '16 במרץ, 2026', ja: '2026年3月16日' },
        items: [
          {
            time: '08:00',
            title: { en: 'Tsukiji Outer Market', he: 'השוק החיצוני של צוקיג\'י', ja: '築地場外市場' },
            location: { en: 'Chuo, Tokyo', he: 'צ\'ואו, טוקיו', ja: '中央区、東京' },
            description: { en: 'Fresh sushi breakfast and market exploration.', he: 'ארוחת בוקר סושי טרי וסיור בשוק.', ja: '新鮮な寿司の朝食と市場散策。' },
            icon: 'restaurant',
            latitude: 35.6654,
            longitude: 139.7707,
            details: { en: 'The outer market remains a bustling food paradise with over 400 shops and restaurants. Try tamagoyaki, fresh sashimi, and street food.', he: 'השוק החיצוני נשאר גן עדן קולינרי שוקק עם למעלה מ-400 חנויות ומסעדות. נסו טמגויאקי, סשימי טרי ואוכל רחוב.', ja: '場外市場は400以上の店舗やレストランが並ぶ活気あふれる食の楽園。玉子焼き、新鮮な刺身、屋台グルメをお試しあれ。' },
            imageUrl: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=60',
          },
          {
            time: '10:30',
            title: { en: 'Senso-ji Temple', he: 'מקדש סנסו-ג\'י', ja: '浅草寺' },
            location: { en: 'Asakusa, Tokyo', he: 'אסאקוסה, טוקיו', ja: '浅草、東京' },
            description: { en: 'Visit Tokyo\'s oldest temple.', he: 'ביקור במקדש העתיק ביותר בטוקיו.', ja: '東京最古のお寺を訪問。' },
            icon: 'temple',
            latitude: 35.7148,
            longitude: 139.7967,
            details: { en: 'Founded in 645 AD, Senso-ji is Tokyo\'s oldest and most significant temple. The iconic Kaminarimon with its massive red lantern is one of Japan\'s most photographed landmarks.', he: 'סנסו-ג\'י, שנוסד בשנת 645, הוא המקדש העתיק והמשמעותי ביותר בטוקיו. שער הקמינאריימון עם הפנס האדום הענק הוא מהאתרים המצולמים ביותר ביפן.', ja: '645年創建の浅草寺は東京最古で最も重要な寺院。巨大な赤提灯の雷門は日本で最も写真に撮られるランドマークの一つ。' },
            imageUrl: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=400&q=60',
          },
          {
            time: '13:00',
            title: { en: 'Akihabara District', he: 'רובע אקיהברה', ja: '秋葉原エリア' },
            location: { en: 'Akihabara, Tokyo', he: 'אקיהברה, טוקיו', ja: '秋葉原、東京' },
            description: { en: 'Explore anime shops and electronics.', he: 'חקרו חנויות אנימה ואלקטרוניקה.', ja: 'アニメショップと電気店を探索。' },
            icon: 'shopping',
            latitude: 35.7023,
            longitude: 139.7745,
            details: { en: 'Known as "Electric Town", Akihabara is the center of anime, manga, and gaming culture.', he: 'הידועה כ"עיר החשמל", אקיהברה היא מרכז תרבות האנימה, המנגה והגיימינג.', ja: '「電気街」として知られる秋葉原はアニメ、マンガ、ゲーム文化の中心地。' },
            imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&q=60',
          },
          {
            time: '17:00',
            title: { en: 'Shibuya Crossing', he: 'צומת שיבויה', ja: '渋谷スクランブル交差点' },
            location: { en: 'Shibuya, Tokyo', he: 'שיבויה, טוקיו', ja: '渋谷、東京' },
            description: { en: 'See the world\'s busiest intersection.', he: 'ראו את הצומת העמוס ביותר בעולם.', ja: '世界一忙しい交差点を見学。' },
            icon: 'walk',
            latitude: 35.6595,
            longitude: 139.7004,
            details: { en: 'Up to 3,000 people cross at once during peak times. Best viewed from Shibuya Sky or the Starbucks on the 2nd floor of Tsutaya Building.', he: 'עד 3,000 אנשים חוצים בו-זמנית בשעות השיא. הנוף הטוב ביותר מתצפית שיבויה סקיי או הסטארבקס בקומה 2 של בניין צוטאיה.', ja: 'ピーク時には最大3,000人が一度に横断。渋谷スカイや蔦屋書店2階のスターバックスからの眺めがベスト。' },
            imageUrl: 'https://images.unsplash.com/photo-1532236204992-f5e85c024202?w=400&q=60',
          },
        ],
      },
      {
        day: 3,
        title: { en: 'Day 3: Kyoto', he: 'יום 3: קיוטו', ja: '3日目：京都' },
        date: { en: 'March 17, 2026', he: '17 במרץ, 2026', ja: '2026年3月17日' },
        items: [
          {
            time: '07:00',
            title: { en: 'Shinkansen to Kyoto', he: 'שינקאנסן לקיוטו', ja: '京都へ新幹線' },
            location: { en: 'Tokyo Station', he: 'תחנת טוקיו', ja: '東京駅' },
            description: { en: 'Bullet train from Tokyo to Kyoto.', he: 'רכבת מהירה מטוקיו לקיוטו.', ja: '東京から京都へ新幹線で移動。' },
            icon: 'train',
            latitude: 35.6812,
            longitude: 139.7671,
            details: { en: 'The Tokaido Shinkansen reaches speeds up to 285 km/h. The journey takes about 2 hours 15 minutes. Covered by JR Pass.', he: 'שינקאנסן טוקאידו מגיע למהירות של עד 285 קמ"ש. הנסיעה לוקחת כ-2 שעות ו-15 דקות. מכוסה על ידי JR Pass.', ja: '東海道新幹線は最高時速285kmに達します。所要時間は約2時間15分。JRパス利用可能。' },
            imageUrl: 'https://images.unsplash.com/photo-1565017054945-e5ccfb6dca94?w=400&q=60',
          },
          {
            time: '10:00',
            title: { en: 'Fushimi Inari Shrine', he: 'מקדש פושימי אינארי', ja: '伏見稲荷大社' },
            location: { en: 'Fushimi, Kyoto', he: 'פושימי, קיוטו', ja: '伏見区、京都' },
            description: { en: 'Walk through thousands of vermillion torii gates.', he: 'טיילו דרך אלפי שערי טוריי אדומים.', ja: '何千もの朱色の鳥居をくぐり抜ける象徴的な神社。' },
            icon: 'temple',
            latitude: 34.9671,
            longitude: 135.7727,
            details: { en: 'Over 10,000 vermillion torii gates wind up the mountainside. The full hike takes about 2-3 hours. Free entry, open 24/7.', he: 'למעלה מ-10,000 שערי טוריי אדומים מתפתלים במעלה ההר. הטיול המלא לוקח כ-2-3 שעות. כניסה חופשית, פתוח 24/7.', ja: '10,000基以上の朱色の鳥居が山腹を縫うように続きます。全行程は約2〜3時間。入場無料、24時間開放。' },
            imageUrl: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=400&q=60',
          },
          {
            time: '14:00',
            title: { en: 'Kiyomizu-dera Temple', he: 'מקדש קיומיזו-דרה', ja: '清水寺' },
            location: { en: 'Higashiyama, Kyoto', he: 'היגשייאמה, קיוטו', ja: '東山区、京都' },
            description: { en: 'Iconic wooden stage with city views.', he: 'במת עץ אייקונית עם נוף לעיר.', ja: '街を一望できる象徴的な木造の舞台。' },
            icon: 'temple',
            latitude: 34.9949,
            longitude: 135.7850,
            details: { en: 'Founded in 780, this pure water temple offers spectacular views of Kyoto. The wooden stage was built without a single nail.', he: 'מקדש המים הטהורים, שנוסד ב-780, מציע נופים מרהיבים של קיוטו. במת העץ נבנתה ללא מסמר יחיד.', ja: '780年創建のこの寺院は京都の素晴らしい景色を提供します。木造の舞台は釘を一本も使わずに建てられました。' },
            imageUrl: 'https://images.unsplash.com/photo-1590250626508-3a152345517e?w=400&q=60',
          },
          {
            time: '18:00',
            title: { en: 'Gion Geisha District', he: 'רובע הגיישות גיון', ja: '祇園の花街' },
            location: { en: 'Gion, Kyoto', he: 'גיון, קיוטו', ja: '祇園、京都' },
            description: { en: 'Spot Geishas in historic streets.', he: 'זהו גיישות ברחובות ההיסטוריים.', ja: '歴史的な通りで舞妓や芸妓を見つける。' },
            icon: 'walk',
            latitude: 35.0037,
            longitude: 135.7756,
            details: { en: 'Kyoto\'s most famous geisha district. You might spot a geiko or maiko heading to an evening engagement.', he: 'רובע הגיישות המפורסם ביותר בקיוטו. ייתכן שתבחינו בגייקו או מאיקו בדרכן להופעת ערב.', ja: '京都で最も有名な花街。舞妓や芸妓を見かけることも。' },
            imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=60',
          },
        ],
      },
      {
        day: 4,
        title: { en: 'Day 4: Historic Kyoto', he: 'יום 4: קיוטו ההיסטורית', ja: '4日目：歴史の京都' },
        date: { en: 'March 18, 2026', he: '18 במרץ, 2026', ja: '2026年3月18日' },
        items: [
           {
            time: '09:00',
            title: { en: 'Kinkaku-ji (Golden Pavilion)', he: 'קינקאקו-ג\'י (פביליון הזהב)', ja: '金閣寺' },
            location: { en: 'Kita Ward, Kyoto', he: 'קיטה, קיוטו', ja: '北区、京都' },
            description: { en: 'A Zen temple completely covered in gold leaf.', he: 'מקדש זן המצופה כולו בעלי זהב.', ja: '金箔で完全に覆われた禅寺。' },
            icon: 'temple',
            latitude: 35.0394,
            longitude: 135.7292,
            details: { en: 'The top two floors are completely covered in gold leaf. Originally built as a retirement villa for the Shogun Ashikaga Yoshimitsu.', he: 'שתי הקומות העליונות מכוסות כולן בזהב. נבנה במקור כווילת פרישה לשוגון אשיקאגה יושימיצו.', ja: '上層2階は金箔で完全に覆われています。元は足利義満将軍の別荘として建てられました。' },
            imageUrl: 'https://images.unsplash.com/photo-1545638100-348f9588d990?w=400&q=60',
          },
          {
            time: '13:00',
            title: { en: 'Arashiyama Bamboo Grove', he: 'חורשת הבמבוק אראשיימה', ja: '嵐山竹林' },
            location: { en: 'Arashiyama, Kyoto', he: 'אראשיימה, קיוטו', ja: '嵐山、京都' },
            description: { en: 'Walk through the towering bamboo forest.', he: 'טיילו ביער הבמבוק הגקבוה.', ja: 'そびえ立つ竹林を歩く。' },
            icon: 'walk',
            latitude: 35.0173,
            longitude: 135.6711,
            details: { en: 'The towering bamboo stalks create an otherworldly atmosphere. Visit early morning to avoid crowds.', he: 'גבעולי הבמבוק הגבוהים יוצרים אווירה על-טבעית. בקרו בשעות הבוקר המוקדמות להימנע מהמונים.', ja: 'そびえ立つ竹が幻想的な雰囲気を作り出します。混雑を避けるため早朝がおすすめ。' },
            imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&q=60',
          },
           {
            time: '15:30',
            title: { en: 'Tenryu-ji Temple', he: 'מקדש טנריו-ג\'י', ja: '天龍寺' },
            location: { en: 'Arashiyama, Kyoto', he: 'אראשיימה, קיוטו', ja: '嵐山、京都' },
            description: { en: 'Explore the sprawling gardens of this Zen temple.', he: 'חקרו את הגנים רחבי הידיים של מקדש הזן הזה.', ja: 'この禅寺の広大な庭園を探索。' },
            icon: 'temple',
            latitude: 35.0157,
            longitude: 135.6732,
            details: { en: 'Ranked first among Kyoto\'s five great Zen temples. Its garden has survived in its original form for centuries.', he: 'מדורג ראשון בין חמשת מקדשי הזן הגדולים של קיוטו. הגן שלו שרד בצורתו המקורית במשך מאות שנים.', ja: '京都五山第一位の禅寺。その庭園は何世紀にもわたって元の形で生き残っています。' },
            imageUrl: 'https://images.unsplash.com/photo-1627883204907-27b22237887d?w=400&q=60',
          },
        ],
      },
      {
        day: 5,
        title: { en: 'Day 5: Nara & Osaka', he: 'יום 5: נארה ואוסקה', ja: '5日目：奈良と大阪' },
        date: { en: 'March 19, 2026', he: '19 במרץ, 2026', ja: '2026年3月19日' },
         items: [
           {
            time: '09:00',
            title: { en: 'Todai-ji Temple (Nara)', he: 'מקדש טודאי-ג\'י (נארה)', ja: '東大寺（奈良）' },
            location: { en: 'Nara City', he: 'נארה', ja: '奈良市' },
            description: { en: 'See the giant Buddha and friendly deer.', he: 'ראו את בודהה הענק ואת הצבאים הידידותיים.', ja: '大仏とフレンドリーな鹿を見る。' },
            icon: 'temple',
            latitude: 34.6851,
            longitude: 135.8050,
            details: { en: 'Todai-ji houses the world\'s largest bronze statue of the Buddha. The surrounding park is home to hundreds of freely roaming deer.', he: 'טודאי-ג\'י מאכלס את פסל הברונזה הגדול בעולם של בודהה. הפארק שמסביב הוא ביתם של מאות צבאים המסתובבים בחופשיות.', ja: '東大寺には世界最大の銅造大仏があります。周辺の公園には数百頭の鹿が放し飼いにされています。' },
            imageUrl: 'https://images.unsplash.com/photo-1575459346654-7935759715e2?w=400&q=60',
          },
          {
            time: '14:00',
            title: { en: 'Train to Osaka', he: 'רכבת לאוסקה', ja: '大阪への電車' },
            location: { en: 'Osaka', he: 'אוסקה', ja: '大阪' },
            description: { en: 'Short train ride to Japan\'s Kitchen.', he: 'נסיעת רכבת קצרה למטבח של יפן.', ja: '日本の台所への短い電車の旅。' },
            icon: 'train',
            latitude: 34.7025,
            longitude: 135.4959,
            details: { en: 'Takes about 40 minutes via JR or Kintetsu lines.', he: 'לוקח כ-40 דקות דרך קווי JR או קינטצ\'ו.', ja: 'JRまたは近鉄線で約40分。' },
            imageUrl: 'https://images.unsplash.com/photo-1590559637774-4b531908a8b1?w=400&q=60',
          },
          {
            time: '18:00',
            title: { en: 'Dotonbori Food Tour', he: 'סיור אוכל בדוטונבורי', ja: '道頓堀フードツアー' },
            location: { en: 'Namba, Osaka', he: 'נמבה, אוסקה', ja: '難波、大阪' },
            description: { en: 'East takoyaki under the neon signs.', he: 'אכלו טאקויאקי תחת שלטי הניאון.', ja: 'ネオンサインの下でたこ焼きを食べる。' },
            icon: 'restaurant',
            latitude: 34.6687,
            longitude: 135.5013,
            details: { en: 'Famous for its extravagant signage and street food. Must try: Takoyaki and Okonomiyaki.', he: 'מפורסם בזכות השילוט המוגזם ואוכל הרחוב. חובה לנסות: טאקויאקי ואוקונומיאקי.', ja: '派手な看板と屋台料理で有名。必食：たこ焼きとお好み焼き。' },
            imageUrl: 'https://images.unsplash.com/photo-1590766940554-6ebda4c264ac?w=400&q=60',
          },
         ]
      },
       {
        day: 6,
        title: { en: 'Day 6: Osaka Adventures', he: 'יום 6: הרפתקאות באוסקה', ja: '6日目：大阪アドベンチャー' },
        date: { en: 'March 20, 2026', he: '20 במרץ, 2026', ja: '2026年3月20日' },
         items: [
           {
            time: '09:00',
            title: { en: 'Osaka Castle', he: 'טירת אוסקה', ja: '大阪城' },
            location: { en: 'Chuo Ward, Osaka', he: 'צ\'ואו, טוקיו', ja: '中央区、大阪' },
            description: { en: 'Symbol of Osaka with expansive park.', he: 'הסמל של אוסקה עם פארק רחב ידיים.', ja: '広大な公園を持つ大阪のシンボル。' },
            icon: 'history',
            latitude: 34.6873,
            longitude: 135.5262,
            details: { en: 'The castle played a major role in the unification of Japan during the sixteenth century.', he: 'הטירה מילאה תפקיד מרכזי באיחוד יפן במהלך המאה ה-16.', ja: '城は16世紀の日本統一において重要な役割を果たしました。' },
            imageUrl: 'https://images.unsplash.com/photo-1549420846-5121b6d92550?w=400&q=60',
          },
          {
            time: '13:00',
            title: { en: 'Umeda Sky Building', he: 'בניין אומדה סקיי', ja: '梅田スカイビル' },
            location: { en: 'Kita Ward, Osaka', he: 'קיטה, אוסקה', ja: '北区、大阪' },
            description: { en: 'Floating Garden Observatory.', he: 'מצפה הגן הצף.', ja: '空中庭園展望台。' },
            icon: 'camera',
            latitude: 34.7059,
            longitude: 135.4907,
            details: { en: 'Provides a 360-degree panoramic view of Osaka from its suspending deck.', he: 'מספק נוף פנורמי של 360 מעלות על אוסקה מהסיפון התלוי.', ja: '吊り下げられたデッキから大阪の360度パノラマビューを提供します。' },
            imageUrl: 'https://images.unsplash.com/photo-1599824641697-320c2b2913e6?w=400&q=60',
          },
         ]
      },
      {
        day: 7,
        title: { en: 'Day 7: Universal Studios Japan', he: 'יום 7: יוניברסל סטודיוס יפן', ja: '7日目：ユニバーサル・スタジオ・ジャパン' },
        date: { en: 'March 21, 2026', he: '21 במרץ, 2026', ja: '2026年3月21日' },
        items: [
          {
            time: '08:30',
            title: { en: 'Super Nintendo World', he: 'סופר נינטנדו וורלד', ja: 'スーパー・ニンテンドー・ワールド' },
            location: { en: 'USJ, Osaka', he: 'יוניברסל סטודיוס, אוסקה', ja: 'USJ、大阪' },
            description: { en: 'Enter the world of Mario.', he: 'היכנסו לעולם של מריו.', ja: 'マリオの世界へ。' },
            icon: 'game',
            latitude: 34.6656,
            longitude: 135.4323,
            details: { en: 'Use your Power-Up Band to collect coins and keys. Don\'t miss the Mario Kart: Koopa\'s Challenge ride.', he: 'השתמשו בצמיד הכוח לאסוף מטבעות ומפתחות. אל תפספסו את הנסיעה במריו קארט: האתגר של קופה.', ja: 'パワーアップバンドを使ってコインやキーを集めよう。マリオカート〜クッパの挑戦状〜は見逃せない。' },
            imageUrl: 'https://images.unsplash.com/photo-1628151016629-d65fa63026fb?w=400&q=60',
          },
           {
            time: '14:00',
            title: { en: 'Wizarding World of Harry Potter', he: 'העולם הקסום של הארי פוטר', ja: 'ウィザーディング・ワールド・オブ・ハリー・ポッター' },
            location: { en: 'USJ, Osaka', he: 'יוניברסל סטודיוס, אוסקה', ja: 'USJ、大阪' },
            description: { en: 'Butterbeer and Hogwarts Castle.', he: 'בירצפת וטירת הוגוורטס.', ja: 'バタービールとホグワーツ城。' },
            icon: 'magic',
            latitude: 34.6656,
            longitude: 135.4323,
            imageUrl: 'https://images.unsplash.com/photo-1558250630-b3db72985b19?w=400&q=60',
          },
        ]
      },
      {
        day: 8,
        title: { en: 'Day 8: Hiroshima & Miyajima', he: 'יום 8: הירושימה ומיידג\'ימה', ja: '8日目：広島と宮島' },
        date: { en: 'March 22, 2026', he: '22 במרץ, 2026', ja: '2026年3月22日' },
        items: [
          {
            time: '10:00',
            title: { en: 'Peace Memorial Park', he: 'פארק השלום', ja: '平和記念公園' },
            location: { en: 'Hiroshima', he: 'הירושימה', ja: '広島' },
            description: { en: 'Visit the Atomic Bomb Dome and museum.', he: 'ביקור בכיפת הפצצה האטומית ובמוזיאון.', ja: '原爆ドームと資料館を訪問。' },
            icon: 'history',
            latitude: 34.3955,
            longitude: 132.4536,
            details: { en: 'A moving memorial to the victims of the atomic bomb. The A-Bomb Dome is a UNESCO World Heritage site.', he: 'אנדרטה מרגשת לקורבנות פצצת האטום. כיפת הפצצה האטומית היא אתר מורשת עולמית של אונסק"ו.', ja: '原爆の犠牲者を追悼する感動的な記念碑。原爆ドームはユネスコ世界遺産です。' },
            imageUrl: 'https://images.unsplash.com/photo-1556346252-8706dd65427d?w=400&q=60',
          },
          {
            time: '14:00',
            title: { en: 'Itsukushima Shrine', he: 'מקדש איצוקושימה', ja: '厳島神社' },
            location: { en: 'Miyajima Island', he: 'האי מיידג\'ימה', ja: '宮島' },
            description: { en: 'The floating Torii gate.', he: 'שער הטוריי הצף.', ja: '水に浮かぶ鳥居。' },
            icon: 'torii-gate',
            latitude: 34.2959,
            longitude: 132.3198,
            details: { en: 'Famous for its giant torii gate that appears to float on water at high tide. Watch out for the wild deer!', he: 'מפורסם בשער הטוריי הענק שנראה צף על המים בזמן גאות. היזהרו מהצבאים הפראיים!', ja: '満潮時に水に浮かぶように見える巨大な鳥居で有名。野生の鹿に注意！' },
            imageUrl: 'https://images.unsplash.com/photo-1549643276-fbc2bd5f1515?w=400&q=60',
          },
        ]
      },
      {
        day: 9,
        title: { en: 'Day 9: Hakone', he: 'יום 9: האקונה', ja: '9日目：箱根' },
        date: { en: 'March 23, 2026', he: '23 במרץ, 2026', ja: '2026年3月23日' },
        items: [
           {
            time: '11:00',
            title: { en: 'Hakone Ropeway', he: 'רכבל האקונה', ja: '箱根ロープウェイ' },
            location: { en: 'Hakone, Kanagawa', he: 'האקונה, קנגאווה', ja: '箱根町、神奈川県' },
            description: { en: 'Views of Mt. Fuji and Owakudani.', he: 'נופים של הר פוג\'י ועמק אוואקודאני.', ja: '富士山と大涌谷の眺め。' },
            icon: 'mountain',
            latitude: 35.2415,
            longitude: 138.9912,
            imageUrl: 'https://images.unsplash.com/photo-1624250238059-d3734a787b40?w=400&q=60',
          },
           {
            time: '15:00',
            title: { en: 'Ryokan Stay & Onsen', he: 'שהייה בריוקן ואונסן', ja: '旅館宿泊と温泉' },
            location: { en: 'Gora, Hakone', he: 'גורה, האקונה', ja: '強羅、箱根' },
            description: { en: 'Relax in a traditional hot spring inn.', he: 'הירגעו בפונדק מעיינות חמים מסורתי.', ja: '伝統的な温泉旅館でリラックス。' },
            icon: 'hot-springs',
            latitude: 35.2505,
            longitude: 139.0493,
            details: { en: 'Enjoy a kaiseki dinner and soak in therapeutic hot springs waters.', he: 'תיהנו מארוחת קאיסקי וטבילה במעיינות חמים מרפאים.', ja: '懐石料理を楽しみ、癒しの温泉に浸かる。' },
            imageUrl: 'https://images.unsplash.com/photo-1558980893-138d6df00d3d?w=400&q=60',
          },
        ]
      },
      {
        day: 10,
        title: { en: 'Day 10: Departure', he: 'יום 10: עזיבה', ja: '10日目：出発' },
        date: { en: 'March 24, 2026', he: '24 במרץ, 2026', ja: '2026年3月24日' },
        items: [
           {
            time: '10:00',
            title: { en: 'Last Minute Shopping', he: 'קניות של הרגע האחרון', ja: '最後のショッピング' },
            location: { en: 'Ginza, Tokyo', he: 'גינזה, טוקיו', ja: '銀座、東京' },
            description: { en: 'Pick up souvenirs before heading home.', he: 'אספו מזכרות לפני החזרה הביתה.', ja: '帰る前にお土産を買う。' },
            icon: 'shopping',
            latitude: 35.6712,
            longitude: 139.7645,
            imageUrl: 'https://images.unsplash.com/photo-1570569766627-6f6874673620?w=400&q=60',
          },
           {
            time: '14:00',
            title: { en: 'Airport Express', he: 'רכבת אקספרס לשדה התעופה', ja: '空港特急' },
            location: { en: 'Tokyo Station', he: 'תחנת טוקיו', ja: '東京駅' },
            description: { en: 'Train to Haneda/Narita.', he: 'רכבת להאנדה/נריטה.', ja: '羽田/成田への電車。' },
            icon: 'train',
            latitude: 35.6812,
            longitude: 139.7671,
            imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=400&q=60',
          },
        ]
      },
    ],
  },
  {
    id: 'tokyo-express',
    name: { en: 'Tokyo Express - 5 Days', he: 'טוקיו אקספרס - 5 ימים', ja: '東京エクスプレス - 5日間' },
    days: [
      {
        day: 1,
        title: { en: 'Day 1: Modern Tokyo', he: 'יום 1: טוקיו המודרנית', ja: '1日目：モダン東京' },
        date: { en: 'April 5, 2026', he: '5 באפריל, 2026', ja: '2026年4月5日' },
         items: [
           {
            time: '14:00',
            title: { en: 'Shibuya Crossing', he: 'צומת שיבויה', ja: '渋谷スクランブル交差点' },
            location: { en: 'Shibuya, Tokyo', he: 'שיבויה, טוקיו', ja: '渋谷、東京' },
            description: { en: 'The iconic scramble.', he: 'הצומת האייקוני.', ja: '象徴的なスクランブル。' },
            icon: 'walk',
            latitude: 35.6595,
            longitude: 139.7004,
            imageUrl: 'https://images.unsplash.com/photo-1532236204992-f5e85c024202?w=400&q=60',
          },
          {
            time: '16:00',
            title: { en: 'Harajuku Shopping', he: 'קניות בהראג\'וקו', ja: '原宿ショッピング' },
            location: { en: 'Harajuku, Tokyo', he: 'הראג\'וקו, טוקיו', ja: '原宿、東京' },
            description: { en: 'Kawaii fashion.', he: 'אופנת קוואיי.', ja: 'カワイイファッション。' },
            icon: 'shopping',
            latitude: 35.6715,
            longitude: 139.7031,
            imageUrl: 'https://images.unsplash.com/photo-1583839541873-a07fef04176d?w=400&q=60',
          }
         ]
      },
      {
        day: 2,
        title: { en: 'Day 2: Old & New', he: 'יום 2: ישן וחדש', ja: '2日目：新旧' },
        date: { en: 'April 6, 2026', he: '6 באפריל, 2026', ja: '2026年4月6日' },
         items: [
           {
            time: '09:00',
            title: { en: 'Senso-ji & Asakusa', he: 'סנסו-ג\'י ואסאקוסה', ja: '浅草寺と浅草' },
            location: { en: 'Asakusa, Tokyo', he: 'אסאקוסה, טוקיו', ja: '浅草、東京' },
            description: { en: 'Traditional vibes.', he: 'אווירה מסורתית.', ja: '伝統的な雰囲気。' },
            icon: 'temple',
            latitude: 35.7148,
            longitude: 139.7967,
            imageUrl: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=400&q=60',
          },
          {
            time: '14:00',
            title: { en: 'Tokyo Skytree', he: 'עץ השמיים טוקיו', ja: '東京スカイツリー' },
            location: { en: 'Oshiage, Tokyo', he: 'אושיאגה, טוקיו', ja: '押上、東京' },
            description: { en: 'Tallest tower views.', he: 'נוף מהמגדל הגבוה.', ja: '最も高いタワーからの眺め。' },
            icon: 'camera',
            latitude: 35.7100,
            longitude: 139.8107,
            imageUrl: 'https://images.unsplash.com/photo-1536768138541-61ef7655d9d3?w=400&q=60',
          }
         ]
      },
      {
        day: 3,
        title: { en: 'Day 3: Pop Culture', he: 'יום 3: תרבות הפופ', ja: '3日目：ポップカルチャー' },
        date: { en: 'April 7, 2026', he: '7 באפריל, 2026', ja: '2026年4月7日' },
        items: [
           {
            time: '11:00',
            title: { en: 'Akihabara', he: 'אקיהברה', ja: '秋葉原' },
            location: { en: 'Akihabara, Tokyo', he: 'אקיהברה, טוקיו', ja: '秋葉原、東京' },
            description: { en: 'Anime paradise.', he: 'גן עדן לאנימה.', ja: 'アニメ天国。' },
            icon: 'game',
            latitude: 35.7023,
            longitude: 139.7745,
            imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&q=60',
          },
          {
            time: '15:00',
            title: { en: 'Nakano Broadway', he: 'נקאנו ברודוויי', ja: '中野ブロードウェイ' },
            location: { en: 'Nakano, Tokyo', he: 'נקאנו, טוקיו', ja: '中野、東京' },
            description: { en: 'Vintage toys and anime goods.', he: 'צעצועי וינטג\' ומוצרי אנימה.', ja: 'ビンテージおもちゃとアニメグッズ。' },
            icon: 'shopping',
            latitude: 35.7088,
            longitude: 139.6644,
            imageUrl: 'https://images.unsplash.com/photo-1594738459419-61da63303867?w=400&q=60',
          }
        ]
      },
      {
         day: 4,
          title: { en: 'Day 4: Nature in the City', he: 'יום 4: טבע בעיר', ja: '4日目：都会の自然' },
          date: { en: 'April 8, 2026', he: '8 באפריל, 2026', ja: '2026年4月8日' },
          items: [
             {
              time: '10:00',
              title: { en: 'Shinjuku Gyoen', he: 'גן שינג\'וקו גיואן', ja: '新宿御苑' },
              location: { en: 'Shinjuku, Tokyo', he: 'שינג\'וקו, טוקיו', ja: '新宿、東京' },
              description: { en: 'Beautiful greenhouse and gardens.', he: 'חממה וגנים יפים.', ja: '美しい温室と庭園。' },
              icon: 'mountain',
              latitude: 35.6852,
              longitude: 139.7101,
              imageUrl: 'https://images.unsplash.com/photo-1583921798365-276709d436c6?w=400&q=60',
            },
             {
              time: '13:00',
              title: { en: 'Meiji Shrine', he: 'מקדש מייג\'י', ja: '明治神宮' },
              location: { en: 'Harajuku, Tokyo', he: 'הראג\'וקו, טוקיו', ja: '原宿、東京' },
              description: { en: 'Forest sanctuary.', he: 'מקלט ביער.', ja: '森の聖域。' },
              icon: 'temple',
              latitude: 35.6764,
              longitude: 139.6993,
              imageUrl: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=400&q=60',
            }
          ]
      },
      {
         day: 5,
          title: { en: 'Day 5: Departure', he: 'יום 5: עזיבה', ja: '5日目：出発' },
          date: { en: 'April 9, 2026', he: '9 באפריל, 2026', ja: '2026年4月9日' },
          items: [
             {
              time: '11:00',
              title: { en: 'Ginza Six', he: 'גינזה סיקס', ja: 'ギンザシックス' },
              location: { en: 'Ginza, Tokyo', he: 'גינזה, טוקיו', ja: '銀座、東京' },
              description: { en: 'Luxury shopping.', he: 'קניות יוקרה.', ja: '高級ショッピング。' },
              icon: 'shopping',
              latitude: 35.6696,
              longitude: 139.7640,
              imageUrl: 'https://images.unsplash.com/photo-1570569766627-6f6874673620?w=400&q=60',
            }
          ]
      }
    ]
  }
];

// Onboarding interests
export const interests: { id: string; label: TranslatedString; icon: string }[] = [
  { id: 'anime', label: { en: 'Anime', he: 'אנימה', ja: 'アニメ' }, icon: 'sparkles' },
  { id: 'temples', label: { en: 'Temples', he: 'מקדשים', ja: '寺院' }, icon: 'torii-gate' },
  { id: 'food', label: { en: 'Food', he: 'אוכל', ja: '食べ物' }, icon: 'utensils' },
  { id: 'nature', label: { en: 'Nature', he: 'טבע', ja: '自然' }, icon: 'mountain' },
  { id: 'shopping', label: { en: 'Shopping', he: 'קניות', ja: 'ショッピング' }, icon: 'shopping-bag' },
  { id: 'history', label: { en: 'History', he: 'היסטוריה', ja: '歴史' }, icon: 'landmark' },
  { id: 'nightlife', label: { en: 'Nightlife', he: 'חיי לילה', ja: 'ナイトライフ' }, icon: 'moon' },
  { id: 'art', label: { en: 'Art', he: 'אמנות', ja: 'アート' }, icon: 'palette' },
  { id: 'onsen', label: { en: 'Onsen', he: 'אונסן', ja: '温泉' }, icon: 'hot-springs' },
  { id: 'sports', label: { en: 'Sports', he: 'ספורט', ja: 'スポーツ' }, icon: 'trophy' },
];

// Chat quick questions
export const quickQuestions: TranslatedString[] = [
  { en: 'Plan me an 8-day trip', he: 'תכנן לי טיול של 8 ימים', ja: '8日間の旅行を計画して' },
  { en: 'Best ramen in Tokyo', he: 'הראמן הכי טוב בטוקיו', ja: '東京で一番美味しいラーメン' },
  { en: 'Cherry blossom season', he: 'עונת פריחת הדובדבן', ja: '桜の季節' },
  { en: 'Budget for 2 weeks', he: 'תקציב לשבועיים', ja: '2週間の予算' },
];

// Mock User Profile
export type UserProfile = {
  name: string;
  email: string;
  avatarUrl: string;
  memberSince: string;
  stats: {
    totalTrips: number;
    countriesVisited: number;
    daysTraveled: number;
  };
};

export const userProfile: UserProfile = {
  name: 'Li-am',
  email: 'liam@japanjourney.app',
  avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80',
  memberSince: '2025',
  stats: {
    totalTrips: 3,
    countriesVisited: 1,
    daysTraveled: 18,
  },
};

// Login background images
export const loginBackgrounds = [
  FujiSan,
  Interjection,
  Torii,
];

// --- Activities & Tags ---

export type TagValue = 'Nature' | 'Culture' | 'Food' | 'Adventure' | 'Shopping' | 'Relaxation' | 'Nightlife' | 'Art';

export const allTags: { value: TagValue; label: TranslatedString }[] = [
  { value: 'Nature', label: { en: 'Nature', he: 'טבע', ja: '自然' } },
  { value: 'Culture', label: { en: 'Culture', he: 'תרבות', ja: '文化' } },
  { value: 'Food', label: { en: 'Food', he: 'אוכל', ja: '食べ物' } },
  { value: 'Adventure', label: { en: 'Adventure', he: 'הרפתקאות', ja: 'アドベンチャー' } },
  { value: 'Shopping', label: { en: 'Shopping', he: 'קניות', ja: 'ショッピング' } },
  { value: 'Relaxation', label: { en: 'Relaxation', he: 'רגיעה', ja: 'リラクゼーション' } },
  { value: 'Nightlife', label: { en: 'Nightlife', he: 'חיי לילה', ja: 'ナイトライフ' } },
  { value: 'Art', label: { en: 'Art', he: 'אמנות', ja: 'アート' } },
];

export interface Activity {
  id: string;
  title: TranslatedString;
  location: TranslatedString;
  description: TranslatedString;
  duration: TranslatedString;
  price: string;
  imageUrl: string;
  tags: TagValue[];
}

export const activities: Activity[] = [
  { id: 'act-1', title: { en: 'Mount Fuji Sunrise Hike', he: 'טיול זריחה בהר פוג\'י', ja: '富士山の日の出ハイキング' }, location: { en: 'Fujinomiya, Shizuoka', he: 'פוג\'ינומיה, שיזואוקה', ja: '富士宮市、静岡県' }, description: { en: 'Experience the breathtaking sunrise from Japan\'s most iconic peak.', he: 'חוו את הזריחה עוצרת הנשימה מהפסגה האייקונית ביותר ביפן.', ja: '日本で最も象徴的な山頂から息をのむような日の出を体験。' }, tags: ['Nature', 'Adventure'], duration: { en: '8-10 hours', he: '8-10 שעות', ja: '8〜10時間' }, price: '¥12,000', imageUrl: 'https://images.unsplash.com/photo-1576675784201-f8c1eb293b4e?w=400&q=60' },
  { id: 'act-2', title: { en: 'Tsukiji Fish Market Tour', he: 'סיור בשוק הדגים צוקיג\'י', ja: '築地魚市場ツアー' }, location: { en: 'Chuo, Tokyo', he: 'צ\'ואו, טוקיו', ja: '中央区、東京' }, description: { en: 'Explore the world-famous fish market with a local guide.', he: 'חקרו את שוק הדגים המפורסם בעולם עם מדריך מקומי.', ja: '地元ガイドと世界的に有名な魚市場を探索。' }, tags: ['Food', 'Culture'], duration: { en: '3 hours', he: '3 שעות', ja: '3時間' }, price: '¥8,500', imageUrl: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=60' },
  { id: 'act-3', title: { en: 'Fushimi Inari Shrine Walk', he: 'הליכה במקדש פושימי אינארי', ja: '伏見稲荷大社散策' }, location: { en: 'Fushimi, Kyoto', he: 'פושימי, קיוטו', ja: '伏見区、京都' }, description: { en: 'Walk through thousands of vermillion torii gates at this iconic shrine.', he: 'טיילו דרך אלפי שערי טוריי אדומים במקדש האייקוני.', ja: '何千もの朱色の鳥居をくぐり抜ける象徴的な神社。' }, tags: ['Culture', 'Nature'], duration: { en: '2-3 hours', he: '2-3 שעות', ja: '2〜3時間' }, price: 'Free', imageUrl: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=400&q=60' },
  { id: 'act-4', title: { en: 'Akihabara Anime Tour', he: 'סיור אנימה באקיהברה', ja: '秋葉原アニメツアー' }, location: { en: 'Akihabara, Tokyo', he: 'אקיהברה, טוקיו', ja: '秋葉原、東京' }, description: { en: 'Discover the heart of anime and manga culture with specialty shops.', he: 'גלו את לב תרבות האנימה והמנגה עם חנויות מיוחדות.', ja: 'アニメとマンガ文化の中心地を専門店とともに発見。' }, tags: ['Shopping', 'Culture'], duration: { en: '4 hours', he: '4 שעות', ja: '4時間' }, price: '¥5,000', imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&q=60' },
  { id: 'act-5', title: { en: 'Traditional Tea Ceremony', he: 'טקס תה מסורתי', ja: '伝統的な茶道体験' }, location: { en: 'Gion, Kyoto', he: 'גיון, קיוטו', ja: '祇園、京都' }, description: { en: 'Experience the art of Japanese tea ceremony in a historic teahouse.', he: 'חוו את אמנות טקס התה היפני בבית תה היסטורי.', ja: '歴史ある茶室で日本の茶道を体験。' }, tags: ['Culture', 'Relaxation'], duration: { en: '1.5 hours', he: '1.5 שעות', ja: '1.5時間' }, price: '¥6,000', imageUrl: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?w=400&q=60' },
  { id: 'act-6', title: { en: 'Shibuya Night Photography', he: 'צילום לילה בשיבויה', ja: '渋谷ナイトフォトグラフィー' }, location: { en: 'Shibuya, Tokyo', he: 'שיבויה, טוקיו', ja: '渋谷、東京' }, description: { en: 'Capture the neon-lit streets of Tokyo with a professional guide.', he: 'צלמו את רחובות הניאון של טוקיו עם מדריך מקצועי.', ja: 'プロガイドと東京のネオン街を撮影。' }, tags: ['Nightlife', 'Art'], duration: { en: '3 hours', he: '3 שעות', ja: '3時間' }, price: '¥10,000', imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=60' },
];

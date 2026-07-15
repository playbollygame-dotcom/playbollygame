"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer";
import ExploreMore from "@/components/ExploreMore";

import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { language } = useLanguage();

  const t =
    language === "en"
      ? {
          home: "Home",

          heroTitle: "BollyGame",

          heroSubtitle: "India's Trusted Gaming Platform",

          heroDescription:
            "Explore exciting games, daily rewards, referral bonuses, cashback offers, and exclusive promotions on one of India's fastest-growing gaming platforms.",

          download: "Download BollyGame",

          articleTitle:
            "BollyGame – India's Trusted Real Cash Gaming Platform with Exciting Rewards and Daily Bonuses",
        }
      : {
          home: "होम",

          heroTitle: "बॉलीगेम",

          heroSubtitle: "भारत का भरोसेमंद गेमिंग प्लेटफॉर्म",

          heroDescription:
            "रोमांचक गेम्स, दैनिक रिवॉर्ड्स, रेफरल बोनस, कैशबैक ऑफर और एक्सक्लूसिव प्रमोशन का आनंद लें।",

          download: "बॉलीगेम डाउनलोड करें",

          articleTitle:
            "बॉलीगेम – भारत का भरोसेमंद गेमिंग प्लेटफॉर्म जहाँ मिलते हैं शानदार बोनस और दैनिक रिवॉर्ड्स",
        };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050B12] pt-24">

        {/* Hero */}

        <section className="border-b border-slate-800">

          <div className="mx-auto max-w-7xl px-6 py-16">

            <p className="font-semibold uppercase tracking-[6px] text-red-500">
              {t.home}
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight text-white md:text-6xl">
              {t.heroTitle}

              <span className="block text-red-500">
                {t.heroSubtitle}
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              {t.heroDescription}
            </p>

            <div className="mt-10">

              <Link
                href="/download"
                className="inline-flex rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-red-700"
              >
                {t.download}
              </Link>

            </div>

          </div>

        </section>

        {/* Banner */}

        <section className="py-16">

          <div className="mx-auto max-w-7xl px-6">

            <img
              src="/home-banner.webp"
              alt="BollyGame Banner"
              className="w-full rounded-3xl shadow-2xl"
            />

          </div>

        </section>

        {/* Article */}

        <section className="pb-20">

          <div className="mx-auto max-w-5xl px-6">

            <div className="rounded-3xl border border-slate-800 bg-[#081018] p-8 md:p-12">

              <h2 className="mb-8 text-4xl font-bold text-white">
                {t.articleTitle}
              </h2>
              <div className="space-y-7 text-lg leading-8 text-gray-300">

  <p>
    {language === "en"
      ? "The world of online gaming is growing rapidly, and players are always searching for a secure platform that offers exciting games, instant rewards, and a smooth user experience."
      : "ऑनलाइन गेमिंग की दुनिया तेजी से बढ़ रही है और खिलाड़ी हमेशा ऐसे सुरक्षित प्लेटफॉर्म की तलाश में रहते हैं जहाँ शानदार गेम्स, तुरंत रिवॉर्ड्स और बेहतरीन अनुभव मिले।"}
  </p>

  <p>
    {language === "en"
      ? "BollyGame has become one of the fastest-growing gaming platforms in India, providing entertaining games, attractive bonuses, referral rewards, and quick withdrawals."
      : "बॉलीगेम भारत के सबसे तेजी से बढ़ते गेमिंग प्लेटफॉर्म्स में से एक बन चुका है जहाँ मनोरंजक गेम्स, बोनस, रेफरल रिवॉर्ड्स और तेज़ ट्रांज़ैक्शन उपलब्ध हैं।"}
  </p>

  <p>
    {language === "en"
      ? "Whether you are a beginner or an experienced player, BollyGame offers an enjoyable gaming experience with multiple game categories and regular promotional offers."
      : "चाहे आप नए खिलाड़ी हों या अनुभवी, बॉलीगेम सभी के लिए आसान इंटरफेस, कई गेम कैटेगरी और नियमित प्रमोशनल ऑफर प्रदान करता है।"}
  </p>

  <div className="mt-10">

    <Link
      href="/download"
      className="inline-flex rounded-xl bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700"
    >
      {language === "en"
        ? "Download BollyGame APK"
        : "बॉलीगेम APK डाउनलोड करें"}
    </Link>

  </div>

  <h3 className="pt-8 text-3xl font-bold text-white">

    {language === "en"
      ? "Why BollyGame Is Becoming Popular"
      : "बॉलीगेम इतना लोकप्रिय क्यों हो रहा है"}

  </h3>

  <p>

    {language === "en"
      ? "BollyGame is designed for players who enjoy skill-based and entertainment gaming. The platform focuses on providing a secure environment, fast gameplay, attractive rewards, and a user-friendly experience."
      : "बॉलीगेम उन खिलाड़ियों के लिए बनाया गया है जो रोमांचक और मनोरंजक गेमिंग का आनंद लेना चाहते हैं। यह सुरक्षित वातावरण, तेज़ गेमप्ले और आकर्षक रिवॉर्ड्स प्रदान करता है।"}

  </p>

  <div className="mt-6 grid gap-5 md:grid-cols-2">

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">

      <h4 className="mb-2 font-bold text-red-500">
        🎁 {language === "en" ? "Welcome Rewards" : "वेलकम बोनस"}
      </h4>

      <p className="text-gray-400">
        {language === "en"
          ? "Attractive welcome bonuses for eligible new users."
          : "नए उपयोगकर्ताओं के लिए आकर्षक वेलकम बोनस।"}
      </p>

    </div>

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">

      <h4 className="mb-2 font-bold text-red-500">
        💰 {language === "en" ? "Daily Bonuses" : "दैनिक बोनस"}
      </h4>

      <p className="text-gray-400">
        {language === "en"
          ? "Regular daily rewards and promotional campaigns."
          : "हर दिन मिलने वाले रिवॉर्ड्स और प्रमोशनल ऑफर।"}
      </p>

    </div>

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">

      <h4 className="mb-2 font-bold text-red-500">
        ⚡ {language === "en" ? "Fast Transactions" : "तेज़ ट्रांज़ैक्शन"}
      </h4>

      <p className="text-gray-400">
        {language === "en"
          ? "Quick deposits and smooth withdrawal process."
          : "तेज़ डिपॉज़िट और आसान विदड्रॉल प्रक्रिया।"}
      </p>

    </div>

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">

      <h4 className="mb-2 font-bold text-red-500">
        🔒 {language === "en" ? "Secure Platform" : "सुरक्षित प्लेटफॉर्म"}
      </h4>

      <p className="text-gray-400">
        {language === "en"
          ? "Reliable payment methods with account protection."
          : "सुरक्षित भुगतान और अकाउंट सुरक्षा।"}
      </p>

    </div>

  </div>
    <h3 className="pt-10 text-3xl font-bold text-white">

    {language === "en"
      ? "Exciting Games Available"
      : "उपलब्ध लोकप्रिय गेम्स"}

  </h3>

  <p>

    {language === "en"
      ? "BollyGame offers multiple exciting games so users can enjoy everything from one application without switching platforms."
      : "बॉलीगेम पर कई प्रकार के गेम उपलब्ध हैं, जिससे आपको अलग-अलग ऐप इस्तेमाल करने की आवश्यकता नहीं पड़ती।"}

  </p>

  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

    <div className="rounded-xl border border-slate-700 bg-[#0D1722] p-5 text-center">
      🎮
      <p className="mt-3 font-semibold text-white">
        Teen Patti
      </p>
    </div>

    <div className="rounded-xl border border-slate-700 bg-[#0D1722] p-5 text-center">
      🐉
      <p className="mt-3 font-semibold text-white">
        Dragon vs Tiger
      </p>
    </div>

    <div className="rounded-xl border border-slate-700 bg-[#0D1722] p-5 text-center">
      🎯
      <p className="mt-3 font-semibold text-white">
        {language === "en"
          ? "Color Prediction"
          : "कलर प्रेडिक्शन"}
      </p>
    </div>

    <div className="rounded-xl border border-slate-700 bg-[#0D1722] p-5 text-center">
      🎲
      <p className="mt-3 font-semibold text-white">
        Lucky Spin
      </p>
    </div>

  </div>

  <h3 className="pt-10 text-3xl font-bold text-white">

    {language === "en"
      ? "Daily Rewards & Bonus Offers"
      : "दैनिक रिवॉर्ड्स और बोनस ऑफर"}

  </h3>

  <p>

    {language === "en"
      ? "Users can participate in various promotional campaigns throughout the year. Rewards may include welcome bonuses, cashback offers, referral benefits, and limited-time events."
      : "उपयोगकर्ता पूरे वर्ष विभिन्न प्रमोशनल ऑफर्स में भाग ले सकते हैं, जिनमें वेलकम बोनस, कैशबैक, रेफरल बोनस और विशेष ऑफर शामिल हो सकते हैं।"}

  </p>

  <ul className="list-disc space-y-3 pl-6 text-gray-300">

    <li>{language === "en" ? "Welcome Bonus" : "वेलकम बोनस"}</li>

    <li>{language === "en" ? "Daily Login Rewards" : "डेली लॉगिन रिवॉर्ड"}</li>

    <li>{language === "en" ? "Referral Bonus" : "रेफरल बोनस"}</li>

    <li>{language === "en" ? "Cashback Promotions" : "कैशबैक ऑफर"}</li>

    <li>{language === "en" ? "Festival Campaigns" : "फेस्टिवल ऑफर"}</li>

    <li>{language === "en" ? "VIP Benefits" : "VIP बेनिफिट्स"}</li>

  </ul>

  <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#2B0000] via-[#590000] to-[#990000] p-8 shadow-[0_0_40px_rgba(220,38,38,.25)]">

    <h3 className="text-4xl font-black text-white">

      {language === "en"
        ? "Ready to Start?"
        : "शुरू करने के लिए तैयार हैं?"}

    </h3>

    <div className="mt-4 h-1 w-20 rounded-full bg-yellow-400"></div>

    <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200">

      {language === "en"
        ? "Download the latest PlayBollyGame APK and enjoy exciting games, daily rewards, cashback offers, referral bonuses, secure gameplay, and fast withdrawals."
        : "नवीनतम PlayBollyGame APK डाउनलोड करें और शानदार गेम्स, दैनिक रिवॉर्ड्स, कैशबैक, रेफरल बोनस और सुरक्षित गेमिंग का आनंद लें।"}

    </p>

    <Link
      href="/download"
      className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,.45)]"
    >
      ⬇ {language === "en"
        ? "Download BollyGame"
        : "बॉलीगेम डाउनलोड करें"}
    </Link>

  </div>

  <h3 className="pt-12 text-3xl font-bold text-white">

    {language === "en"
      ? "Referral Program"
      : "रेफरल प्रोग्राम"}

  </h3>

  <p>

    {language === "en"
      ? "Invite your friends and unlock referral rewards whenever eligibility requirements are fulfilled."
      : "अपने दोस्तों को आमंत्रित करें और पात्रता पूरी होने पर रेफरल रिवॉर्ड प्राप्त करें।"}

  </p>
    <div className="mt-8 grid gap-5 md:grid-cols-2">

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">

      <h4 className="mb-2 font-bold text-red-500">
        👥 {language === "en" ? "Invite Friends" : "दोस्तों को आमंत्रित करें"}
      </h4>

      <p className="text-gray-400">
        {language === "en"
          ? "Share your referral link and invite eligible users."
          : "अपना रेफरल लिंक शेयर करें और नए यूज़र्स को जोड़ें।"}
      </p>

    </div>

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">

      <h4 className="mb-2 font-bold text-red-500">
        💸 {language === "en" ? "Earn Rewards" : "रिवॉर्ड कमाएँ"}
      </h4>

      <p className="text-gray-400">
        {language === "en"
          ? "Participate in referral campaigns and unlock bonus opportunities."
          : "रेफरल प्रोग्राम में भाग लें और बोनस प्राप्त करें।"}
      </p>

    </div>

  </div>

  <h3 className="pt-12 text-3xl font-bold text-white">

    {language === "en"
      ? "Safe & Secure Gaming Experience"
      : "सुरक्षित गेमिंग अनुभव"}

  </h3>

  <p>

    {language === "en"
      ? "Security plays an important role in online gaming. BollyGame provides secure accounts, reliable payment methods, and a smooth gaming experience."
      : "ऑनलाइन गेमिंग में सुरक्षा सबसे महत्वपूर्ण है। BollyGame सुरक्षित अकाउंट, विश्वसनीय भुगतान और बेहतरीन गेमिंग अनुभव प्रदान करता है।"}

  </p>

  <div className="mt-8 grid gap-5 md:grid-cols-3">

    <div className="rounded-xl border border-slate-700 bg-[#0D1722] p-5">
      🔒
      <h4 className="mt-3 font-bold text-white">
        {language === "en"
          ? "Protected Accounts"
          : "सुरक्षित अकाउंट"}
      </h4>
    </div>

    <div className="rounded-xl border border-slate-700 bg-[#0D1722] p-5">
      ⚡
      <h4 className="mt-3 font-bold text-white">
        {language === "en"
          ? "Fast Withdrawals"
          : "तेज़ विदड्रॉल"}
      </h4>
    </div>

    <div className="rounded-xl border border-slate-700 bg-[#0D1722] p-5">
      💳
      <h4 className="mt-3 font-bold text-white">
        {language === "en"
          ? "Secure Payments"
          : "सुरक्षित भुगतान"}
      </h4>
    </div>

  </div>

  <h3 className="pt-12 text-3xl font-bold text-white">

    {language === "en"
      ? "Frequently Asked Questions"
      : "अक्सर पूछे जाने वाले प्रश्न"}

  </h3>

  <div className="mt-8 space-y-6">

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">

      <h4 className="text-xl font-bold text-white">
        {language === "en"
          ? "What is BollyGame?"
          : "BollyGame क्या है?"}
      </h4>

      <p className="mt-3 text-gray-400">
        {language === "en"
          ? "BollyGame is an online gaming platform offering exciting games, promotional campaigns, referral rewards, and bonus opportunities."
          : "BollyGame एक ऑनलाइन गेमिंग प्लेटफ़ॉर्म है जहाँ विभिन्न गेम्स, बोनस और रेफरल रिवॉर्ड्स उपलब्ध हैं।"}
      </p>

    </div>

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">

      <h4 className="text-xl font-bold text-white">
        {language === "en"
          ? "Does BollyGame provide bonuses?"
          : "क्या BollyGame बोनस देता है?"}
      </h4>

      <p className="mt-3 text-gray-400">
        {language === "en"
          ? "Eligible users may receive welcome rewards, cashback offers, referral bonuses, and limited-time promotions."
          : "योग्य यूज़र्स को वेलकम बोनस, कैशबैक और रेफरल रिवॉर्ड्स मिल सकते हैं।"}
      </p>

    </div>

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">

      <h4 className="text-xl font-bold text-white">
        {language === "en"
          ? "Is BollyGame beginner friendly?"
          : "क्या BollyGame शुरुआती खिलाड़ियों के लिए आसान है?"}
      </h4>

      <p className="mt-3 text-gray-400">
        {language === "en"
          ? "Yes. The platform is designed with a simple interface for beginners and experienced players."
          : "हाँ। इसका इंटरफ़ेस आसान है, जिससे नए और अनुभवी दोनों खिलाड़ी आसानी से उपयोग कर सकते हैं।"}
      </p>

    </div>

  </div>

  <div className="mt-16 rounded-3xl border border-red-600/30 bg-gradient-to-r from-[#0B1622] to-[#0F2232] p-10 text-center">

    <h2 className="text-4xl font-black text-white">

      {language === "en"
        ? "Start Your Gaming Journey Today"
        : "आज ही अपनी गेमिंग यात्रा शुरू करें"}

    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-300">

      {language === "en"
        ? "Download the latest BollyGame APK and enjoy exciting games, daily bonuses, referral rewards, cashback offers, and exclusive promotions."
        : "नवीनतम BollyGame APK डाउनलोड करें और शानदार गेम्स, बोनस, रेफरल रिवॉर्ड्स और कैशबैक ऑफर का आनंद लें।"}

    </p>

    <Link
      href="/download"
      className="mt-8 inline-flex rounded-xl bg-red-600 px-10 py-4 text-lg font-bold text-white transition hover:bg-red-700"
    >
      {language === "en"
        ? "Download BollyGame APK"
        : "बॉलीगेम APK डाउनलोड करें"}
    </Link>

  </div>

  <ExploreMore />

</div>

</div>

</div>

</section>

</main>

<Footer />

</>
);
}
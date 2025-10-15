
import React, { useEffect, useState } from "react";

function DailyQuranVerse() {
  const [ayah, setAyah] = useState("");
  const [surah, setSurah] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDailyVerse() {
      try {
        const today = new Date().toLocaleDateString();
        let savedData = null;
        try {
          savedData = JSON.parse(localStorage.getItem("dailyVerseArabic"));
        } catch {
          savedData = null;
        }

        if (savedData && savedData.date === today) {
          setAyah(savedData.ayah || "");
          setSurah(savedData.surah || "");
          setLoading(false);
          return;
        }

        const randomAyahNumber = Math.floor(Math.random() * 6236) + 1;
        const response = await fetch(
          `https://api.alquran.cloud/v1/ayah/${randomAyahNumber}/ar.alafasy`
        );

        if (!response.ok) throw new Error(`API error ${response.status}`);
        const data = await response.json();

        const verseText = data?.data?.text || "";
        const surahName = `${data?.data?.surah?.englishName || "Surah"} (${data?.data?.surah?.englishNameTranslation || ""})`;

        setAyah(verseText);
        setSurah(surahName);

        localStorage.setItem(
          "dailyVerseArabic",
          JSON.stringify({ date: today, ayah: verseText, surah: surahName })
        );
      } catch (error) {
        console.error("Error fetching Arabic Qur'an verse:", error);
        setAyah("إِنَّ مَعَ الْعُسْرِ يُسْرًا");
        setSurah("Surah Ash-Sharh (The Relief)");
      } finally {
        setLoading(false);
      }
    }

    fetchDailyVerse();
  }, []);

  return (
    <div className="p-6 bg-green-50 rounded-2xl shadow-lg text-center">
      {loading ? (
        <p className="text-gray-600">Loading daily Qur'an verse...</p>
      ) : (
        <div>
          <p
            dir="rtl"
            className="font-arabic text-2xl text-green-800 mb-2"
            style={{ fontFamily: "Amiri, serif" }}
          >
            {ayah}
          </p>
          <small className="text-sm text-gray-600">{surah}</small>
        </div>
      )}
    </div>
  );
}

export default DailyQuranVerse;
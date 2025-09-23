import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function Home() {
return (


{/* Hero Section */}





Top Perform




Athletic Training & Sport Injury Rehabilitation





ابدأ الآن


تعرف على خدماتنا







  {/* Services Section */}
  <section className="py-20 px-6 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      { title: "إعداد بدني وجري", desc: "خطط شخصية لتطوير الأداء الرياضي والسرعة." },
      { title: "تأهيل الإصابات الرياضية", desc: "برامج متخصصة للتعافي والعودة الآمنة للرياضة." },
      { title: "متابعة أونلاين", desc: "جلسات تدريبية واستشارات عبر الإنترنت." },
    ].map((s, i) => (
      <Card key={i} className="shadow-lg rounded-2xl hover:scale-105 transition-transform">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-semibold mb-3 text-purple-900">{s.title}</h3>
          <p className="mb-6 text-gray-600 leading-relaxed">{s.desc}</p>
          <Button className="bg-purple-900 text-white px-5 py-2 rounded-xl">
            اعرف أكثر
          </Button>
        </CardContent>
      </Card>
    ))}
  </section>

  {/* Testimonials */}
  <section className="bg-gray-100 py-20 px-6">
    <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
      آراء وتجارب العملاء
    </h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <Card className="p-8 shadow-md">
        <p className="italic text-lg leading-relaxed">
          “أفضل تجربة تدريب مررت بها! تحسن أدائي بشكل ملحوظ وأصبحت أسرع في السباقات.”
        </p>
        <p className="mt-4 font-semibold text-purple-800">- عميل سعيد ⭐⭐⭐⭐⭐</p>
      </Card>
      <Card className="p-8 shadow-md">
        <p className="italic text-lg leading-relaxed">
          “برنامج التأهيل ساعدني أرجع ألعب بعد إصابة قوية بدون خوف أو ألم.”
        </p>
        <p className="mt-4 font-semibold text-purple-800">- متدرب ⭐⭐⭐⭐⭐</p>
      </Card>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-purple-900 text-white text-center py-8">
    <p className="text-lg">© 2025 Top Perform. جميع الحقوق محفوظة.</p>
    <div className="flex justify-center gap-6 mt-4">
      <a href="mailto:top.perform.kw@gmail.com" className="hover:underline">
        📧 إيميل
      </a>
      <a href="https://wa.me/965XXXXXXXX" className="hover:underline">
        💬 واتساب
      </a>
      <a href="https://instagram.com/yourpage" className="hover:underline">
        📷 إنستغرام
      </a>
    </div>
  </footer>
</div>



);
}

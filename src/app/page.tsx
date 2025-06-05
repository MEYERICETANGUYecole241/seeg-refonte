import Header from "@/components/Header"
import ContactForm from "@/components/ContactForm";
import NewsCard from '@/components/NewsCard'


export default function Home() {
  return (
    <div>
         
      <Header />
    
      <NewsCard/>
      <ContactForm />
    </div>
  );
}

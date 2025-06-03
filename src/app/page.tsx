import ServiceCard from "@/components/ServiceCard";
import { Star } from "lucide-react"; // Import a LucideIcon, e.g., Star

export default function Home() {
  return (
    <div>
      <ServiceCard title="Service Title" description="Service description goes here." icon={Star} />
    </div>
  );
}

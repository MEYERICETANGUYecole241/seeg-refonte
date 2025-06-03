// components/ServiceCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

export default function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  const content = (
    <Card className="group hover:shadow-xl transition duration-300 ease-in-out border rounded-2xl p-4 cursor-pointer h-full">
      <CardContent className="flex flex-col items-start space-y-4">
        <div className="bg-[#004225] text-white p-3 rounded-full">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold group-hover:text-[#004225]">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

import { CheckCircle, Award, BookOpen, User, Gift } from "lucide-react";

const badges = [
  { icon: CheckCircle, label: "Serving USA Families" },
  { icon: Award, label: "Wifaq ul Madaris Certified" },
  { icon: BookOpen, label: "6+ Years Experience" },
  { icon: User, label: "Female Teachers Available" },
  { icon: Gift, label: "Free First Class" },
];

interface TrustBadgesProps {
  dark?: boolean;
}

export default function TrustBadges({ dark = false }: TrustBadgesProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((b) => {
        const Icon = b.icon;
        return (
          <div
            key={b.label}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
              dark
                ? "border-white/20 bg-white/10 text-white"
                : "border-gray-200 bg-white text-navy shadow-sm"
            }`}
          >
            <Icon size={14} className={dark ? "text-gold" : "text-gold"} />
            <span>{b.label}</span>
          </div>
        );
      })}
    </div>
  );
}

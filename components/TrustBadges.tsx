
const badges = [
  { icon: "🇺🇸", label: "Serving USA Families" },
  { icon: "🏅", label: "Wifaq ul Madaris Certified" },
  { icon: "📚", label: "6+ Years Experience" },
  { icon: "👩", label: "Female Teachers Available" },
  { icon: "🎁", label: "Free First Class" },
];

interface TrustBadgesProps {
  dark?: boolean;
}

export default function TrustBadges({ dark = false }: TrustBadgesProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((b) => (
        <div
          key={b.label}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
            dark
              ? "border-white/20 bg-white/10 text-white"
              : "border-gray-200 bg-white text-navy shadow-sm"
          }`}
        >
          <span>{b.icon}</span>
          <span>{b.label}</span>
        </div>
      ))}
    </div>
  );
}
